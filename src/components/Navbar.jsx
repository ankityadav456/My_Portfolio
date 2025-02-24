import { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  const [activeLink, setActiveLink] = useState("#home");
  const activeBox = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      const activeElement = document.querySelector(".nav-link.active");
      if (activeElement) {
        updateActiveBox(activeElement);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateActiveBox = (element) => {
    if (!activeBox.current || !element) return;

    activeBox.current.style.top = `${element.offsetTop}px`;
    activeBox.current.style.left = `${element.offsetLeft}px`;
    activeBox.current.style.width = `${element.offsetWidth}px`;
    activeBox.current.style.height = `${element.offsetHeight}px`;
  };

  const handleNavClick = (event, link) => {
    setActiveLink(link);
    updateActiveBox(event.target);
  };

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""} bg-white dark:bg-zinc-900 transition-all relative px-4 py-2 shadow-md dark:shadow-lg`}>
      <div
        className="absolute transition-all duration-300 rounded-md z-0 backdrop-blur-md"
        ref={activeBox}
        style={{
          backgroundColor: darkMode ? "rgba(59, 130, 246, 0.5)" : "rgba(191, 219, 254, 0.5)", // Blue shade that blends with the theme
        }}
      ></div>

      {navItems.map(({ label, link, extraClass = "" }) => (
        <a
          key={link}
          href={link}
          className={`nav-link ${activeLink === link ? "active text-blue-600 dark:text-blue-400" : "text-gray-800 dark:text-gray-300"} ${extraClass} relative px-4 py-2 font-medium transition-all`}
          onClick={(event) => handleNavClick(event, link)}
        >
          {label}
        </a>
      ))}
     <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun w-5 h-5 text-gray-700 dark:text-gray-300"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon w-5 h-5 text-gray-700 dark:text-gray-300"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
