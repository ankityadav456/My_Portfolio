"use client";

const SkillCard = ({ imgSrc, label, desc, tag }) => {
  return (
    <div
      className="group relative rounded-2xl p-5 bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-200 shadow-sm flex flex-col justify-between hover:-translate-y-0.5"
    >
      <div>
        {/* HEADER: ICON + TAG */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center p-2 border border-slate-200 dark:border-white/10 shadow-sm">
            <img
              src={imgSrc}
              alt={label}
              className="w-full h-full object-contain"
            />
          </div>

          {tag && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/5">
              {tag}
            </span>
          )}
        </div>

        {/* TITLE */}
        <h3 className="text-sm font-bold font-heading mb-1 text-slate-900 dark:text-white">
          {label}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>

      {/* BOTTOM STATUS */}
      <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Production Tested</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      </div>
    </div>
  );
};

export default SkillCard;
