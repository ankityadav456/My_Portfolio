"use client";

import { useTheme } from "../context/ThemeContext";

const AnimatedBackground = () => {
  const { theme } = useTheme();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none"
    >
      <style>{`
        @keyframes float-orb-1 {
          0%, 100% { transform: translate(-5%, -5%) scale(1); }
          33.33% { transform: translate(15%, 20%) scale(1.15); }
          66.66% { transform: translate(-10%, 0%) scale(0.95); }
        }
        @keyframes float-orb-2 {
          0%, 100% { transform: translate(5%, 0%) scale(1); }
          33.33% { transform: translate(-15%, -10%) scale(0.9); }
          66.66% { transform: translate(10%, 15%) scale(1.15); }
        }
        @keyframes float-orb-3 {
          0%, 100% { transform: translate(-10%, 10%) scale(0.95); }
          33.33% { transform: translate(10%, -15%) scale(1.12); }
          66.66% { transform: translate(-15%, 10%) scale(1); }
        }
        @keyframes float-orb-4 {
          0%, 100% { transform: translate(10%, -5%) scale(1); }
          33.33% { transform: translate(-10%, 10%) scale(1.1); }
          66.66% { transform: translate(5%, -10%) scale(0.95); }
        }
        .animate-orb-1 { animation: float-orb-1 22s ease-in-out infinite; will-change: transform; }
        .animate-orb-2 { animation: float-orb-2 26s ease-in-out infinite; will-change: transform; }
        .animate-orb-3 { animation: float-orb-3 28s ease-in-out infinite; will-change: transform; }
        .animate-orb-4 { animation: float-orb-4 24s ease-in-out infinite; will-change: transform; }
      `}</style>

      {/* ORB 1: WARM AMBER / EMBER (TOP-LEFT) */}
      <div
        className={`animate-orb-1 absolute -top-32 -left-32 w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full blur-[80px] sm:blur-[110px] transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-br from-orange-500/20 via-amber-500/15 to-transparent"
            : "bg-gradient-to-br from-amber-400/15 via-orange-300/10 to-transparent"
        }`}
      />

      {/* ORB 2: ELECTRIC INDIGO / DEEP VIOLET (TOP-RIGHT TO CENTER) */}
      <div
        className={`animate-orb-2 absolute top-[5%] -right-32 w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[85px] sm:blur-[120px] transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-bl from-indigo-600/22 via-purple-700/15 to-transparent"
            : "bg-gradient-to-bl from-indigo-300/15 via-purple-200/12 to-transparent"
        }`}
      />

      {/* ORB 3: CYAN / TEAL ACCENT (MIDDLE / SKILLS SECTION) */}
      <div
        className={`animate-orb-3 absolute top-[42%] left-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[90px] sm:blur-[125px] transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-r from-sky-500/16 via-cyan-600/12 to-transparent"
            : "bg-gradient-to-r from-sky-300/15 via-cyan-200/10 to-transparent"
        }`}
      />

      {/* ORB 4: DEEP PURPLE / VIOLET DUSK (BOTTOM / FOOTER) */}
      <div
        className={`animate-orb-4 absolute -bottom-24 right-[5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[85px] sm:blur-[120px] transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-tl from-indigo-600/20 via-violet-700/15 to-transparent"
            : "bg-gradient-to-tl from-indigo-300/12 via-violet-200/10 to-transparent"
        }`}
      />

      {/* SUBTLE LINEAR TECH GRID OVERLAY */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 dark:opacity-15 pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;