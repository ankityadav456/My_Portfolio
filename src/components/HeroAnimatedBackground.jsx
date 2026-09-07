"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const HeroAnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    // Mouse coordinates
    let mouse = { x: -1000, y: -1000, active: false };
    let smoothMouse = { x: 0, y: 0 };

    const GRID_SIZE = 72; // Clean architectural grid spacing
    const CROSS_SIZE = 3.5; // Precision crosshair size

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Initialize smooth mouse at center if inactive
      if (!mouse.active) {
        smoothMouse.x = width * 0.5;
        smoothMouse.y = height * 0.45;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // ═══════════════════════════════════════════════
    // CONSTELLATION PARTICLES (Delicate Micro-Stars)
    // ═══════════════════════════════════════════════
    const NUM_PARTICLES = 36;
    const particles = [];

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        radius: 0.75 + Math.random() * 1.3,
        baseAlpha: 0.18 + Math.random() * 0.35,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.18 + Math.random() * 0.32),
        phase: Math.random() * Math.PI * 2,
      });
    }

    let lastTime = null;
    let time = 0;

    // ═══════════════════════════════════════════════
    // RENDER LOOP
    // ═══════════════════════════════════════════════
    const render = (now) => {
      if (!lastTime) lastTime = now;
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      time += delta * 0.4; // Calm, continuous progression

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark";

      // Smooth mouse interpolation
      if (mouse.active) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.05;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.05;
      } else {
        const targetX = width * 0.5 + Math.sin(time * 0.3) * (width * 0.08);
        const targetY = height * 0.45 + Math.cos(time * 0.25) * (height * 0.06);
        smoothMouse.x += (targetX - smoothMouse.x) * 0.02;
        smoothMouse.y += (targetY - smoothMouse.y) * 0.02;
      }

      // ─────────────────────────────────────────────
      // LAYER 1: LIQUID AURORA MESH (ORGANIC AMBIENCE)
      // ─────────────────────────────────────────────
      ctx.save();

      // Aurora 1: Deep Midnight Indigo / Violet (Center-Stage Depth)
      const a1X = width * 0.5 + Math.sin(time * 0.35) * (width * 0.12);
      const a1Y = height * 0.48 + Math.cos(time * 0.3) * (height * 0.1);
      const a1Radius = Math.max(width * 0.48, 380);
      const grad1 = ctx.createRadialGradient(a1X, a1Y, 0, a1X, a1Y, a1Radius);
      if (isDark) {
        grad1.addColorStop(0, "rgba(99, 102, 241, 0.13)"); // Indigo core
        grad1.addColorStop(0.5, "rgba(79, 70, 229, 0.06)");
        grad1.addColorStop(1, "transparent");
      } else {
        grad1.addColorStop(0, "rgba(99, 102, 241, 0.07)");
        grad1.addColorStop(0.5, "rgba(79, 70, 229, 0.02)");
        grad1.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Aurora 2: Electric Cyan / Sky Blue (Left-Top Ethereal Bloom)
      const a2X = width * 0.28 + Math.cos(time * 0.28) * (width * 0.1);
      const a2Y = height * 0.32 + Math.sin(time * 0.32) * (height * 0.08);
      const a2Radius = Math.max(width * 0.42, 340);
      const grad2 = ctx.createRadialGradient(a2X, a2Y, 0, a2X, a2Y, a2Radius);
      if (isDark) {
        grad2.addColorStop(0, "rgba(56, 189, 248, 0.11)"); // Sky cyan
        grad2.addColorStop(0.6, "rgba(14, 165, 233, 0.03)");
        grad2.addColorStop(1, "transparent");
      } else {
        grad2.addColorStop(0, "rgba(14, 165, 233, 0.07)");
        grad2.addColorStop(0.6, "rgba(56, 189, 248, 0.02)");
        grad2.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Aurora 3: Subtle Warm Sunset Ember (Right-Bottom Warmth)
      const a3X = width * 0.72 + Math.sin(time * 0.25) * (width * 0.09);
      const a3Y = height * 0.62 + Math.cos(time * 0.28) * (height * 0.09);
      const a3Radius = Math.max(width * 0.38, 300);
      const grad3 = ctx.createRadialGradient(a3X, a3Y, 0, a3X, a3Y, a3Radius);
      if (isDark) {
        grad3.addColorStop(0, "rgba(249, 115, 22, 0.05)"); // Soft ember glow
        grad3.addColorStop(0.7, "rgba(244, 63, 94, 0.015)");
        grad3.addColorStop(1, "transparent");
      } else {
        grad3.addColorStop(0, "rgba(234, 88, 12, 0.035)");
        grad3.addColorStop(0.7, "rgba(244, 63, 94, 0.01)");
        grad3.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // ─────────────────────────────────────────────
      // LAYER 2: ARCHITECTURAL BLUEPRINT GRID
      // ─────────────────────────────────────────────
      const baseLineAlpha = isDark ? 0.025 : 0.035;
      const baseCrossAlpha = isDark ? 0.06 : 0.08;
      const spotlightRadius = 280;

      ctx.save();
      ctx.lineWidth = 1;

      const cols = Math.ceil(width / GRID_SIZE) + 1;
      const rows = Math.ceil(height / GRID_SIZE) + 1;

      // Vertical grid lines
      for (let c = 0; c <= cols; c++) {
        const x = c * GRID_SIZE;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.strokeStyle = isDark
          ? `rgba(255, 255, 255, ${baseLineAlpha})`
          : `rgba(15, 23, 42, ${baseLineAlpha})`;
        ctx.stroke();
      }

      // Horizontal grid lines
      for (let r = 0; r <= rows; r++) {
        const y = r * GRID_SIZE;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = isDark
          ? `rgba(255, 255, 255, ${baseLineAlpha})`
          : `rgba(15, 23, 42, ${baseLineAlpha})`;
        ctx.stroke();
      }

      // Interactive subtle spotlight aura on the grid
      if (mouse.active) {
        const spotGrad = ctx.createRadialGradient(
          smoothMouse.x,
          smoothMouse.y,
          0,
          smoothMouse.x,
          smoothMouse.y,
          spotlightRadius
        );

        if (isDark) {
          spotGrad.addColorStop(0, "rgba(56, 189, 248, 0.10)");
          spotGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.04)");
          spotGrad.addColorStop(1, "transparent");
        } else {
          spotGrad.addColorStop(0, "rgba(249, 115, 22, 0.09)");
          spotGrad.addColorStop(0.5, "rgba(234, 88, 12, 0.03)");
          spotGrad.addColorStop(1, "transparent");
        }

        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Precision intersection crosshairs (+)
      for (let c = 0; c <= cols; c++) {
        const x = c * GRID_SIZE;
        for (let r = 0; r <= rows; r++) {
          const y = r * GRID_SIZE;

          let alpha = baseCrossAlpha;
          let color = isDark ? "255, 255, 255" : "15, 23, 42";

          if (mouse.active) {
            const dx = x - smoothMouse.x;
            const dy = y - smoothMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < spotlightRadius) {
              const boost = (1 - dist / spotlightRadius) * (isDark ? 0.35 : 0.28);
              alpha += boost;
              color = isDark ? "56, 189, 248" : "249, 115, 22";
            }
          }

          ctx.beginPath();
          ctx.moveTo(x - CROSS_SIZE, y);
          ctx.lineTo(x + CROSS_SIZE, y);
          ctx.moveTo(x, y - CROSS_SIZE);
          ctx.lineTo(x, y + CROSS_SIZE);
          ctx.strokeStyle = `rgba(${color}, ${alpha})`;
          ctx.stroke();
        }
      }
      ctx.restore();

      // ─────────────────────────────────────────────
      // LAYER 3: CONSTELLATION NODES & THREADS
      // ─────────────────────────────────────────────
      ctx.save();
      const numP = particles.length;

      // Update positions
      for (let i = 0; i < numP; i++) {
        const p = particles[i];
        p.y += p.vy;
        p.x += Math.sin(time + p.phase) * 0.25;

        // Gentle cursor pushback
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && dist > 0) {
            const force = (1 - dist / 100) * 0.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Screen wrap
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;
      }

      // Draw delicate connective threads between close nodes
      for (let i = 0; i < numP; i++) {
        for (let j = i + 1; j < numP; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * (isDark ? 0.12 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${lineAlpha})`
              : `rgba(234, 88, 12, ${lineAlpha * 0.9})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      for (let i = 0; i < numP; i++) {
        const p = particles[i];
        const alpha = p.baseAlpha * (0.7 + Math.sin(time * 1.5 + p.phase) * 0.3);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(234, 88, 12, ${alpha * 0.85})`;
        ctx.fill();
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none"
      style={{
        maskImage: "radial-gradient(ellipse 95% 95% at 50% 50%, #000 65%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 95% 95% at 50% 50%, #000 65%, transparent 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};

export default HeroAnimatedBackground;
