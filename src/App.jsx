import { ReactLenis } from "lenis/react";
import { useTheme } from "./context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { theme, toggleTheme } = useTheme();

  // GSAP scroll animations
  useGSAP(() => {
    gsap.utils.toArray(".reveal-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "-200 bottom",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <ReactLenis root>
      <div className="relative min-h-screen overflow-hidden">


        {/* HEADER + CONTENT */}
        <div className="relative z-10">
          <div className="h-[70px]" aria-hidden />
          {/* <LiquidBackground /> */}
          <Header theme={theme} toggleTheme={toggleTheme} />

          {/* MAIN */}
          <main>
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
            <Hero theme={theme} />
            <About theme={theme} />
            <Skill />
            <Work />
            <Review />
            <Contact />
          </main>

          <Footer />
        </div>

      </div>
    </ReactLenis>

  );
};

export default App;
