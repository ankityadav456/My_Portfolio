"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Code2, FileDown } from "lucide-react";
import dark1 from "../assets/images/ChatGPT Image Dec 9, 2025, 09_11_36 PM.png";
import light1 from "../assets/images/Modern AY logo design.png";
const baseUrl = (import.meta.env.BASE_URL || "/").endsWith("/")
  ? import.meta.env.BASE_URL || "/"
  : `${import.meta.env.BASE_URL}/`;
const resumePdf = `${baseUrl}Ankit_Yadav_ResumeNew.pdf`;

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ankityadav456",
    icon: <Github size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankit-yadav",
    icon: <Linkedin size={18} />,
  },
  {
    label: "Email",
    href: "mailto:ankit.y.2302@gmail.com",
    icon: <Mail size={18} />,
  },
];

const Footer = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#090d16]/70 backdrop-blur-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-slate-100 dark:border-white/5">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-3 sm:space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-sm">
                <img
                  src={theme === "dark" ? dark1 : light1}
                  alt="Ankit Yadav Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  Ankit Yadav
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Frontend & MERN Stack Developer</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Building responsive, high-performance web applications with React.js, Node.js, and modern JavaScript.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={resumePdf}
                download="Ankit_Yadav_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium transition-all shadow-sm"
              >
                <FileDown size={13} className="text-primary" />
                <span>Resume (PDF)</span>
              </a>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </span>
            </div>
          </div>

          {/* SITEMAP COLUMN */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {sitemap.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT COLUMN */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Connect
            </p>
            <div className="flex gap-2 mb-3">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 hover:border-slate-400 dark:hover:border-white/30 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Open to conversations about frontend engineering and full-stack development.
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="font-medium text-slate-900 dark:text-white">Ankit Yadav</span>. Built with React & Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all text-xs font-medium"
            >
              <ArrowUp size={13} />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

