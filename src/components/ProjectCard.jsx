"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ imgSrc, title, tags, projectLink }) => {
  const cardRef = useRef();

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 15;
    const rotateX = -(y / rect.height - 0.5) * 15;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const reset = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <motion.a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="
          group relative overflow-hidden
          rounded-3xl
          bg-surface/80
          backdrop-blur-xl
          border border-white/10
          shadow-xl
          transition-transform duration-300
        "
      >
        {/* IMAGE */}
        <div className="h-56 overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 relative">
          <h3 className="text-xl font-semibold">{title}</h3>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <ArrowUpRight
            className="
              absolute right-6 bottom-6
              opacity-0 translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              transition duration-300
              text-primary
            "
          />
        </div>

        {/* Glow */}
        <span className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-60 transition pointer-events-none" />
      </div>
    </motion.a>
  );
};

export default ProjectCard;