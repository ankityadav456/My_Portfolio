"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const MotionGrid = () => {
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

    // Grid configuration
    const GRID_SIZE = 56; // 56px balanced cyber grid cells
    const CROSS_SIZE = 2; // Subtle crosshairs at intersections

    // Mouse coordinates (interpolated for liquid-smooth movement)
    let mouse = { x: -1000, y: -1000, active: false };
    let smoothMouse = { x: -1000, y: -1000 };
    let hasMouseInteracted = false;

    // Palette configurations for dark and light modes
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

    // Resize handler
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!hasMouseInteracted) {
        smoothMouse.x = width * 0.5;
        smoothMouse.y = height * 0.45;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Global mouse tracking
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      hasMouseInteracted = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // ─────────────────────────────────────────────
    // LIGHT BEAMS / ELECTRIC PULSE SYSTEM (SLOW & SUBTLE)
    // ─────────────────────────────────────────────
    // More rays ("lots of rays"), but very low opacity and slow motion
    const MAX_BEAMS = 24;
    const beams = [];

    const createBeam = (overrideAxis = null, nearPos = null) => {
      const numCols = Math.ceil(width / GRID_SIZE) + 1;
      const numRows = Math.ceil(height / GRID_SIZE) + 1;

      const isHorizontal = overrideAxis !== null ? overrideAxis === "h" : Math.random() > 0.5;
      const palette = BEAM_PALETTES[Math.floor(Math.random() * BEAM_PALETTES.length)];
      const direction = Math.random() > 0.5 ? 1 : -1;
      const length = 70 + Math.random() * 110; // subtle beam length
      // Slow, calm drift speed (18 to 38 px/sec instead of fast 160-380 px/sec)
      const speed = (18 + Math.random() * 20) * direction;

      let gridIndex;
      if (nearPos !== null) {
        const targetIdx = isHorizontal
          ? Math.round(nearPos.y / GRID_SIZE)
          : Math.round(nearPos.x / GRID_SIZE);
        gridIndex = targetIdx + (Math.floor(Math.random() * 3) - 1);
      } else {
        gridIndex = isHorizontal
          ? Math.floor(Math.random() * numRows)
          : Math.floor(Math.random() * numCols);
      }

      const startPos = direction > 0 ? -length : (isHorizontal ? width : height) + length;

      // Significantly lower visibility so content remains the absolute primary focus
      const alpha = isDark
        ? 0.12 + Math.random() * 0.14 // 0.12 - 0.26 in dark mode
        : 0.08 + Math.random() * 0.10; // 0.08 - 0.18 in light mode

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

    // Initialize beams scattered across the screen
    for (let i = 0; i < MAX_BEAMS; i++) {
      const beam = createBeam();
      const maxSpan = beam.isHorizontal ? width : height;
      beam.pos = Math.random() * maxSpan;
      beams.push(beam);
    }

    // Occasional subtle interactive beam generator triggered by user movement
    let lastUserBeamTime = 0;

    // ─────────────────────────────────────────────
    // RENDER LOOP
    // ─────────────────────────────────────────────
    let lastTime = null;

    const render = (now) => {
      if (!lastTime) lastTime = now;
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      // Mouse smoothing
      if (mouse.active) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.08;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.08;

        // Spawn a reactive light pulse near cursor occasionally
        if (now - lastUserBeamTime > 1800 && Math.random() < 0.25) {
          beams.push(createBeam(Math.random() > 0.5 ? "h" : "v", smoothMouse));
          if (beams.length > MAX_BEAMS + 3) beams.shift();
          lastUserBeamTime = now;
        }
      } else {
        // Gentle idle drift
        smoothMouse.x += (width * 0.5 + Math.sin(now * 0.0006) * 120 - smoothMouse.x) * 0.02;
        smoothMouse.y += (height * 0.4 + Math.cos(now * 0.0005) * 80 - smoothMouse.y) * 0.02;
      }

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / GRID_SIZE) + 1;
      const rows = Math.ceil(height / GRID_SIZE) + 1;
      const spotlightRadius = 240;

      // ─────────────────────────────────────────────
      // 1. BASE GRID LINES (CLEAN & SUBTLE)
      // ─────────────────────────────────────────────
      const baseLineAlpha = isDark ? 0.024 : 0.022;
      ctx.lineWidth = 1;

      // Vertical lines
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

      // Horizontal lines
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

      // ─────────────────────────────────────────────
      // 2. CURSOR SPOTLIGHT AURA (SOFT & AMBIENT)
      // ─────────────────────────────────────────────
      const spotX = smoothMouse.x;
      const spotY = smoothMouse.y;
      const spotGrad = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, spotlightRadius);

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

      // ─────────────────────────────────────────────
      // 3. MOVING LIGHT BEAMS (SLOW, DELICATE & THIN THREADS)
      // ─────────────────────────────────────────────
      for (let i = beams.length - 1; i >= 0; i--) {
        const b = beams[i];
        b.pos += b.speed * delta;

        const maxCoord = b.isHorizontal ? width : height;
        const lineCoord = b.gridIndex * GRID_SIZE;

        // Check boundary & recycle
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

        // Smooth tapering light gradient (no harsh ends)
        const beamGrad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        const { r, g, b: blue } = b.palette;
        beamGrad.addColorStop(0, `rgba(${r}, ${g}, ${blue}, 0)`);
        beamGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${blue}, ${b.alpha * 0.5})`);
        beamGrad.addColorStop(1, `rgba(${r}, ${g}, ${blue}, ${b.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = 1; // Delicate hairline
        ctx.stroke();

        // Subtle micro-tip glow (soft and small, no harsh solid dots)
        const tipGlow = ctx.createRadialGradient(headX, headY, 0, headX, headY, 3);
        tipGlow.addColorStop(0, `rgba(${r}, ${g}, ${blue}, ${b.alpha * 0.7})`);
        tipGlow.addColorStop(1, "transparent");
        ctx.fillStyle = tipGlow;
        ctx.beginPath();
        ctx.arc(headX, headY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // ─────────────────────────────────────────────
      // 4. PRECISION INTERSECTION CROSSHAIRS (+)
      // ─────────────────────────────────────────────
      const baseCrossAlpha = isDark ? 0.045 : 0.04;

      for (let c = 0; c <= cols; c++) {
        const x = c * GRID_SIZE;
        for (let r = 0; r <= rows; r++) {
          const y = r * GRID_SIZE;

          let alpha = baseCrossAlpha;
          let color = isDark ? "148, 163, 184" : "100, 116, 139";

          // Calculate distance to smooth cursor
          const dx = x - spotX;
          const dy = y - spotY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < spotlightRadius) {
            const proximity = 1 - dist / spotlightRadius;
            alpha += proximity * (isDark ? 0.16 : 0.12);
            color = isDark ? "56, 189, 248" : "249, 115, 22";
          }

          // Draw delicate crosshair '+'
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

      animId = requestAnimationFrame(render);
    };

    // Pause animation when browser tab is hidden to save battery/resources
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
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default MotionGrid;
