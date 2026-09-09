"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import MotionGrid from "./MotionGrid";

const AnimatedBackground = () => {
  const { theme } = useTheme();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none"
    >
      {/* ORB 1: WARM AMBER / EMBER (TOP-LEFT) */}
      <motion.div
        animate={{
          x: ["-5%", "15%", "-10%", "-5%"],
          y: ["-5%", "20%", "0%", "-5%"],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-32 -left-32 w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full blur-[100px] sm:blur-[140px] transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-br from-orange-500/20 via-amber-500/15 to-transparent"
            : "bg-gradient-to-br from-amber-400/15 via-orange-300/10 to-transparent"
        }`}
      />

      {/* ORB 2: ELECTRIC INDIGO / DEEP VIOLET (TOP-RIGHT TO CENTER) */}
      <motion.div
        animate={{
          x: ["5%", "-15%", "10%", "5%"],
          y: ["0%", "-10%", "15%", "0%"],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-[5%] -right-32 w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[110px] sm:blur-[150px] transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-bl from-indigo-600/22 via-purple-700/15 to-transparent"
            : "bg-gradient-to-bl from-indigo-300/15 via-purple-200/12 to-transparent"
        }`}
      />

      {/* ORB 3: CYAN / TEAL ACCENT (MIDDLE / SKILLS SECTION) */}
      <motion.div
        animate={{
          x: ["-10%", "10%", "-15%", "-10%"],
          y: ["10%", "-15%", "10%", "10%"],
          scale: [0.95, 1.12, 1, 0.95],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-[42%] left-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] sm:blur-[160px] transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-r from-sky-500/16 via-cyan-600/12 to-transparent"
            : "bg-gradient-to-r from-sky-300/15 via-cyan-200/10 to-transparent"
        }`}
      />

      {/* ORB 4: DEEP PURPLE / VIOLET DUSK (BOTTOM / FOOTER) */}
      <motion.div
        animate={{
          x: ["10%", "-10%", "5%", "10%"],
          y: ["-5%", "10%", "-10%", "-5%"],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -bottom-24 right-[5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[110px] sm:blur-[150px] transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-tl from-indigo-600/20 via-violet-700/15 to-transparent"
            : "bg-gradient-to-tl from-indigo-300/12 via-violet-200/10 to-transparent"
        }`}
      />

      {/* DYNAMIC NEON CYBER MOTION GRID WITH MOVING LIGHT BEAMS & INTERACTIVE CURSOR GLOW */}
      <MotionGrid />
    </div>
  );
};

export default AnimatedBackground;