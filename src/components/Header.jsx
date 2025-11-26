import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import logo from '../assets/images/logo.jpg'; 

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
     <header className="pb-1 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 transition-all duration-300">
     
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
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 my-1">
        {/* Logo */}
        <h1 className="hidden md:block">
          <a href="/" className="logo">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={logo}
                width={40}
                height={40}
                alt="Ankit Yadav portrait"
                className="img-cover"
              />
            </figure>
          </a>
        </h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="menu-btn p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded text-3xl">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Navbar */}
        <nav
          className={`me-2 absolute top-20 left-0 w-full bg-white/70  md:static md:w-auto md:bg-transparent transition-all duration-300 ${navOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } md:translate-x-0 md:opacity-100`}
        >
          <Navbar navOpen={navOpen} />
        </nav>

        {/* Contact Button & Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="contact-btn relative px-4 py-2 bg-blue-500 text-white rounded-lg dark:bg-blue-600 transition-all hover:bg-blue-600 dark:hover:bg-blue-500"
          >
            Contact Me
            <span className="absolute w-2 h-2 bg-white rounded-full animate-ping top-1 right-1"></span>
          </a>

          {/* Dark Mode Toggle */}

        </div>
      </div>
    </header>
  );
};

export default Header;
