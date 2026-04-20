"use client";

import { motion } from "framer-motion";

const SkillCard = ({ imgSrc, label, desc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        group relative
        rounded-2xl
        p-6
        backdrop-blur-2xl
        bg-white/60 dark:bg-white/5
        border border-white/30 dark:border-white/10
        shadow-lg
        transition-all
        overflow-hidden
      "
    >
      {/* Glow Hover Effect */}
      <div className="
        absolute inset-0
        opacity-0 group-hover:opacity-100
        transition duration-500
        bg-primary/10 blur-2xl
      " />

      {/* ICON */}
      <div className="relative z-10 mb-4">
        <img
          src={imgSrc}
          alt={label}
          className="
            w-12 h-12 object-contain
            transition-transform duration-300
            group-hover:scale-110 group-hover:rotate-3
          "
        />
      </div>

      {/* TITLE */}
      <h3 className="
        relative z-10
        text-lg font-semibold
        mb-1
        text-text
      ">
        {label}
      </h3>

      {/* DESCRIPTION */}
      <p className="relative z-10 text-sm text-text/60">
        {desc}
      </p>

      {/* Bottom Gradient Line */}
      <span className="
        absolute bottom-0 left-0
        h-[2px] w-0
        bg-primary
        group-hover:w-full
        transition-all duration-500
      " />
    </motion.div>
  );
};

export default SkillCard;