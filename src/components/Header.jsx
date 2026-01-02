import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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

  const [rightMenuOpen, setRightMenuOpen] = useState(false);


  const [activeLink, setActiveLink] = useState("#home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [boxStyle, setBoxStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef(null);

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

  const handleNavClick = (event, link) => {
    setActiveLink(link);
    updateActiveBox(event.target);

    const section = document.querySelector(link);
    if (section) section.scrollIntoView({ behavior: "smooth" });

    setMobileMenuOpen(false);
  };
  // <header className="fixed top-3 left-1/2 -translate-x-1/2 z-[5000] w-full">

  return (

    //   <header className="
    //   fixed top-0 left-0 w-full z-50
    //   backdrop-blur-md
    //   bg-white/10 dark:bg-black/20
    // ">
    <header className="
 fixed top-0 w-full z-50
 backdrop-blur-xl
 bg-white/10 dark:bg-black/20
 border-b border-white/10
">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
        }}
      />

      {/* <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
                repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
              `,
            }}
          /> */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1200px] mx-auto px-4 flex items-center justify-between py-2
     shrink-0 overflow-hidden
        "
      >
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={theme == "dark" ? dark1 : light1}
            alt="logo"
            className="w-14 h-14 rounded-xl object-cover"
          />
          {/* <h1 className="font-display text-xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-glowPulse">
            Ankit Yadav
          </h1> */}


        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex relative">
          <ul
            ref={containerRef}
            className="
              relative flex items-center 
              bg-white/20 dark:bg-white/5  
              px-2 py-2.5 rounded-full 
              backdrop-blur-xl 
              border border-white/20 dark:border-white/10
              shadow-md
            "
          >
            {/* Active Highlight */}
            <span
              className="
                absolute left-0 -z-10 h-[34px] 
                rounded-full 
                bg-black/10 dark:bg-white/10 
                transition-all duration-300
              "
              style={{
                width: boxStyle.width,
                left: boxStyle.left,
              }}
            >
              <div className="absolute left-1/2 -top-[8px] -translate-x-1/2 h-1 w-8 rounded-t-full bg-primary" />
            </span>

            {navItems.map((item) => (
              <li key={item.link} className="list-none">
                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(e, item.link);
                  }}
                  className={`px-4 py-1.5 text-sm transition font-medium ${activeLink === item.link
                    ? "text-black dark:text-white"
                    : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE BUTTON */}
          <a
            href="#contact"
            className="
    relative inline-flex items-center justify-center
    px-5 py-2 text-sm font-medium rounded-full
    bg-surface/80 text-text
    backdrop-blur-xl
    border border-white/30
    shadow-lg
    transition-all duration-300
    hover:bg-surface hover:shadow-xl
  "
          >
            {/* glow */}
            <span className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 hover:opacity-100 transition-opacity"></span>

            <span className="relative z-10">Contact Me</span>

            {/* ping */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-ping"></span>
          </a>


          <button
            onClick={toggleTheme}
            className="hidden md:flex
              p-2 rounded-full
              bg-white/30 dark:bg-white/10 
              backdrop-blur-xl 
              shadow-md 
              hover:bg-white/40 dark:hover:bg-white/20 
              transition
              border border-white/30 dark:border-white/10
            "
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-black/80" />
            )}
          </button>

          {/* ================= FLOATING RIGHT MENU TOGGLE ================= */}
          <button
            onClick={() => setRightMenuOpen(!rightMenuOpen)}
            className=" md:hidden
    p-2 rounded-full
    bg-white/30 dark:bg-white/10
    backdrop-blur-xl
    border border-white/20 dark:border-white/10
    shadow-xl
    hover:scale-105 transition
  "
          >
            {rightMenuOpen ? (
              <X className="w-6 h-6 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 dark:text-white" />
            )}
          </button>

        </div>
      </motion.nav>



      {rightMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
          className="
      fixed right-5 top-20 -translate-y-5 z-[9998]
      w-56 rounded-2xl
      backdrop-blur-2xl
      bg-white/90 dark:bg-black/90
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
                      ? "bg-primary/20 text-primary shadow-md"
                      : "text-black dark:text-white hover:bg-white/30 dark:hover:bg-white/10"
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
      )}

    </header>

  );
};

export default Header;
