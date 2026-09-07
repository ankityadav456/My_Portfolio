"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dark1 from "../assets/images/ChatGPT Image Dec 9, 2025, 09_11_36 PM.png";
import light1 from "../assets/images/Modern AY logo design.png";

const baseUrl = (import.meta.env.BASE_URL || "/").endsWith("/")
  ? import.meta.env.BASE_URL || "/"
  : `${import.meta.env.BASE_URL}/`;
const resumeUrl = `${baseUrl}Ankit_Yadav_ResumeNew.pdf`;

const navItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Skills", link: "#skills" },
  { label: "Work", link: "#work" },
  { label: "Reviews", link: "#reviews" },
  { label: "Contact", link: "#contact" },
];

const Header = ({ theme, toggleTheme }) => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // ROBUST SCROLLSPY ALGORITHM (WITH CLICK LOCK TO PREVENT BLINKING)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Prevent scroll event from overriding active pill during smooth scrolling
      if (isClickScrollingRef.current) return;

      // If at the very top
      if (window.scrollY < 100) {
        setActiveLink("#home");
        return;
      }

      const sectionElements = navItems
        .map((item) => ({
          id: item.link,
          el: document.querySelector(item.link),
        }))
        .filter((item) => item.el !== null);

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;

        if (scrollPosition >= top) {
          setActiveLink(id);
          break;
        }
      }

      // Check if at the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveLink("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
    isClickScrollingRef.current = true;

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);

    const section = document.querySelector(link);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 sm:py-3 ios-glass-bar backdrop-blur-2xl backdrop-saturate-[180%]"
          : "py-3.5 sm:py-4 border-b border-white/20 dark:border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO + BRAND */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
            <img
              src={theme === "dark" ? dark1 : light1}
              alt="Ankit Yadav Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white truncate">
                Ankit Yadav
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                Senior Dev
              </span>
            </div>
            {/* <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-medium truncate">3+ YOE • Full Stack</p> */}
          </div>
        </a>

        {/* DESKTOP CAPSULE NAVIGATION (iOS FROSTED GLASS CAPSULE) */}
        <nav className="hidden lg:flex items-center p-1.5 rounded-full ios-glass-capsule">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeLink === item.link;
              return (
                <li key={item.link} className="relative">
                  <a
                    href={item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className={`relative z-10 px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 block rounded-full ${
                      isActive
                        ? "text-slate-950 dark:text-white font-bold"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeDesktopNav"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-white dark:bg-white/20 rounded-full shadow-sm dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] border border-slate-200/80 dark:border-white/20 backdrop-blur-md"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* RESUME BUTTON (DESKTOP & TABLET - iOS GLASS) */}
          <a
            href={resumeUrl}
            download="Ankit_Yadav_Resume.pdf"
            className="hidden sm:inline-flex h-9 px-3.5 items-center justify-center gap-1.5 text-xs font-semibold rounded-full ios-glass-btn text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all hover:scale-105 active:scale-95 shrink-0"
            title="Download Resume"
          >
            <FileDown size={14} className="text-primary" />
            <span>CV</span>
          </a>

          {/* HIRE / CONTACT CTA (DESKTOP & TABLET ONLY TO AVOID MOBILE CROWDING) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:inline-flex relative h-9 px-4 items-center justify-center gap-2 text-xs font-semibold rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white shadow-[0_2px_12px_rgba(249,115,22,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.5),inset_0_1px_0_rgba(255,255,255,0.45)] hover:scale-105 active:scale-95 transition-all overflow-hidden shrink-0 group"
          >
            {/* Glossy Sheen Reflection */}
            <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
              <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-sweep pointer-events-none" />
            </span>

            {/* Razor-Sharp Blinking 4-Point Star */}
            <svg
              className="w-3.5 h-3.5 text-white fill-white shrink-0 animate-star-blink relative z-10"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </svg>
            <span className="tracking-wide font-semibold relative z-10">Let's Talk</span>
          </a>

          {/* THEME TOGGLE (iOS GLASS BUTTON) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full ios-glass-btn text-slate-800 dark:text-slate-100 transition-all hover:scale-110 active:scale-90 shrink-0"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-slate-700" />
            )}
          </button>

          {/* MOBILE MENU TOGGLE (iOS GLASS BUTTON) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-full ios-glass-btn text-slate-800 dark:text-slate-100 transition-all hover:scale-110 active:scale-90 shrink-0"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER (iOS FROSTED GLASS SHEET) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden relative z-50 mt-2 mx-3 sm:mx-6 p-4 rounded-3xl ios-glass-sheet"
            >
              <div className="flex flex-col space-y-1.5">
                {navItems.map((item) => {
                  const isActive = activeLink === item.link;
                  return (
                    <a
                      key={item.link}
                      href={item.link}
                      onClick={(e) => handleNavClick(e, item.link)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md font-bold"
                          : "text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="pt-3 border-t border-slate-200 dark:border-white/10 mt-2 flex items-center justify-between">
                  <a
                    href={resumeUrl}
                    download="Ankit_Yadav_Resume.pdf"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary py-1 px-2 hover:underline"
                    title="Download Resume"
                  >
                    <FileDown size={14} />
                    Download CV
                  </a>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Hire
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;


