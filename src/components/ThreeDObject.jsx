"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ThreeDObject = ({ shape = "torus" }) => {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Master Group for Mouse Rotation
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Core Geometry based on shape
    let coreGeometry;
    if (shape === "torus") {
      coreGeometry = new THREE.TorusKnotGeometry(1.15, 0.38, 128, 32, 2, 3);
    } else if (shape === "sphere") {
      coreGeometry = new THREE.IcosahedronGeometry(1.6, 3);
    } else {
      coreGeometry = new THREE.OctahedronGeometry(1.7, 2);
    }

    // Material with rich metallic/glass reflections
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      emissive: 0x070b14,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    masterGroup.add(coreMesh);

    // 2. Outer Holographic Wireframe
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    wireframeMesh.scale.set(1.02, 1.02, 1.02);
    masterGroup.add(wireframeMesh);

    // 3. Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.018, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    masterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.015, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.55,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 5;
    masterGroup.add(ring2);

    // 4. Floating Particles Dust
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfb923c,
      size: 0.04,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    masterGroup.add(particles);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xf97316, 4, 15);
    orangeLight.position.set(4, 3, 4);
    scene.add(orangeLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 4, 15);
    cyanLight.position.set(-4, -2, 3);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2.5, 12);
    purpleLight.position.set(0, 4, -3);
    scene.add(purpleLight);

    // Mouse Tracking State
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = Math.max(-1.5, Math.min(1.5, x));
      mouseY = Math.max(-1.5, Math.min(1.5, y));

      targetRotationX = -mouseY * 0.9;
      targetRotationY = mouseX * 0.9;
    };

    const handleGlobalMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetRotationX = -y * 0.65;
      targetRotationY = x * 0.65;
    };

    const handleMouseDown = (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleGlobalMouseUp = () => {
      isDragging = false;
    };

    const handleDragMove = (event) => {
      if (!isDragging) return;
      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;

      masterGroup.rotation.y += deltaX * 0.01;
      masterGroup.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mousemove", handleDragMove);

    // Responsive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp to target mouse position
      if (!isDragging) {
        masterGroup.rotation.x += (targetRotationX - masterGroup.rotation.x) * 0.05;
        masterGroup.rotation.y += (targetRotationY - masterGroup.rotation.y) * 0.05;
      }

      // Idle Organic Motion
      coreMesh.rotation.z = Math.sin(elapsedTime * 0.35) * 0.15;
      wireframeMesh.rotation.z = Math.sin(elapsedTime * 0.35) * 0.15;

      ring1.rotation.z += 0.005;
      ring2.rotation.z -= 0.004;
      particles.rotation.y = elapsedTime * 0.04;

      // Soft Floating Bobbing
      masterGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleDragMove);
      resizeObserver.disconnect();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }

      coreGeometry.dispose();
      coreMaterial.dispose();
      wireframeMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [shape]);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] cursor-grab active:cursor-grabbing select-none"
    />
  );
};

export default ThreeDObject;