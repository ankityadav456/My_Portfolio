"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown, Terminal, Sparkles, CheckCircle2, Code2, Layers, Cpu } from "lucide-react";
import pdf from "../assets/images/Ankit_Yadav_newResumes.pdf";

const socials = [
  { href: "https://github.com/ankityadav456", icon: <Github size={18} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ankit-yadav", icon: <Linkedin size={18} />, label: "LinkedIn" },
  { href: "mailto:ankit.y.2302@gmail.com", icon: <Mail size={18} />, label: "Email" },
];

const terminalTabs = [
  {
    id: "developer",
    label: "DeveloperProfile.ts",
    icon: <Code2 size={14} className="text-orange-400" />,
    code: (
      <>
        <span className="text-slate-500">// Ankit Yadav — Personal Profile</span>
        <br />
        <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">name</span>: <span className="text-emerald-300">"Ankit Yadav"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">focus</span>: <span className="text-emerald-300">"Frontend & Full-Stack Web Development"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">experience</span>: <span className="text-amber-300">"3+ Years"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">currentRole</span>: <span className="text-emerald-300">"Frontend Developer @ AIMBEAT Technology"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">previousRole</span>: <span className="text-emerald-300">"Frontend Developer @ Scan Infotech"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">education</span>: <span className="text-emerald-300">"B.Sc. Computer Science (Distinction - 8.14 CGPI)"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">stack</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"ES6+"</span>, <span className="text-emerald-300">"Node"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"Tailwind"</span>, <span className="text-emerald-300">"Stripe"</span>],
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">philosophy</span>: <span className="text-emerald-300">"Clean components, fast loads, zero fluff."</span>,
        <br />
        &nbsp;&nbsp;<span className="text-slate-300">location</span>: <span className="text-emerald-300">"Mumbai, India"</span>
        <br />
        &#125;;
        <br />
        <span className="text-purple-400">export default</span> <span className="text-blue-400">developer</span>;
      </>
    ),
  },
  {
    id: "stack",
    label: "MyEverydayTools.json",
    icon: <Layers size={14} className="text-sky-400" />,
    code: (
      <>
        &#123;
        <br />
        &nbsp;&nbsp;<span className="text-sky-300">"frontend"</span>: [<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"JavaScript ES6+"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"HTML5/CSS3"</span>],
        <br />
        &nbsp;&nbsp;<span className="text-sky-300">"stateAndRouting"</span>: [<span className="text-emerald-300">"React Hooks"</span>, <span className="text-emerald-300">"Context API"</span>, <span className="text-emerald-300">"React Router"</span>],
        <br />
        &nbsp;&nbsp;<span className="text-sky-300">"backendAndDB"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express.js"</span>, <span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"RESTful APIs"</span>],
        <br />
        &nbsp;&nbsp;<span className="text-sky-300">"authAndPayments"</span>: [<span className="text-emerald-300">"JWT Auth"</span>, <span className="text-emerald-300">"Bcrypt"</span>, <span className="text-emerald-300">"Stripe API"</span>],
        <br />
        &nbsp;&nbsp;<span className="text-sky-300">"qualityAndAudits"</span>: [<span className="text-emerald-300">"Google Lighthouse"</span>, <span className="text-emerald-300">"Chrome DevTools"</span>, <span className="text-emerald-300">"Postman"</span>, <span className="text-emerald-300">"Git"</span>]
        <br />
        &#125;
      </>
    ),
  },
  {
    id: "metrics",
    label: "QuickAudit.sh",
    icon: <Cpu size={14} className="text-emerald-400" />,
    code: (
      <>
        <span className="text-amber-400">$ ./run-audit.sh --profile ankit-yadav</span>
        <br />
        <span className="text-emerald-400">✓</span> <span className="text-slate-200">Experience:</span> <span className="text-orange-400">3+ Years Building Production Web Apps</span>
        <br />
        <span className="text-emerald-400">✓</span> <span className="text-slate-200">REST APIs:</span> <span className="text-orange-400">20+ Endpoints Integrated with Fetch & Axios</span>
        <br />
        <span className="text-emerald-400">✓</span> <span className="text-slate-200">Audits:</span> <span className="text-emerald-400">95+ Score Performance, Zero Memory Leaks</span>
        <br />
        <span className="text-emerald-400">✓</span> <span className="text-slate-200">Full-Stack:</span> <span className="text-sky-300">MERN Stack with JWT Auth & Stripe Payments</span>
        <br />
        <span className="text-emerald-400">✓</span> <span className="text-slate-200">Education:</span> <span className="text-emerald-400">B.Sc. Computer Science (Distinction - 8.14 CGPI)</span>
        <br />
        <span className="text-slate-400">&gt; Status: Ready to build and collaborate on modern products.</span>
      </>
    ),
  },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("developer");

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-28 lg:pb-16 overflow-hidden"
    >
      {/* SUBTLE BACKGROUND LIGHTING */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: HUMAN HERO NARRATIVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start w-full min-w-0"
          >
            {/* PERSONAL BADGE */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm mb-3.5 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Based in Mumbai, India</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-900 dark:text-white font-semibold">Frontend & MERN Developer</span>
            </div>

            {/* HEADLINE */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.25rem] font-bold tracking-tight text-slate-950 dark:text-white leading-[1.45] sm:leading-[1.42] lg:leading-[1.38] mb-4 break-words w-full">
              Building <span className="text-gradient">high-performance</span> web apps with <span className="text-primary">clean React</span> & solid <span className="text-gradient">MERN stack</span> foundations.
            </h1>

            {/* SUBTITLE */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed mb-6 w-full">
              Hi, I'm <strong className="text-slate-950 dark:text-white font-bold">Ankit Yadav</strong>. I'm a <span className="text-primary font-semibold">Frontend & MERN Developer</span> with <span className="text-slate-950 dark:text-white font-semibold">3+ years of production experience</span> turning Figma designs into fast, accessible web applications using <span className="font-semibold text-slate-900 dark:text-white">React.js, JavaScript (ES6+), and Node.js</span>.
            </p>

            {/* CTA ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-7 w-full">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-sm shadow-sm transition-all text-center w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>See my work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={pdf}
                download="Ankit_Yadav_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download size={15} className="text-primary" />
                <span>View Resume (PDF)</span>
              </a>

              {/* SOCIAL LINKS */}
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 sm:pt-0">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 hover:border-slate-400 dark:hover:border-white/30 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm hover:-translate-y-0.5"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>            
          </motion.div>

          {/* RIGHT COLUMN: DEVELOPER TERMINAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 w-full min-w-0 mt-4 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0d1117] border border-slate-700/70 shadow-xl w-full">
              
              {/* TERMINAL HEADER */}
              <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-[#161b22] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-1.5 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal size={13} className="text-orange-400" />
                    ankit@portfolio: ~
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 size={12} />
                  <span>online</span>
                </div>
              </div>

              {/* TABS */}
              <div className="flex items-center px-2 pt-2 bg-[#161b22]/70 border-b border-slate-800 gap-1 overflow-x-auto scrollbar-none">
                {terminalTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors shrink-0 ${
                        isActive
                          ? "bg-[#0d1117] text-white border-t border-x border-slate-700 font-medium"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* TERMINAL CODE DISPLAY */}
              <div className="p-3.5 sm:p-4 font-mono text-[11px] sm:text-xs overflow-x-auto overflow-y-hidden bg-[#0d1117] text-slate-200 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                <div className="leading-relaxed whitespace-pre font-mono">
                  {terminalTabs.find((t) => t.id === activeTab)?.code}
                </div>
              </div>

              {/* TERMINAL FOOTER STATUS */}
              <div className="px-3.5 sm:px-4 py-2 bg-[#161b22] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Node.js / React 18
                </span>
                <span>UTF-8</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




