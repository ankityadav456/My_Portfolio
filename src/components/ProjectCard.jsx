import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
  imgSrc,
  title,
  description,
  tags,
  metric,
  projectLink,
  githubLink,
  isLive,
}) => {
  return (
    <div
      className="group relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-200 shadow-sm flex flex-col justify-between overflow-hidden hover:-translate-y-1"
    >
      <div>
        {/* IMAGE PREVIEW */}
        <div className="relative h-36 sm:h-44 overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-white/10">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* TOP BADGES */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-600 text-white shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live Demo
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-900/80 text-slate-200 border border-white/10">
                Repo
              </span>
            )}

            {metric && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-900/80 text-white border border-white/10">
                {metric}
              </span>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-bold font-heading text-slate-900 dark:text-white mb-1.5 leading-snug">
            {title}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>

          {/* TECH TAGS */}
          <div className="flex flex-wrap gap-1 mb-1">
            {tags.slice(0, 5).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/5"
              >
                {tag}
              </span>
            ))}
            {tags.length > 5 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono rounded-md bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-white/5">
                +{tags.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="px-4 sm:px-5 py-3 border-t border-slate-100 dark:border-white/5 mt-auto flex items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/30">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors group/link"
        >
          {isLive ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Preview</span>
              <ExternalLink size={13} className="text-emerald-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </>
          ) : (
            <>
              <span>View Repository</span>
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </>
          )}
        </a>

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-400"
            title="View Source Code on GitHub"
          >
            <Github size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
