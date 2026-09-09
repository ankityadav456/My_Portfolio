import { ReactLenis, useLenis } from "lenis/react";
import { useTheme } from "./context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const lenis = useLenis();

  useGSAP(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tickerCb);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      <div className="relative min-h-screen bg-background text-text selection:bg-primary/20 selection:text-primary transition-colors duration-300">
        
        {/* AMBIENT MESH AURORA BACKGROUND */}
        <AnimatedBackground />
        
        <div className="relative z-10">
          <Header theme={theme} toggleTheme={toggleTheme} />

          <main>
            <Hero theme={theme} />
            <About theme={theme} />
            <Experience />
            <Skill />
            <Work />
            <Review />
            <Contact />
          </main>

          <Footer theme={theme} />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
