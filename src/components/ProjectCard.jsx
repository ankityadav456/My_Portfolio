import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectCard = ({ imgSrc, title, tags, projectLink }) => {
  return (
    <motion.a
      variants={card}
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-white/80 dark:bg-[#121212]/60
        backdrop-blur-xl
        border border-black/5 dark:border-white/10
        shadow-lg hover:shadow-2xl
        transition-all duration-500
      "
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        " />
      </div>

      {/* Content */}
      <div className="relative p-5">
        <h3 className="text-lg font-semibold text-text">
          {title}
        </h3>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="
                px-2 py-1 text-xs rounded-full
                bg-primary/10 text-primary
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <ArrowUpRight
          className="
            absolute right-4 bottom-4
            w-5 h-5
            text-primary
            opacity-0
            translate-x-2 translate-y-2
            group-hover:opacity-100
            group-hover:translate-x-0 group-hover:translate-y-0
            transition-all duration-300
          "
        />
      </div>

      {/* Glow */}
      <span className="
        absolute inset-0
        rounded-2xl
        bg-primary/20
        blur-2xl
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-500
        pointer-events-none
      " />
    </motion.a>
  );
};

export default ProjectCard;
