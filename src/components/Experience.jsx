"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "AIMBEAT Technology Private Limited",
    location: "Vashi, Navi Mumbai",
    period: "May 2026 — Present",
    description: "Building reusable React component architectures, integrating complex REST APIs, and driving frontend performance optimization.",
    achievements: [
      "Build reusable React components to improve maintainability and cut down repeat development work.",
      "Integrate REST APIs using Fetch/Axios and render dynamic data in the UI, using React Hooks for state and performance management.",
      "Maintain cross-browser compatibility and mobile responsiveness across diverse screen sizes.",
      "Take part in peer code reviews and follow rigorous team coding standards.",
      "Apply lazy loading and code splitting strategies to significantly improve application performance.",
      "Work with UI/UX designers to translate Figma wireframes into responsive, high-converting interfaces.",
    ],
    tech: ["React.js", "JavaScript (ES6+)", "React Hooks", "Axios", "REST APIs", "Tailwind CSS", "Code Splitting", "Figma"],
  },
  {
    role: "Frontend Developer",
    company: "Scan Infotech Private Limited",
    location: "Mumbai, India",
    period: "September 2023 — March 2026",
    description: "Developed and maintained responsive web applications using React.js and JavaScript, standardizing UI component libraries and optimizing Lighthouse audits.",
    achievements: [
      "Developed responsive web interfaces using React.js, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Contributed to building a reusable UI component library to standardize design across multiple products.",
      "Integrated 20+ REST APIs to handle real-time data flows and dynamic content updates.",
      "Used Google Lighthouse and Chrome DevTools to audit web performance, resolve render-blocking resources, and address memory leaks.",
      "Used Git for version control, feature branching, and pull request workflows in team settings.",
      "Gained exposure to C#, ASP.NET MVC, Razor Views, and SQL Server in full-stack projects.",
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Bootstrap", "HTML5/CSS3", "REST APIs", "Lighthouse", "Git", "ASP.NET MVC"],
  },
  {
    role: "B.Sc. in Computer Science (Distinction - 8.14 CGPI)",
    company: "S.I.W.S College of Arts, Science & Commerce",
    location: "Mumbai, India",
    period: "July 2020 — May 2023",
    description: "Completed comprehensive computer science degree with distinction, graduating with a 8.14 / 10 CGPI.",
    achievements: [
      "Graduated with Distinction (8.14 CGPI / 10).",
      "Mastered key computer science subjects: Data Structures, Database Management Systems, Operating Systems, Computer Networks, and AI/ML.",
      "Built multiple full-stack and web applications with clean CRUD architecture, responsive UI design, and database persistence.",
    ],
    tech: ["Data Structures & Algorithms", "OOP", "DBMS & SQL", "Operating Systems", "Computer Networks", "Software Engineering", "System Design"],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  
  // DYNAMIC TIMELINE SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-14 select-none">
          {/* Architectural Background Watermark */}
          <div
            aria-hidden="true"
            className="absolute -top-6 sm:-top-9 left-1/2 -translate-x-1/2 font-heading font-black tracking-widest uppercase text-6xl sm:text-7xl md:text-8xl select-none pointer-events-none section-watermark whitespace-nowrap z-0"
          >
            CAREER
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/10 text-primary border border-orange-500/20 mb-2.5 shadow-2xs">
              <Briefcase size={13} className="text-primary" />
              <span>02 // WORK HISTORY</span>
            </div>

            {/* Clear, Recognizable Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-2.5">
              Work <span className="text-primary">Experience</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              A timeline of engineering teams I've contributed to, systems built, and technologies shipped in production.
            </p>
          </div>
        </div>

        {/* TIMELINE CONTAINER WITH DYNAMIC SCROLL FILL */}
        <div
          ref={containerRef}
          className="relative ml-2 sm:ml-6 lg:ml-8 space-y-6 sm:space-y-4"
        >
          {/* STATIC BASE LINE */}
          <div className="absolute left-0 top-3 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800" />

          {/* DYNAMIC SCROLL-FILLING PROGRESS LINE */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-0 bottom-6 w-[2px] origin-top bg-gradient-to-b from-orange-500 via-orange-600 to-amber-500 shadow-[0_0_8px_rgba(249,115,22,0.6)] z-0"
          />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* TIMELINE NODE DOT THAT FILLS ON SCROLL */}
              <motion.div
                initial={{ backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "#ea580c", scale: 0.9 }}
                whileInView={{
                  backgroundColor: "#ea580c",
                  borderColor: "#ea580c",
                  scale: 1.15,
                  boxShadow: "0 0 12px rgba(234, 88, 12, 0.6)",
                }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.3 }}
                className="absolute -left-[7px] top-3 w-3.5 h-3.5 rounded-full border-2 border-primary bg-white dark:bg-slate-950 z-10 transition-all flex items-center justify-center"
              >
                <span className="w-1 h-1 rounded-full bg-white" />
              </motion.div>

              {/* EXPERIENCE CARD */}
              <div className="bg-white dark:bg-[#0f172a]/80 p-5 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all shadow-sm">
                
                {/* TOP ROW: ROLE & PERIOD */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-white/5">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* ACHIEVEMENTS */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* TECH TAGS */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">Stack:</span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
