"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, LayoutGrid, Sparkles, Terminal, Award, User } from "lucide-react";
import dark1 from "../assets/images/ChatGPT Image Dec 9, 2025, 09_11_36 PM.png";
import light1 from "../assets/images/Modern AY logo design.png";

const pillars = [
  {
    icon: <LayoutGrid className="text-orange-500" size={20} />,
    title: "Clean Component Design",
    desc: "Writing modular, reusable React components with predictable state flow, readable hooks, and zero unnecessary re-renders.",
  },
  {
    icon: <Zap className="text-amber-500" size={20} />,
    title: "Real Performance Audits",
    desc: "Optimizing bundle chunks, lazy-loading heavy routes, and resolving layout shifts to keep Google Lighthouse scores 95+.",
  },
  {
    icon: <ShieldCheck className="text-sky-500" size={20} />,
    title: "Full-Stack Integration",
    desc: "Connecting React frontends to robust Node/Express REST APIs with MongoDB Atlas, JWT authentication, and Stripe payments.",
  },
  {
    icon: <Sparkles className="text-purple-500" size={20} />,
    title: "Design System Fidelity",
    desc: "Translating complex Figma wireframes into pixel-accurate, accessible, and responsive interfaces that look great on any screen.",
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
          <div className="lg:col-span-8 bg-white dark:bg-[#0f172a]/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-sm">
                    <img
                      src={theme === "dark" ? dark1 : light1}
                      alt="Ankit Yadav"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">Ankit Yadav</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Frontend & MERN Stack Developer</p>
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
                // { label: "REST APIs Integrated", value: "20+ Endpoints" },
                { label: "Degree & Honors", value: "8.14 CGPI" },
                // { label: "Lighthouse Performance", value: "95+ Score" },
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
          <div className="lg:col-span-4 bg-white dark:bg-[#0f172a]/80 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between">
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
                S.I.W.S College of Arts, Science & Commerce, Mumbai
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

        {/* 4 CORE PRINCIPLES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0f172a]/80 p-5 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all shadow-sm group hover:-translate-y-0.5"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-white/10 mb-3">
                {pillar.icon}
              </div>
              <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;

