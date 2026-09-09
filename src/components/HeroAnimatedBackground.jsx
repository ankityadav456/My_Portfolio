"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

// ═══════════════════════════════════════════════════════════════════════════
// CUSTOM VISIBILITY & ANIMATION SETTINGS
// Adjust any value below to customize the hero background moving objects
// ═══════════════════════════════════════════════════════════════════════════
export const HERO_BG_CONFIG = {
  // 1. MOVING ELECTRIC LIGHT BEAMS
  beams: {
    countDesktop: 10,       // Total beams gliding across the grid on Desktop
    countMobile: 4,        // Total beams on Mobile/touch devices
    speedMin: 30,           // Min gliding speed (px/sec)
    speedMax: 60,           // Max gliding speed (px/sec)
    lineWidth: 1.5,         // Beam line thickness (px)
    tipGlowRadius: 5,       // Glowing tip radius (px)
    // OPACITY (0.0 to 1.0): Increase for brighter/more visible beams
    opacityDark: { min: 0.20, max: 0.40 },   // Beam opacity in Dark Theme
    opacityLight: { min: 0.18, max: 0.30 },  // Beam opacity in Light Theme
  },

  // 2. CONSTELLATION NODES & FLOATING PARTICLES
  particles: {
    countDesktop: 15,       // Total floating particles on Desktop
    countMobile: 8,        // Total floating particles on Mobile
    radiusMin: 1.2,         // Minimum particle radius (px)
    radiusMax: 2.8,         // Maximum particle radius (px)
    // OPACITY (0.0 to 1.0): Increase for brighter/more visible particles
    opacityDark: { min: 0.35, max: 0.70 },   // Particle opacity in Dark Theme
    opacityLight: { min: 0.22, max: 0.50 },  // Particle opacity in Light Theme
    threadOpacityDark: 0.22,                 // Connecting cyber lines in Dark Theme
    threadOpacityLight: 0.16,                // Connecting cyber lines in Light Theme
  },

  // 3. AMBIENT AURORA MESH (LIQUID GRADIENTS)
  aurora: {
    opacityMultiplierDark: 1.0,    // Multiplier for background aurora glow in Dark Theme
    opacityMultiplierLight: 1.0,   // Multiplier for background aurora glow in Light Theme
  },

  // 4. CURSOR SPOTLIGHT
  spotlight: {
    radius: 260,                   // Spotlight glow radius around cursor (px)
    opacityDark: 0.08,             // Spotlight intensity in Dark Theme
    opacityLight: 0.07,            // Spotlight intensity in Light Theme
  },

  // 5. BLUEPRINT GRID & INTERSECTIONS
  grid: {
    cellSize: 56,                  // Grid cell size (px)
    lineOpacityDark: "0.035",      // Static grid lines opacity in Dark Theme
    lineOpacityLight: "0.035",     // Static grid lines opacity in Light Theme
    crosshairAlphaDark: 0.055,     // Crosshair alpha in Dark Theme
    crosshairAlphaLight: 0.045,    // Crosshair alpha in Light Theme
  },
};

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
    let isVisible = true;

    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    // Mouse coordinates relative to Hero canvas
    let mouse = { x: -1000, y: -1000, active: false };
    let smoothMouse = { x: 0, y: 0 };

    const GRID_SIZE = HERO_BG_CONFIG.grid.cellSize;
    const CROSS_SIZE = 3;

    const isDark = theme === "dark";

    // Vibrant, tasteful cyber beam palettes
    const BEAM_PALETTES = isDark
      ? [
          { r: 56, g: 189, b: 248 },  // Sky Cyan
          { r: 99, g: 102, b: 241 },  // Indigo Core
          { r: 168, g: 85, b: 247 },  // Cyber Violet
          { r: 249, g: 115, b: 22 },  // Warm Amber
          { r: 34, g: 197, b: 94 },   // Neon Emerald
        ]
      : [
          { r: 249, g: 115, b: 22 },  // Warm Amber
          { r: 14, g: 165, b: 233 },  // Sky Blue
          { r: 99, g: 102, b: 241 },  // Indigo
          { r: 234, g: 88, b: 12 },   // Vibrant Orange
          { r: 168, g: 85, b: 247 },  // Cyber Violet
        ];

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
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

    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    // ─────────────────────────────────────────────
    // CONSTELLATION PARTICLES (Delicate Glowing Nodes)
    // ─────────────────────────────────────────────
    const pConfig = HERO_BG_CONFIG.particles;
    const NUM_PARTICLES = isTouchDevice ? pConfig.countMobile : pConfig.countDesktop;
    const particles = [];

    const pOpacityRange = isDark ? pConfig.opacityDark : pConfig.opacityLight;

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        radius: pConfig.radiusMin + Math.random() * (pConfig.radiusMax - pConfig.radiusMin),
        baseAlpha: pOpacityRange.min + Math.random() * (pOpacityRange.max - pOpacityRange.min),
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.18 + Math.random() * 0.3),
        phase: Math.random() * Math.PI * 2,
      });
    }

    // ─────────────────────────────────────────────
    // MOVING ELECTRIC LIGHT BEAMS
    // ─────────────────────────────────────────────
    const bConfig = HERO_BG_CONFIG.beams;
    const MAX_BEAMS = isTouchDevice ? bConfig.countMobile : bConfig.countDesktop;
    const beams = [];

    const bOpacityRange = isDark ? bConfig.opacityDark : bConfig.opacityLight;

    const createBeam = () => {
      const numCols = Math.ceil((width || 1200) / GRID_SIZE) + 1;
      const numRows = Math.ceil((height || 800) / GRID_SIZE) + 1;

      const isHorizontal = Math.random() > 0.5;
      const palette = BEAM_PALETTES[Math.floor(Math.random() * BEAM_PALETTES.length)];
      const direction = Math.random() > 0.5 ? 1 : -1;
      const length = 75 + Math.random() * 110;
      
      const speedSpan = bConfig.speedMax - bConfig.speedMin;
      const speed = (bConfig.speedMin + Math.random() * speedSpan) * direction;

      const gridIndex = isHorizontal
        ? Math.floor(Math.random() * numRows)
        : Math.floor(Math.random() * numCols);

      const startPos = direction > 0 ? -length : (isHorizontal ? width : height) + length;

      const alphaSpan = bOpacityRange.max - bOpacityRange.min;
      const alpha = bOpacityRange.min + Math.random() * alphaSpan;

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
      const delta = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;

      time += delta * 0.45;

      // Smooth cursor interpolation
      if (mouse.active && !isTouchDevice) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.08;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.08;
      } else {
        const targetX = width * 0.5 + Math.sin(time * 0.3) * (width * 0.1);
        const targetY = height * 0.45 + Math.cos(time * 0.25) * (height * 0.08);
        smoothMouse.x += (targetX - smoothMouse.x) * 0.03;
        smoothMouse.y += (targetY - smoothMouse.y) * 0.03;
      }

      ctx.clearRect(0, 0, width, height);

      // ─────────────────────────────────────────────
      // LAYER 1: LIQUID AURORA MESH
      // ─────────────────────────────────────────────
      const auroraMult = isDark
        ? HERO_BG_CONFIG.aurora.opacityMultiplierDark
        : HERO_BG_CONFIG.aurora.opacityMultiplierLight;

      ctx.save();
      const a1X = width * 0.5 + Math.sin(time * 0.35) * (width * 0.14);
      const a1Y = height * 0.48 + Math.cos(time * 0.3) * (height * 0.12);
      const a1Radius = Math.max(width * 0.48, 400);
      const grad1 = ctx.createRadialGradient(a1X, a1Y, 0, a1X, a1Y, a1Radius);
      if (isDark) {
        grad1.addColorStop(0, `rgba(99, 102, 241, ${0.14 * auroraMult})`);
        grad1.addColorStop(0.5, `rgba(79, 70, 229, ${0.06 * auroraMult})`);
        grad1.addColorStop(1, "transparent");
      } else {
        grad1.addColorStop(0, `rgba(99, 102, 241, ${0.08 * auroraMult})`);
        grad1.addColorStop(0.5, `rgba(79, 70, 229, ${0.025 * auroraMult})`);
        grad1.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const a2X = width * 0.28 + Math.cos(time * 0.28) * (width * 0.12);
      const a2Y = height * 0.32 + Math.sin(time * 0.32) * (height * 0.1);
      const a2Radius = Math.max(width * 0.42, 350);
      const grad2 = ctx.createRadialGradient(a2X, a2Y, 0, a2X, a2Y, a2Radius);
      if (isDark) {
        grad2.addColorStop(0, `rgba(56, 189, 248, ${0.12 * auroraMult})`);
        grad2.addColorStop(0.6, `rgba(14, 165, 233, ${0.035 * auroraMult})`);
        grad2.addColorStop(1, "transparent");
      } else {
        grad2.addColorStop(0, `rgba(253, 186, 116, ${0.09 * auroraMult})`);
        grad2.addColorStop(0.6, `rgba(251, 146, 60, ${0.025 * auroraMult})`);
        grad2.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      const a3X = width * 0.72 + Math.sin(time * 0.25) * (width * 0.11);
      const a3Y = height * 0.62 + Math.cos(time * 0.28) * (height * 0.11);
      const a3Radius = Math.max(width * 0.38, 320);
      const grad3 = ctx.createRadialGradient(a3X, a3Y, 0, a3X, a3Y, a3Radius);
      if (isDark) {
        grad3.addColorStop(0, `rgba(56, 189, 248, ${0.07 * auroraMult})`);
        grad3.addColorStop(0.7, `rgba(99, 102, 241, ${0.025 * auroraMult})`);
        grad3.addColorStop(1, "transparent");
      } else {
        grad3.addColorStop(0, `rgba(249, 115, 22, ${0.06 * auroraMult})`);
        grad3.addColorStop(0.7, `rgba(234, 88, 12, ${0.018 * auroraMult})`);
        grad3.addColorStop(1, "transparent");
      }
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // ─────────────────────────────────────────────
      // LAYER 2: CURSOR SPOTLIGHT
      // ─────────────────────────────────────────────
      const cols = Math.ceil(width / GRID_SIZE) + 1;
      const rows = Math.ceil(height / GRID_SIZE) + 1;
      const spotlightRadius = HERO_BG_CONFIG.spotlight.radius;
      const spotAlpha = isDark
        ? HERO_BG_CONFIG.spotlight.opacityDark
        : HERO_BG_CONFIG.spotlight.opacityLight;

      if (mouse.active && !isTouchDevice) {
        const spotGrad = ctx.createRadialGradient(
          smoothMouse.x,
          smoothMouse.y,
          0,
          smoothMouse.x,
          smoothMouse.y,
          spotlightRadius
        );
        if (isDark) {
          spotGrad.addColorStop(0, `rgba(56, 189, 248, ${spotAlpha})`);
          spotGrad.addColorStop(0.5, `rgba(99, 102, 241, ${spotAlpha * 0.4})`);
          spotGrad.addColorStop(1, "transparent");
        } else {
          spotGrad.addColorStop(0, `rgba(249, 115, 22, ${spotAlpha})`);
          spotGrad.addColorStop(0.5, `rgba(234, 88, 12, ${spotAlpha * 0.3})`);
          spotGrad.addColorStop(1, "transparent");
        }
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // ─────────────────────────────────────────────
      // LAYER 3: MOVING ELECTRIC LIGHT BEAMS
      // ─────────────────────────────────────────────
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

        // Beam gradient trail
        const beamGrad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        const { r, g, b: blue } = b.palette;
        beamGrad.addColorStop(0, `rgba(${r}, ${g}, ${blue}, 0)`);
        beamGrad.addColorStop(0.5, `rgba(${r}, ${g}, ${blue}, ${b.alpha * 0.4})`);
        beamGrad.addColorStop(1, `rgba(${r}, ${g}, ${blue}, ${b.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = bConfig.lineWidth;
        ctx.stroke();

        // Luminous glowing tip
        const glowRad = bConfig.tipGlowRadius;
        const tipGlow = ctx.createRadialGradient(headX, headY, 0, headX, headY, glowRad);
        tipGlow.addColorStop(0, `rgba(${r}, ${g}, ${blue}, ${b.alpha * 0.95})`);
        tipGlow.addColorStop(0.4, `rgba(${r}, ${g}, ${blue}, ${b.alpha * 0.5})`);
        tipGlow.addColorStop(1, "transparent");
        ctx.fillStyle = tipGlow;
        ctx.beginPath();
        ctx.arc(headX, headY, glowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // ─────────────────────────────────────────────
      // LAYER 4: GRID INTERSECTION CROSSHAIRS
      // ─────────────────────────────────────────────
      const baseCrossAlpha = isDark
        ? HERO_BG_CONFIG.grid.crosshairAlphaDark
        : HERO_BG_CONFIG.grid.crosshairAlphaLight;
      const baseColor = isDark ? "148, 163, 184" : "100, 116, 139";
      const highlightColor = isDark ? "56, 189, 248" : "249, 115, 22";

      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        const x = c * GRID_SIZE;
        for (let r = 0; r <= rows; r++) {
          const y = r * GRID_SIZE;
          let isHighlighted = false;

          if (mouse.active && !isTouchDevice) {
            const dx = x - smoothMouse.x;
            const dy = y - smoothMouse.y;
            if (Math.abs(dx) < spotlightRadius && Math.abs(dy) < spotlightRadius) {
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < spotlightRadius) {
                isHighlighted = true;
                const proximity = 1 - dist / spotlightRadius;
                const alpha = baseCrossAlpha + proximity * (isDark ? 0.28 : 0.22);

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x - CROSS_SIZE, y);
                ctx.lineTo(x + CROSS_SIZE, y);
                ctx.moveTo(x, y - CROSS_SIZE);
                ctx.lineTo(x, y + CROSS_SIZE);
                ctx.strokeStyle = `rgba(${highlightColor}, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.restore();
              }
            }
          }

          if (!isHighlighted) {
            ctx.moveTo(x - CROSS_SIZE, y);
            ctx.lineTo(x + CROSS_SIZE, y);
            ctx.moveTo(x, y - CROSS_SIZE);
            ctx.lineTo(x, y + CROSS_SIZE);
          }
        }
      }
      ctx.strokeStyle = `rgba(${baseColor}, ${baseCrossAlpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // ─────────────────────────────────────────────
      // LAYER 5: CONSTELLATION NODES & THREADS
      // ─────────────────────────────────────────────
      ctx.save();
      const numP = particles.length;

      for (let i = 0; i < numP; i++) {
        const p = particles[i];
        p.y += p.vy;
        p.x += Math.sin(time + p.phase) * 0.3;

        if (mouse.active && !isTouchDevice) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110 && dist > 0) {
            const force = (1 - dist / 110) * 1.0;
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

      // Connecting threads between nearby particles
      const threadAlpha = isDark ? pConfig.threadOpacityDark : pConfig.threadOpacityLight;
      for (let i = 0; i < numP; i++) {
        for (let j = i + 1; j < numP; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * threadAlpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${lineAlpha})`
              : `rgba(14, 165, 233, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Glowing nodes
      for (let i = 0; i < numP; i++) {
        const p = particles[i];
        const alpha = p.baseAlpha * (0.75 + Math.sin(time * 1.8 + p.phase) * 0.25);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(14, 165, 233, ${alpha})`;
        ctx.fill();
      }
      ctx.restore();

      if (isVisible) {
        animId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animId) cancelAnimationFrame(animId);
        animId = null;
      } else if (isVisible) {
        lastTime = null;
        if (!animId) animId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start animation loop immediately
    animId = requestAnimationFrame(render);

    // Pause when completely scrolled offscreen
    let observer;
    const heroSection = canvas.closest("section") || canvas.parentElement;
    if (typeof IntersectionObserver !== "undefined" && heroSection) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            lastTime = null;
            if (!animId) animId = requestAnimationFrame(render);
          } else {
            if (animId) cancelAnimationFrame(animId);
            animId = null;
          }
        },
        { threshold: 0 }
      );
      observer.observe(heroSection);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (observer) observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none"
      style={{
        maskImage: "radial-gradient(ellipse 95% 95% at 50% 50%, #000 70%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 95% 95% at 50% 50%, #000 70%, transparent 100%)",
      }}
    >
      {/* CSS Static Blueprint Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(to right, rgba(148,163,184,${HERO_BG_CONFIG.grid.lineOpacityDark}) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,${HERO_BG_CONFIG.grid.lineOpacityDark}) 1px, transparent 1px)`
            : `linear-gradient(to right, rgba(15,23,42,${HERO_BG_CONFIG.grid.lineOpacityLight}) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,${HERO_BG_CONFIG.grid.lineOpacityLight}) 1px, transparent 1px)`,
          backgroundSize: `${HERO_BG_CONFIG.grid.cellSize}px ${HERO_BG_CONFIG.grid.cellSize}px`,
        }}
      />
      {/* Dynamic Animated Canvas (Beams, Nodes, Aurora, Crosshairs) */}
      <canvas ref={canvasRef} className="w-full h-full block relative" />
    </div>
  );
};

export default HeroAnimatedBackground;
