"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  MessageSquare,
  ArrowDown,
  MapPin,
  Sparkles,
} from "lucide-react";
import developerAvatar from "../assets/images/developer_3d_avatar.png";
import HeroAnimatedBackground from "./HeroAnimatedBackground";

import reactIcon from "../assets/images/react.svg";
import nodejsIcon from "../assets/images/nodejs.svg";
import mongodbIcon from "../assets/images/mongodb.png";
import tailwindIcon from "../assets/images/tailwind.svg";

const frontendLetters = "FRONTEND".split("");

const techStackList = [
  {
    name: "React",
    icon: (
      <img src={reactIcon} alt="React" className="w-4 h-4 object-contain" />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <span className="w-4 h-4 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-[9px] leading-none">
        N
      </span>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <img src={nodejsIcon} alt="Node.js" className="w-4 h-4 object-contain" />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <img src={mongodbIcon} alt="MongoDB" className="w-4 h-4 object-contain" />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <span className="w-4 h-4 rounded-xs bg-[#fded0c69] text-white flex items-center justify-center font-bold text-[9px] leading-none">
        JS
      </span>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <img src={tailwindIcon} alt="Tailwind CSS" className="w-4 h-4 object-contain" />
    ),
  },
];

const Hero = () => {
  const heroRef = useRef(null);
  const topBarRef = useRef(null);
  const headlineRef = useRef(null);
  const portraitContainerRef = useRef(null);
  const portraitCircleRef = useRef(null);
  const scriptWrapperRef = useRef(null);
  const scriptRef = useRef(null);
  const narrativeRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);
  const cornerLeftRef = useRef(null);
  const cornerRightRef = useRef(null);
  const techStackRef = useRef(null);

  // Synchronized GSAP entrance & organic kinetic timeline
  useGSAP(
    () => {
      // Set initial states
      gsap.set(topBarRef.current, { y: -16, opacity: 0 });
      gsap.set(".frontend-char", { y: 50, opacity: 0, scale: 0.92 });
      gsap.set(portraitContainerRef.current, { scale: 0.8, opacity: 0, filter: "blur(8px)" });
      gsap.set(scriptRef.current, { x: -35, y: 18, opacity: 0, scale: 0.88, rotate: -12 });
      gsap.set(narrativeRef.current, { y: 16, opacity: 0 });
      gsap.set(actionsRef.current, { y: 14, opacity: 0, scale: 0.96 });
      gsap.set(statsRef.current, { y: 14, opacity: 0 });
      gsap.set(cornerLeftRef.current, { x: -14, opacity: 0 });
      gsap.set(cornerRightRef.current, { x: 14, opacity: 0 });
      gsap.set(".tech-stack-pill", { x: 24, opacity: 0 });

      // Master Timeline
      const masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      masterTl
        // 1. Top status pill
        .to(topBarRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
        })
        // 2. FRONTEND letters ripple outward from center
        .to(
          ".frontend-char",
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            stagger: {
              each: 0.035,
              from: "center",
              ease: "power2.out",
            },
          },
          "-=0.25"
        )
        // 3. Portrait blooms in
        .to(
          portraitContainerRef.current,
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "back.out(1.3)",
            onComplete: () => {
              // Gentle floating levitation on portrait
              gsap.to(portraitCircleRef.current, {
                y: -7,
                duration: 3.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          },
          "-=0.6"
        )
        // 4. Sweeping cursive "Developer" flows across
        .to(
          scriptRef.current,
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: -7,
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => {
              // Gentle floating on script starts cleanly after entrance finishes
              gsap.to(scriptRef.current, {
                y: 6,
                rotate: -4,
                duration: 3.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          },
          "-=0.55"
        )
        // 5. Tech stack pills stagger in
        .to(
          ".tech-stack-pill",
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
          },
          "-=0.5"
        )
        // 6. Human narrative
        .to(
          narrativeRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.4"
        )
        // 7. Action buttons
        .to(
          actionsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.45,
          },
          "-=0.3"
        )
        // 8. Stats divider bar
        .to(
          statsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
          },
          "-=0.25"
        )
        // 9. Corner accents
        .to(
          [cornerLeftRef.current, cornerRightRef.current],
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
          },
          "-=0.2"
        );
    },
    { scope: heroRef }
  );

  // Butter-smooth mouse parallax tilt
  const handleMouseMove = (e) => {
    if (!heroRef.current || !portraitCircleRef.current || !headlineRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(portraitCircleRef.current, {
      rotateY: x * 16,
      rotateX: -y * 16,
      duration: 0.45,
      ease: "power2.out",
    });

    gsap.to(headlineRef.current, {
      x: -x * 20,
      y: -y * 12,
      duration: 0.6,
      ease: "power2.out",
    });

    // Subtly track horizontal parallax on the wrapper without conflicting with the floating Y animation
    if (scriptWrapperRef.current) {
      gsap.to(scriptWrapperRef.current, {
        x: x * 10,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    if (techStackRef.current) {
      gsap.to(techStackRef.current, {
        y: y * 12,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!portraitCircleRef.current || !headlineRef.current) return;
    gsap.to(portraitCircleRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(headlineRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    });
    if (scriptWrapperRef.current) {
      gsap.to(scriptWrapperRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }
    if (techStackRef.current) {
      gsap.to(techStackRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-6 sm:pt-28 sm:pb-8 overflow-hidden"
    >
      {/* ANIMATED BACKGROUND */}
      <HeroAnimatedBackground />

      {/* AMBIENT STUDIO LIGHTING GLOWS */}
      <div className="absolute top-1/4 left-4 xl:left-24 w-80 h-80 rounded-full bg-orange-500/10 dark:bg-cyan-500/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 xl:right-24 w-80 h-80 rounded-full bg-amber-500/10 dark:bg-sky-500/15 blur-[120px] pointer-events-none -z-10" />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">

        {/* ════════════════════════════════════════════
            CENTER STAGE WITH RIGHT TECH STACK PILLAR
            ════════════════════════════════════════════ */}
        <div className="relative w-full flex items-center justify-center my-2">
          
          {/* CENTERPIECE: EDITORIAL SIGNATURE STAGE */}
          <div className="relative w-full h-[270px] sm:h-[320px] md:h-[360px] lg:h-[380px] flex items-center justify-center select-none">

            {/* LAYER 1: ARCHITECTURAL "FRONTEND" WATERMARK */}
            <div
              ref={headlineRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 px-2 sm:px-0 will-change-transform"
            >
              <h1
                className="frontend-watermark font-heading font-black text-[15vw] sm:text-[13vw] md:text-[12vw] lg:text-[10.5rem] xl:text-[12rem] uppercase leading-none select-none whitespace-nowrap flex items-center justify-center w-full transition-all duration-300"
                style={{
                  letterSpacing: "clamp(2px, 0.05em, 16px)",
                }}
              >
                {frontendLetters.map((char, idx) => (
                  <span
                    key={idx}
                    className="frontend-char inline-block will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>

            {/* LAYER 2: CENTRAL CIRCULAR PORTRAIT (HUMAN & CLEAN MEDALLION) */}
            <div
              ref={portraitContainerRef}
              style={{ perspective: 1000 }}
              className="relative z-10 cursor-pointer will-change-transform"
            >
              <div
                ref={portraitCircleRef}
                style={{ transformStyle: "preserve-3d" }}
                className="relative flex items-center justify-center will-change-transform"
              >
                {/* Subtle ambient aura behind portrait */}
                <div className="absolute w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 rounded-full bg-gradient-to-tr from-orange-500/25 via-amber-500/15 to-transparent dark:from-sky-500/30 dark:via-cyan-400/20 dark:to-transparent blur-3xl pointer-events-none -z-10" />

                {/* Clean circular frame with accent ring */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-66 lg:h-66 rounded-full p-1 sm:p-1.5 bg-gradient-to-b from-white/95 to-orange-100/60 dark:from-slate-800/90 dark:to-slate-900/90 border-2 border-orange-500/35 dark:border-sky-400/30 ring-4 ring-orange-500/15 dark:ring-sky-400/15 backdrop-blur-xl shadow-2xl shadow-orange-500/15 dark:shadow-sky-500/15 transition-all duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
                    <img
                      src={developerAvatar}
                      alt="Ankit Yadav — Frontend & MERN Developer"
                      className="pt-2 sm:pt-2.5 w-full h-full object-contain object-top transition-transform duration-700 hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* LAYER 3: SWEEPING CURSIVE "Developer" CALLIGRAPHY */}
            <div className="absolute inset-x-0 -bottom-2 sm:bottom-0 md:bottom-1 flex justify-center pointer-events-none select-none z-20">
              <div ref={scriptWrapperRef} className="will-change-transform">
                <div ref={scriptRef} className="will-change-transform">
                  <span
                    className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-orange-500 dark:text-white drop-shadow-[0_4px_20px_rgba(234,88,12,0.4)] dark:drop-shadow-[0_4px_24px_rgba(56,189,248,0.45)] transition-colors duration-300"
                    style={{
                      display: "inline-block",
                      fontFamily: "'Alex Brush', cursive",
                    }}
                  >
                    Developer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════
              RIGHT-SIDE TECH STACK PILLAR
              As shown in reference image (hidden on small screens)
              ════════════════════════════════════════════ */}
          <div
            ref={techStackRef}
            className="hidden lg:flex flex-col items-end absolute right-0 xl:right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-auto select-none"
          >
            {/* Header: Cursive "Tech Stack" + Curved Arrow */}
            <div className="flex items-center gap-2 mb-3 mr-1">
              <span
                className="font-script text-xl xl:text-2xl text-orange-500 dark:text-sky-400 font-semibold"
                style={{ fontFamily: "'Alex Brush', cursive" }}
              >
                Tech Stack
              </span>
              <svg
                className="w-7 h-7 text-orange-500 dark:text-sky-400 transform -rotate-12"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 10 C 18 4, 30 14, 28 28" />
                <path d="M22 26 L 28 28 L 30 21" />
              </svg>
            </div>

            {/* Vertical Stack of Tech Pills */}
            <div className="flex flex-col items-end gap-2">
              {techStackList.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-stack-pill group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md hover:border-orange-400/50 dark:hover:border-sky-400/40 backdrop-blur-md transition-all duration-200 hover:-translate-x-1 cursor-default"
                >
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-sky-400 transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            LOWER SECTION: WARM NARRATIVE & DUAL CTAS
            ════════════════════════════════════════════ */}
        <div className="flex flex-col items-center text-center mt-2 sm:mt-4 space-y-4">
          
          {/* HEADLINE & BIO */}
          <div ref={narrativeRef} className="max-w-xl mx-auto space-y-2 will-change-transform">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-950 dark:text-white tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Ankit Yadav
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A Frontend &amp; MERN Developer crafting fast, clean, and thoughtful web experiences. Turning complex ideas into intuitive, pixel-perfect interfaces.
            </p>
          </div>

          {/* DUAL CTA BUTTONS (Pill Style from Reference) */}
          <div
            ref={actionsRef}
            className="w-full flex items-center justify-center gap-3.5 sm:gap-4 pt-1 will-change-transform"
          >
            {/* Primary: View My Work */}
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 dark:from-blue-600 dark:to-sky-500 dark:hover:from-blue-700 dark:hover:to-sky-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 dark:shadow-blue-500/25 dark:hover:shadow-blue-500/35 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <span>View My Work</span>
              <ArrowRight size={15} className="shrink-0" />
            </a>

            {/* Secondary: Let's Talk */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-slate-900/70 text-slate-800 dark:text-slate-100 font-semibold text-xs sm:text-sm shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-orange-400/60 dark:hover:border-white/30 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <span>Let's Talk</span>
              <MessageSquare size={14} className="shrink-0 text-slate-600 dark:text-slate-300" />
            </a>
          </div>

          {/* ════════════════════════════════════════════
              3-COLUMN STATS DIVIDER STRIP
              As shown in reference image: 3+ Years Exp | 10+ Projects | 100% Satisfaction
              ════════════════════════════════════════════ */}
          <div
            ref={statsRef}
            className="w-full max-w-lg mx-auto pt-4 sm:pt-6 will-change-transform"
          >
            <div className="grid grid-cols-3 divide-x divide-slate-200/90 dark:divide-white/10 text-center py-2">
              <div className="px-2">
                <div className="text-xl sm:text-2xl font-extrabold text-orange-500 dark:text-sky-400 font-heading leading-tight">
                  3+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium pt-0.5">
                  Years Experience
                </div>
              </div>

              <div className="px-2">
                <div className="text-xl sm:text-2xl font-extrabold text-orange-500 dark:text-sky-400 font-heading leading-tight">
                  10+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium pt-0.5">
                  Projects Completed
                </div>
              </div>

              <div className="px-2">
                <div className="text-xl sm:text-2xl font-extrabold text-orange-500 dark:text-sky-400 font-heading leading-tight">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium pt-0.5">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            BOTTOM CORNER ACCENTS
            Left: Building // Modern Web Experiences
            Right: Scroll Down ↓
            ════════════════════════════════════════════ */}
        <div className="w-full pt-4 flex items-center justify-between pointer-events-auto">
          
          {/* Bottom Left Accent */}
          <div
            ref={cornerLeftRef}
            className="hidden sm:flex items-center gap-2 text-left will-change-transform"
          >
            <div className="w-1 h-8 rounded-full bg-orange-500 dark:bg-sky-400" />
            <div className="text-[11px] leading-tight font-medium text-slate-600 dark:text-slate-400">
              <div>
                Building <span className="text-orange-500 dark:text-sky-500 font-mono">//</span>
              </div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                Modern Web Experiences
              </div>
            </div>
          </div>

          {/* Bottom Right Accent: Scroll Down button */}
          <div
            ref={cornerRightRef}
            className="hidden sm:flex items-center gap-2 ml-auto will-change-transform"
          >
            <span
              className="font-script text-lg text-slate-500 dark:text-slate-400"
              style={{ fontFamily: "'Alex Brush', cursive" }}
            >
              Scroll Down
            </span>
            <a
              href="#about"
              aria-label="Scroll down to About section"
              className="w-8 h-8 rounded-full border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-slate-900/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-800 hover:text-orange-500 dark:hover:text-sky-400 hover:border-orange-400 dark:hover:border-sky-400 transition-all hover:scale-105 active:scale-95 shadow-2xs"
            >
              <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

