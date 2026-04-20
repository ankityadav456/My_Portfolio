"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true,
    });

    let width, height;
    let stars = [];
    let particles = [];
    let animationId;

    /* ================= SIZE ================= */
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    /* ================= MOUSE PARALLAX ================= */
    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    /* ================= STARS ================= */
    const STAR_COUNT = 250;

    const createStars = () => {
      stars = Array.from({ length: STAR_COUNT }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.4 + 0.1,
        size: Math.random() * 1.2,
      }));
    };

    /* ================= FLOATING ORBS ================= */
    const ORB_COUNT = 6;

    const createOrbs = () => {
      particles = Array.from({ length: ORB_COUNT }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 180 + Math.random() * 120,
        dx: Math.random() * 0.3,
        dy: Math.random() * 0.3,
      }));
    };

    createStars();
    createOrbs();

    /* ================= BACKGROUND ================= */
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);

      if (theme === "dark") {
        gradient.addColorStop(0, "#020617");
        gradient.addColorStop(1, "#000000");
      } else {
        gradient.addColorStop(0, "#f8fafc");
        gradient.addColorStop(1, "#e2e8f0");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    /* ================= STARS ================= */
    const drawStars = () => {
      stars.forEach((star) => {
        star.y += star.speed;

        if (star.y > height) star.y = 0;

        const parallaxX = (mouseX - width / 2) * 0.0005;

        ctx.beginPath();
        ctx.arc(star.x + parallaxX * star.y, star.y, star.size, 0, Math.PI * 2);

        ctx.fillStyle =
          theme === "dark"
            ? "rgba(255,255,255,0.9)"
            : "rgba(30,41,59,0.5)";

        ctx.fill();
      });
    };

    /* ================= GLOW ORBS ================= */
    const drawOrbs = () => {
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x > width || p.x < 0) p.dx *= -1;
        if (p.y > height || p.y < 0) p.dy *= -1;

        const glow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );

        glow.addColorStop(0, "rgba(255,87,34,0.12)");
        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      });
    };

    /* ================= GALAXY FLOW ================= */
    let time = 0;

    const drawGalaxy = () => {
      const glow = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.001) * 200,
        height * 0.4 + Math.cos(time * 0.001) * 120,
        0,
        width * 0.5,
        height * 0.4,
        600
      );

      glow.addColorStop(0, "rgba(255,87,34,0.18)");
      glow.addColorStop(1, "transparent");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    /* ================= ANIMATION ================= */
    const animate = () => {
      time++;

      // ctx.clearRect(0, 0, width, height);

      drawBackground();
      drawOrbs();
      drawGalaxy();
      drawStars();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default SpaceBackground;