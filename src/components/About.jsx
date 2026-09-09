"use client";

import { motion } from "framer-motion";
import { User, Code2, Cpu, Zap } from "lucide-react";
import developerAvatar from "../assets/images/developer_3d_avatar.png";

const highlights = [
  {
    icon: <Code2 className="text-orange-500" size={18} />,
    title: "Frontend Engineering",
    desc: "React, Next.js, Tailwind CSS & clean modern JavaScript.",
  },
  {
    icon: <Cpu className="text-sky-500" size={18} />,
    title: "Full-Stack Backend",
    desc: "Node.js, Express APIs, MongoDB Atlas & secure auth.",
  },
  {
    icon: <Zap className="text-amber-500" size={18} />,
    title: "Fast Performance",
    desc: "Optimized bundles, zero layout shifts & 95+ Lighthouse.",
  },
];

const About = ({ theme }) => {
  return (
    <section id="about" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-14 select-none">
          {/* Architectural Background Watermark */}
          <div
            aria-hidden="true"
            className="absolute -top-6 sm:-top-9 left-1/2 -translate-x-1/2 font-heading font-black tracking-widest uppercase text-6xl sm:text-7xl md:text-8xl select-none pointer-events-none section-watermark whitespace-nowrap z-0"
          >
            ABOUT
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/10 text-primary border border-orange-500/20 mb-2.5 shadow-2xs">
              <User size={13} className="text-primary" />
              <span>01 // ABOUT ME</span>
            </div>

            {/* Clear, Recognizable Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-2.5">
              About <span className="text-primary">Me</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              My background, engineering philosophy, and how I build fast, production-ready web applications.
            </p>
          </div>
        </div>

        {/* MAIN NARRATIVE & STATS GRID */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-10">
          
          {/* NARRATIVE CARD */}
          <div className="lg:col-span-8 bg-white dark:bg-[#0f172a]/80 rounded-3xl p-6 sm:p-4 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              {/* REPLACED WITH SHARED IMAGE 1: PROFILE HEADER */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl p-1 bg-gradient-to-b from-orange-500/20 to-amber-500/10 dark:from-sky-500/20 dark:to-blue-500/10 border border-orange-500/30 dark:border-sky-400/30 shadow-md">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
                      <img
                        src={developerAvatar}
                        alt="Ankit Yadav"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-950 dark:text-white flex items-center gap-2">
                      Ankit Yadav
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                      Frontend &amp; MERN Developer
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>3+ Years Experience</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3.5">
                Over the past 3+ years, I've worked in fast-paced product teams building production web applications with <strong>React.js and modern JavaScript (ES6+)</strong>. I handle the complete frontend lifecycle — converting Figma designs into responsive components, integrating REST APIs with clean async flows, and ensuring fast load times across all devices.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Beyond the frontend, I build full-stack MERN features with <strong>Node.js, Express, and MongoDB</strong>, implementing secure JWT authentication and real-time Stripe payments. I value thoughtful code reviews, clean folder structures, and practical problem-solving.
              </p>
            </div>

            {/* HIGHLIGHTS ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 mt-5 border-t border-slate-100 dark:border-white/5">
              {[
                { label: "Production Experience", value: "3+ Years" },
                { label: "Degree & Honors", value: "8.14 CGPI" },
              ].map((item, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5 text-center">
                  <p className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white mb-0.5">
                    {item.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION CARD */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0f172a]/80 rounded-3xl p-6 sm:p-4 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-primary font-semibold mb-2">
                Education
              </p>
              <h4 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-1">
                B.Sc. in Computer Science
              </h4>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5">
                Distinction • 8.14 / 10 CGPI (2020 – 2023)
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3.5">
                S.I.W.S College of Arts, Science &amp; Commerce, Mumbai
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Strong foundation in Data Structures, Database Systems, Computer Networks, Operating Systems, and modern software architecture.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5">
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2 font-medium">Core Academic Disciplines:</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Data Structures & Algorithms",
                  "OOP",
                  "DBMS & SQL",
                  "Operating Systems",
                  "Computer Networks",
                  "Software Engineering",
                  "Web Development",
                  "System Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* REPLACED WITH SHARED IMAGE 2: THREE CLEAN FOCUS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-white/10 p-5 sm:p-6 shadow-sm backdrop-blur-xl flex items-start gap-4 hover:border-orange-500/30 dark:hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-heading font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
