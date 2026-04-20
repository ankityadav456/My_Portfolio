"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dark1 from "../assets/images/ChatGPT Image Dec 9, 2025, 09_11_36 PM.png";
import light1 from "../assets/images/Modern AY logo design.png";

const Header = ({ theme, toggleTheme }) => {

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
  ];

  const [activeLink, setActiveLink] = useState("#home");
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
  const [boxStyle, setBoxStyle] = useState({ left: 0, width: 0 });

  const containerRef = useRef(null);

  /* ================= ACTIVE TAB POSITION ================= */
  useEffect(() => {
    const firstItem = containerRef.current?.querySelector("li a");
    if (firstItem) updateActiveBox(firstItem);
  }, []);

  const updateActiveBox = (element) => {
    if (!element) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const elRect = element.getBoundingClientRect();

    setBoxStyle({
      left: elRect.left - parentRect.left,
      width: elRect.width,
    });
  };

  useEffect(() => {
  const sections = navItems.map((item) =>
    document.querySelector(item.link)
  );
})

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY + 150;

    let currentSection = null;

    navItems.forEach((item) => {
      const section = document.querySelector(item.link);
      if (!section) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        currentSection = item.link;
      }
    });

    // ✅ Only update if navbar section exists
    if (currentSection) {
      setActiveLink(currentSection);

      const activeEl =
        containerRef.current?.querySelector(
          `a[href="${currentSection}"]`
        );

      if (activeEl) updateActiveBox(activeEl);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

 const handleNavClick = (e, link) => {
  e.preventDefault();

  const section = document.querySelector(link);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  setRightMenuOpen(false);
};

  return (
    <>
    <header className="
      fixed top-0 w-full z-50
      backdrop-blur-xl
      bg-white/10 dark:bg-black/20
      border-b border-white/10
    ">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1200px] mx-auto px-4 py-2 flex justify-between items-center"
      >
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={theme === "dark" ? dark1 : light1}
            alt="logo"
            className="w-14 h-14 rounded-xl object-cover"
          />
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex relative">
          <ul
            ref={containerRef}
            className="
relative flex items-center
px-2 py-2
rounded-full
bg-white/50 dark:bg-white/5
backdrop-blur-2xl
border border-white/40 dark:border-white/10
shadow-xl
"
          >
            {/* ACTIVE CAPSULE */}
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 420, damping: 35 }}
              className="absolute top-1 bottom-1 rounded-full overflow-hidden"
              style={{
                width: boxStyle.width,
                left: boxStyle.left,

                backdropFilter: "blur(20px)",

                background:
                  theme === "dark"
                    ? `
          linear-gradient(
            to bottom,
            rgba(255,87,34,0.95),
            rgba(255,87,34,0.75),
            rgba(255,87,34,0.45)
          )
        `
                    : `
          linear-gradient(
            to bottom,
            rgba(255,87,34,0.85),
            rgba(255,87,34,0.6),
            rgba(255,255,255,0.6)
          )
        `,

                boxShadow:
                  theme === "dark"
                    ? `
          inset 0 1px 3px rgba(255,255,255,0.25),
          0 8px 28px rgba(255,87,34,0.45),
          0 0 45px rgba(255,87,34,0.75)
        `
                    : `
          inset 0 2px 4px rgba(255,255,255,0.9),
          0 6px 18px rgba(255,87,34,0.25),
          0 0 25px rgba(255,87,34,0.35)
        `,

                border:
                  theme === "dark"
                    ? "1px solid rgba(255,87,34,0.5)"
                    : "1px solid rgba(255,255,255,0.8)",
              }}
            >
              {/* TOP GLASS REFLECTION */}
              <span
                className={`
      absolute inset-x-2 top-0 h-1/2 rounded-full pointer-events-none
      ${theme === "dark"
                    ? "bg-gradient-to-b from-white/20 to-transparent"
                    : "bg-gradient-to-b from-white/70 to-transparent"}
    `}
              />

              <span
                className={`
      absolute inset-0 rounded-full pointer-events-none
      ${theme === "dark"
                    ? "shadow-[0_0_50px_rgba(255,87,34,0.8)]"
                    : "shadow-[0_0_30px_rgba(255,87,34,0.35)]"}
    `}
              />
            </motion.span>

            {navItems.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  className={`
                    relative px-5 py-2 text-sm font-medium
                    transition-all duration-300
                    ${activeLink === item.link
                      ? "text-black dark:text-white"
                      : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-3">

          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            className="
              relative inline-flex items-center justify-center
              px-5 py-2 text-sm font-medium rounded-full
              bg-surface/80 text-text
              backdrop-blur-xl
              border border-white/30
              shadow-lg
              hover:shadow-xl transition
            "
          >
            <span className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 hover:opacity-100 transition" />
            <span className="relative z-10">Contact Me</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
          </a>

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="
              hidden md:flex
              p-2 rounded-full
              bg-white/30 dark:bg-white/10
              backdrop-blur-xl
              border border-white/30 dark:border-white/10
              shadow-md
              hover:bg-white/40 dark:hover:bg-white/20
              transition
            "
          >
            {theme === "dark"
              ? <Sun className="w-5 h-5 text-yellow-300" />
              : <Moon className="w-5 h-5 text-black/80" />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setRightMenuOpen(!rightMenuOpen)}
            className="
              md:hidden p-2 rounded-full
              bg-white/30 dark:bg-white/10
              backdrop-blur-xl
              border border-white/20 dark:border-white/10
              shadow-xl
            "
          >
            {rightMenuOpen
              ? <X className="w-6 h-6 dark:text-white" />
              : <Menu className="w-6 h-6 dark:text-white" />}
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}


    </header>

    <AnimatePresence>
      {rightMenuOpen && (
        <>
          {/* OVERLAY */}
            <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
          className="
      fixed right-5 top-20 -translate-y-5 z-[9998]
      w-56 rounded-2xl
      backdrop-blur-2xl
      bg-white/40 dark:bg-black/20
      border border-white/20 dark:border-white/10
      shadow-xl
      p-4
    "
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  onClick={() => {
                    setActiveLink(item.link);
                    setRightMenuOpen(false);
                  }}
                  className={`
    relative block px-3 py-2 rounded-lg
    transition-all duration-300
    ${activeLink === item.link
                      ? "bg-black/10 dark:bg-white/90 text-primary shadow-md"
                      : "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/50"
                    }
  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-3 h-px bg-white/20" />

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
        w-full flex items-center justify-center gap-2
        px-3 py-2 rounded-lg
        bg-white/30 dark:bg-white/10
        hover:bg-white/40 dark:hover:bg-white/20
        transition
      "
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-black" />
                <span className="text-sm">Dark Mode</span>
              </>
            )}
          </button>
        </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Header;