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
import AnimatedBackground from "./components/AnimatedBackground";
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
    <div className="relative min-h-screen">

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <div className="h-[70px]" />

        <Header theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero theme={theme} />
          <About theme={theme} />
          <Skill />
          <Work />
          <Review />
          <Contact />
        </main>

        <Footer theme={theme}/>
      </div>

    </div>
  </ReactLenis>
);
};

export default App;
