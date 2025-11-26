import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";  // ReactLenis for smooth scrolling
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";  // For GSAP hook
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Review from "./components/Review";
import "./App.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle Dark Mode and store it in localStorage
  const toggleDarkMode = () => {
    const newTheme = !darkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  // GSAP Animations using useGSAP hook
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "-200 bottom",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <ReactLenis root>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="mt-16">
        <div className={`min-h-screen w-full relative transition-colors duration-500
          }`}>
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

          <Hero />
          <About />
          <Skill />
          <Work />
          <Review />
          <Contact />
        </div>
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
