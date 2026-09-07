"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, Shield } from "lucide-react";
import developerAvatar from "../assets/images/developer_3d_avatar.png";

const techChips = [
  { name: "React", color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", dot: "bg-cyan-500" },
  { name: "Node.js", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", dot: "bg-emerald-500" },
  { name: "Tailwind", color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20", dot: "bg-sky-500" },
  { name: "MongoDB", color: "text-green-600 dark:text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", dot: "bg-green-500" },
  { name: "Framer", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", dot: "bg-purple-500" },
];

// Pre-generate barcode bar dimensions (stable across renders)
const barcodeBars = Array.from({ length: 36 }, (_, i) => {
  const seed = ((i * 7 + 13) % 19) / 19;
  return {
    width: seed > 0.5 ? 2 : 1,
    height: 10 + Math.floor(seed * 10),
    opacity: 0.25 + seed * 0.45,
  };
});

const HeroBentoGrid = () => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, angle: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (y - 0.5) * -16;
    const tiltY = (x - 0.5) * 16;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);

    setTilt({ x: tiltX, y: tiltY });
    setGlarePos({ x: x * 100, y: y * 100, angle });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setGlarePos({ x: 50, y: 50, angle: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center py-6 sm:py-8">
      {/* Ambient aura behind card */}
      <div className="absolute w-80 h-80 bg-gradient-to-tr from-orange-500/15 via-purple-500/10 to-sky-500/12 blur-[100px] rounded-full pointer-events-none" />

      {/* ════════════════════════════════════════════
          THE HOLOGRAPHIC DEVELOPER CARD
          ════════════════════════════════════════════ */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        style={{ perspective: 1200 }}
        className="relative w-full max-w-[400px] cursor-default select-none"
      >
        <motion.div
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative"
        >
          {/* Animated breathing gradient border */}
          <div className="absolute -inset-[1.5px] rounded-[1.75rem] holo-border opacity-50 pointer-events-none" />

          {/* Card body — light & dark mode */}
          <div className="relative rounded-3xl bg-white/90 dark:bg-[#080d18]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.05] overflow-hidden shadow-2xl shadow-slate-300/40 dark:shadow-black/40">

            {/* Holographic foil overlay — follows cursor angle */}
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-3xl transition-opacity duration-500"
              style={{
                opacity: isHovered ? 0.4 : 0.06,
                background: `conic-gradient(from ${glarePos.angle}deg at ${glarePos.x}% ${glarePos.y}%, transparent 0%, rgba(255,220,100,0.18) 8%, transparent 18%, rgba(100,200,255,0.14) 28%, transparent 38%, rgba(255,100,200,0.12) 48%, transparent 58%, rgba(100,255,200,0.14) 68%, transparent 78%, rgba(255,220,100,0.18) 88%, transparent 100%)`,
              }}
            />

            {/* Subtle glass highlight at top edge */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] dark:from-white/[0.03] to-transparent pointer-events-none z-[5] rounded-t-3xl" />

            {/* ── HEADER STRIP ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative z-20 flex items-center justify-between px-5 sm:px-6 pt-5 pb-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-400/90 to-orange-500/90 flex items-center justify-center shadow-sm shadow-orange-500/30">
                  <Shield size={11} className="text-white" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-[0.16em] font-semibold">
                  Developer Card
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/15">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                  Active
                </span>
              </div>
            </motion.div>

            {/* Separator */}
            <div className="mx-5 sm:mx-6 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.07] to-transparent" />

            {/* ── AVATAR ZONE ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="relative z-20 flex justify-center py-7 sm:py-8"
            >
              {/* Avatar ambient glow */}
              <div className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-orange-500/25 via-transparent to-sky-500/20 blur-2xl pointer-events-none" />

              {/* Avatar circular frame with breathing gradient ring */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32" style={{ transform: "translateZ(30px)" }}>
                <div className="absolute -inset-[3px] rounded-full holo-border opacity-60" />
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-b from-orange-500/30 via-slate-300/40 dark:via-slate-800/40 to-sky-500/25 shadow-xl shadow-orange-500/10">
                  <img
                    src={developerAvatar}
                    alt="Ankit Yadav — Developer Avatar"
                    className="w-full h-full object-cover rounded-full"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── IDENTITY BLOCK ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative z-20 text-center px-5 sm:px-6 pb-4"
            >
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                Ankit Yadav
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-300/90 font-semibold mt-1">
                Frontend &amp; MERN Developer
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <MapPin size={11} className="text-slate-400 dark:text-slate-500" />
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">Mumbai, India</span>
              </div>
            </motion.div>

            {/* Separator */}
            <div className="mx-5 sm:mx-6 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.07] to-transparent" />

            {/* ── TECH CHIP STRIP ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="relative z-20 px-5 sm:px-6 py-4"
            >
              <div className="flex flex-wrap justify-center gap-2">
                {techChips.map((chip, idx) => (
                  <motion.span
                    key={chip.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.07, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold ${chip.color} ${chip.bg} border ${chip.border} transition-shadow cursor-default hover:shadow-md`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${chip.dot}`} />
                    {chip.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Separator */}
            <div className="mx-5 sm:mx-6 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.07] to-transparent" />

            {/* ── BARCODE FOOTER ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="relative z-20 px-5 sm:px-6 py-4 flex items-center justify-between"
            >
              {/* Decorative barcode */}
              <div className="flex items-end gap-[1.5px] h-6">
                {barcodeBars.map((bar, i) => (
                  <div
                    key={i}
                    className="bg-slate-300 dark:bg-white/25 rounded-[0.5px]"
                    style={{
                      width: `${bar.width}px`,
                      height: `${bar.height}px`,
                      opacity: bar.opacity,
                    }}
                  />
                ))}
              </div>

              <div className="flex flex-col items-end gap-0.5">
                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 tracking-wider font-medium">
                  ID: #MERN-2026-AY
                </span>
                <span className="text-[8px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-[0.15em]">
                  Clearance: Senior Dev
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroBentoGrid;
