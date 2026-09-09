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

    // Mouse coordinates relative to Hero canvas
    let mouse = { x: -1000, y: -1000, active: false };
    let smoothMouse = { x: 0, y: 0 };

    const GRID_SIZE = 56; // 56px balanced cyber grid cells
    const CROSS_SIZE = 2; // Subtle crosshairs at intersections

    const isDark = theme === "dark";

    const BEAM_PALETTES = isDark
      ? [
          { r: 56, g: 189, b: 248 },  // Electric Sky Cyan
          { r: 99, g: 102, b: 241 },  // Indigo Core
          { r: 168, g: 85, b: 247 },  // Cyber Violet
          { r: 249, g: 115, b: 22 },  // Warm Amber Ember
          { r: 148, g: 163, b: 184 }, // Cool Slate
        ]
      : [
          { r: 249, g: 115, b: 22 },  // Soft Amber
          { r: 14, g: 165, b: 233 },  // Gentle Sky
          { r: 99, g: 102, b: 241 },  // Soft Indigo
          { r: 148, g: 163, b: 184 }, // Minimalist Slate
        ];

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

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

    // ─────────────────────────────────────────────
    // CONSTELLATION PARTICLES (Delicate Micro-Stars)
    // ─────────────────────────────────────────────
    const NUM_PARTICLES = 30;
    const particles = [];

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        radius: 0.7 + Math.random() * 1.1,
        baseAlpha: 0.15 + Math.random() * 0.25,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -(0.14 + Math.random() * 0.26),
        phase: Math.random() * Math.PI * 2,
      });
    }

    // ─────────────────────────────────────────────
    // LIGHT RAYS / SLOW ELECTRIC BEAMS
    // ─────────────────────────────────────────────
    const MAX_BEAMS = 22;
    const beams = [];

    const createBeam = () => {
      const numCols = Math.ceil((width || 1200) / GRID_SIZE) + 1;
      const numRows = Math.ceil((height || 800) / GRID_SIZE) + 1;

      const isHorizontal = Math.random() > 0.5;
      const palette = BEAM_PALETTES[Math.floor(Math.random() * BEAM_PALETTES.length)];
      const direction = Math.random() > 0.5 ? 1 : -1;
      const length = 60 + Math.random() * 95;
      // Calm, slow-moving speed (16 to 34 px/sec)
      const speed = (16 + Math.random() * 18) * direction;

      const gridIndex = isHorizontal
        ? Math.floor(Math.random() * numRows)
        : Math.floor(Math.random() * numCols);

      const startPos = direction > 0 ? -length : (isHorizontal ? width : height) + length;

      // Subtle, non-distracting opacity so content remains focal
      const alpha = isDark
        ? 0.11 + Math.random() * 0.12
        : 0.07 + Math.random() * 0.09;

      return {
        isHorizontal,
        gridIndex,
        pos: startPos,
        length,
        speed,
        palette,
        alpha,
      };
    };

    for (let i = 0; i < MAX_BEAMS; i++) {
      const b = createBeam();
      const maxSpan = b.isHorizontal ? width || 1200 : height || 800;
      b.pos = Math.random() * maxSpan;
      beams.push(b);
    }

    let lastTime = null;
    let time = 0;

    // ─────────────────────────────────────────────
    // RENDER LOOP
    // ─────────────────────────────────────────────
    const render = (now) => {
      if (!lastTime) lastTime = now;
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      time += delta * 0.35;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouse.active) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.06;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.06;
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

      // Center Aurora
      const a1X = width * 0.5 + Math.sin(time * 0.35) * (width * 0.12);
      const a1Y = height * 0.48 + Math.cos(time * 0.3) * (height * 0.1);
      const a1Radius = Math.max(width * 0.48, 380);
      const grad1 = ctx.createRadialGradient(a1X, a1Y, 0, a1X, a1Y, a1Radius);
      if (isDark) {
        grad1.addColorStop(0, "rgba(99, 102, 241, 0.12)");
        grad1.addColorStop(0.5, "rgba(79, 70, 229, 0.05)");
        grad1.addColorStop(1, "transparent");
      } else {
        grad1.addColorStop(0, "rgba(99, 102, 241, 0.06)");
        grad1.addColorStop(0.5, "rgba(79, 70, 229, 0.015)");
        grad1.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Left-Top Aurora
      const a2X = width * 0.28 + Math.cos(time * 0.28) * (width * 0.1);
      const a2Y = height * 0.32 + Math.sin(time * 0.32) * (height * 0.08);
      const a2Radius = Math.max(width * 0.42, 340);
      const grad2 = ctx.createRadialGradient(a2X, a2Y, 0, a2X, a2Y, a2Radius);
      if (isDark) {
        grad2.addColorStop(0, "rgba(56, 189, 248, 0.10)");
        grad2.addColorStop(0.6, "rgba(14, 165, 233, 0.025)");
        grad2.addColorStop(1, "transparent");
      } else {
        grad2.addColorStop(0, "rgba(253, 186, 116, 0.06)");
        grad2.addColorStop(0.6, "rgba(251, 146, 60, 0.015)");
        grad2.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Right-Bottom Aurora
      const a3X = width * 0.72 + Math.sin(time * 0.25) * (width * 0.09);
      const a3Y = height * 0.62 + Math.cos(time * 0.28) * (height * 0.09);
      const a3Radius = Math.max(width * 0.38, 300);
      const grad3 = ctx.createRadialGradient(a3X, a3Y, 0, a3X, a3Y, a3Radius);
      if (isDark) {
        grad3.addColorStop(0, "rgba(56, 189, 248, 0.05)");
        grad3.addColorStop(0.7, "rgba(99, 102, 241, 0.015)");
        grad3.addColorStop(1, "transparent");
      } else {
        grad3.addColorStop(0, "rgba(249, 115, 22, 0.04)");
        grad3.addColorStop(0.7, "rgba(234, 88, 12, 0.01)");
        grad3.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // ─────────────────────────────────────────────
      // LAYER 2: ARCHITECTURAL BLUEPRINT GRID & SLOW RAYS
      // ─────────────────────────────────────────────
      const cols = Math.ceil(width / GRID_SIZE) + 1;
      const rows = Math.ceil(height / GRID_SIZE) + 1;
      const spotlightRadius = 240;

      // Base Grid Lines
      const baseLineAlpha = isDark ? 0.024 : 0.022;
      ctx.lineWidth = 1;

      for (let c = 0; c <= cols; c++) {
        const x = c * GRID_SIZE;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.strokeStyle = isDark
          ? `rgba(148, 163, 184, ${baseLineAlpha})`
          : `rgba(15, 23, 42, ${baseLineAlpha})`;
        ctx.stroke();
      }

      for (let r = 0; r <= rows; r++) {
        const y = r * GRID_SIZE;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = isDark
          ? `rgba(148, 163, 184, ${baseLineAlpha})`
          : `rgba(15, 23, 42, ${baseLineAlpha})`;
        ctx.stroke();
      }

      // Cursor spotlight aura
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
          spotGrad.addColorStop(0, "rgba(56, 189, 248, 0.05)");
          spotGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.02)");
          spotGrad.addColorStop(1, "transparent");
        } else {
          spotGrad.addColorStop(0, "rgba(249, 115, 22, 0.04)");
          spotGrad.addColorStop(0.5, "rgba(234, 88, 12, 0.01)");
          spotGrad.addColorStop(1, "transparent");
        }
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Moving Light Rays
      for (let i = beams.length - 1; i >= 0; i--) {
        const b = beams[i];
        b.pos += b.speed * delta;

        const maxCoord = b.isHorizontal ? width : height;
        const lineCoord = b.gridIndex * GRID_SIZE;

        if (
          (b.speed > 0 && b.pos - b.length > maxCoord) ||
          (b.speed < 0 && b.pos + b.length < 0)
        ) {
          beams[i] = createBeam();
          continue;
        }

        const headX = b.isHorizontal ? b.pos : lineCoord;
        const headY = b.isHorizontal ? lineCoord : b.pos;
        const tailX = b.isHorizontal ? b.pos - (b.speed > 0 ? b.length : -b.length) : lineCoord;
        const tailY = b.isHorizontal ? lineCoord : b.pos - (b.speed > 0 ? b.length : -b.length);

        const beamGrad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        const { r, g, b: blue } = b.palette;
        beamGrad.addColorStop(0, `rgba(${r}, ${g}, ${blue}, 0)`);
        beamGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${blue}, ${b.alpha * 0.5})`);
        beamGrad.addColorStop(1, `rgba(${r}, ${g}, ${blue}, ${b.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = 1;
        ctx.stroke();

        const tipGlow = ctx.createRadialGradient(headX, headY, 0, headX, headY, 3);
        tipGlow.addColorStop(0, `rgba(${r}, ${g}, ${blue}, ${b.alpha * 0.7})`);
        tipGlow.addColorStop(1, "transparent");
        ctx.fillStyle = tipGlow;
        ctx.beginPath();
        ctx.arc(headX, headY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Crosshairs at grid intersections
      const baseCrossAlpha = isDark ? 0.045 : 0.04;
      for (let c = 0; c <= cols; c++) {
        const x = c * GRID_SIZE;
        for (let r = 0; r <= rows; r++) {
          const y = r * GRID_SIZE;

          let alpha = baseCrossAlpha;
          let color = isDark ? "148, 163, 184" : "100, 116, 139";

          if (mouse.active) {
            const dx = x - smoothMouse.x;
            const dy = y - smoothMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < spotlightRadius) {
              const proximity = 1 - dist / spotlightRadius;
              alpha += proximity * (isDark ? 0.16 : 0.12);
              color = isDark ? "56, 189, 248" : "249, 115, 22";
            }
          }

          ctx.beginPath();
          ctx.moveTo(x - CROSS_SIZE, y);
          ctx.lineTo(x + CROSS_SIZE, y);
          ctx.moveTo(x, y - CROSS_SIZE);
          ctx.lineTo(x, y + CROSS_SIZE);
          ctx.strokeStyle = `rgba(${color}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // ─────────────────────────────────────────────
      // LAYER 3: CONSTELLATION NODES & THREADS
      // ─────────────────────────────────────────────
      ctx.save();
      const numP = particles.length;

      for (let i = 0; i < numP; i++) {
        const p = particles[i];
        p.y += p.vy;
        p.x += Math.sin(time + p.phase) * 0.25;

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

        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;
      }

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
              : `rgba(14, 165, 233, ${lineAlpha * 0.9})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < numP; i++) {
        const p = particles[i];
        const alpha = p.baseAlpha * (0.7 + Math.sin(time * 1.5 + p.phase) * 0.3);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(14, 165, 233, ${alpha * 0.85})`;
        ctx.fill();
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        lastTime = null;
        animId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
