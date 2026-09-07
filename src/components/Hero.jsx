"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import developerAvatar from "../assets/images/developer_3d_avatar.png";
import HeroAnimatedBackground from "./HeroAnimatedBackground";

const baseUrl = (import.meta.env.BASE_URL || "/").endsWith("/")
  ? import.meta.env.BASE_URL || "/"
  : `${import.meta.env.BASE_URL}/`;
const resumeUrl = `${baseUrl}Ankit_Yadav_ResumeNew.pdf`;

const socials = [
  { href: "https://github.com/ankityadav456", icon: <Github size={17} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ankit-yadav", icon: <Linkedin size={17} />, label: "LinkedIn" },
  { href: "mailto:ankit.y.2302@gmail.com", icon: <Mail size={17} />, label: "Email" },
];

const frontendLetters = "FRONTEND".split("");

const Hero = () => {
  const heroRef = useRef(null);
  const topBarRef = useRef(null);
  const headlineRef = useRef(null);
  const portraitContainerRef = useRef(null);
  const portraitCircleRef = useRef(null);
  const scriptRef = useRef(null);
  const narrativeRef = useRef(null);
  const actionsRef = useRef(null);
  const footerRef = useRef(null);

  // Synchronized GSAP entrance & organic kinetic timeline
  useGSAP(
    () => {
      // Set initial states
      gsap.set(topBarRef.current, { y: -16, opacity: 0 });
      gsap.set(".frontend-char", { y: 50, opacity: 0, scale: 0.92 });
      gsap.set(portraitContainerRef.current, { scale: 0.8, opacity: 0, filter: "blur(8px)" });
      gsap.set(scriptRef.current, { x: -40, y: 20, opacity: 0, scale: 0.85, rotate: -14 });
      gsap.set(narrativeRef.current, { y: 16, opacity: 0 });
      gsap.set(actionsRef.current, { y: 14, opacity: 0, scale: 0.96 });
      gsap.set(footerRef.current, { y: 12, opacity: 0 });

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
            ease: "back.out(1.7)",
          },
          "-=0.55"
        )
        // 5. Human narrative
        .to(
          narrativeRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.4"
        )
        // 6. Action buttons
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
        // 7. Minimal bottom bar
        .to(
          footerRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
          },
          "-=0.2"
        );

      // Gentle floating levitation on portrait
      gsap.to(portraitCircleRef.current, {
        y: -7,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });

      // Gentle floating on script
      gsap.to(scriptRef.current, {
        y: 5,
        rotate: -5,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
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

    gsap.to(scriptRef.current, {
      x: x * 10,
      y: y * 6,
      duration: 0.5,
      ease: "power2.out",
    });
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
    gsap.to(scriptRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 overflow-hidden"
    >
      {/* ANIMATED BACKGROUND */}
      <HeroAnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        
        {/* ════════════════════════════════════════════
            TOP ROW: HUMAN AVAILABILITY BADGE
            ════════════════════════════════════════════ */}
        {/* <div ref={topBarRef} className="flex items-center justify-center sm:justify-start mb-2 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-700 dark:text-emerald-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold">Available for Opportunities</span>
            <span className="text-emerald-400/50">•</span>
            <span className="font-normal text-slate-600 dark:text-slate-300">Mumbai, India</span>
          </div>
        </div> */}

        {/* ════════════════════════════════════════════
            CENTERPIECE: EDITORIAL SIGNATURE STAGE
            Massive architectural "FRONTEND" background
            with circular portrait and sweeping cursive
            "Developer" calligraphy (exact reference style)
            ════════════════════════════════════════════ */}
        <div className="relative w-full h-[280px] sm:h-[330px] md:h-[370px] lg:h-[390px] flex items-center justify-center select-none my-2 sm:my-3">
          
          {/* LAYER 1: ARCHITECTURAL "FRONTEND" WATERMARK */}
          <div
            ref={headlineRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 px-2 sm:px-0 will-change-transform"
          >
            <h1
              className="frontend-watermark font-heading font-black text-[15vw] sm:text-[13vw] md:text-[12vw] lg:text-[10.5rem] xl:text-[12rem] uppercase leading-none select-none whitespace-nowrap flex items-center justify-center w-full"
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

          {/* LAYER 2: CENTRAL CIRCULAR PORTRAIT (HUMAN & CLEAN) */}
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
              <div className="absolute w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 rounded-full bg-gradient-to-tr from-orange-500/25 via-amber-500/15 to-transparent dark:from-sky-500/20 dark:via-indigo-500/15 dark:to-transparent blur-3xl pointer-events-none -z-10" />

              {/* Clean circular frame: Apple luxury medallion */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-66 lg:h-66 rounded-full p-2 sm:p-2.5 bg-gradient-to-b from-white/90 to-white/40 dark:from-white/20 dark:to-white/5 border border-orange-500/30 dark:border-white/20 ring-1 ring-orange-500/20 dark:ring-transparent backdrop-blur-xl shadow-2xl shadow-orange-500/10 dark:shadow-black/80 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 ring-1 ring-black/5 dark:ring-white/10">
                  <img
                    src={developerAvatar}
                    alt="Ankit Yadav — Frontend & MERN Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* LAYER 3: SWEEPING CURSIVE "Developer" */}
          <div
            ref={scriptRef}
            className="absolute z-20 pointer-events-none select-none -bottom-2 sm:bottom-0 md:bottom-1 will-change-transform"
          >
            <span
              className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary dark:text-white drop-shadow-[0_4px_16px_rgba(234,88,12,0.4)] dark:drop-shadow-[0_4px_24px_rgba(56,189,248,0.35)] transition-colors duration-300"
              style={{
                display: "inline-block",
                fontFamily: "'Alex Brush', cursive",
              }}
            >
              Developer
            </span>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            BOTTOM SECTION: WARM NARRATIVE, CTAS & FOOTER
            Uncluttered, elegant & human-centered
            ════════════════════════════════════════════ */}
        <div className="flex flex-col items-center text-center mt-3 sm:mt-5 space-y-4 sm:space-y-5">
          
          {/* WARM HUMAN INTRODUCTION */}
          <div ref={narrativeRef} className="max-w-xl mx-auto space-y-1.5 will-change-transform">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-slate-950 dark:text-white tracking-tight">
              Hi, I'm <span className="text-gradient">Ankit Yadav</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A Frontend &amp; MERN Developer crafting fast, clean, and thoughtful web experiences. Turning complex ideas into intuitive, pixel-perfect interfaces.
            </p>
          </div>

          {/* ACTION SECTION & MATCHED FOOTER COLUMN */}
          <div className="w-full max-w-md sm:max-w-lg mx-auto flex flex-col items-center space-y-6 pt-1">
            
            {/* CLEAN CALL TO ACTIONS */}
            <div ref={actionsRef} className="w-full flex items-center justify-center gap-3.5 will-change-transform">
              <a
                href="#work"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={resumeUrl}
                download="Ankit_Yadav_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 font-semibold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
                title="Download Resume"
              >
                <Download size={15} className="text-primary" />
                <span>Download CV</span>
              </a>
            </div>

            {/* MINIMAL BOTTOM BAR: PERFECTLY ANCHORED UNDER BUTTONS */}
            <div
              ref={footerRef}
              className="w-full pt-4 sm:pt-5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4 text-xs will-change-transform"
            >
              {/* Social Icons Dock */}
              <div className="flex items-center gap-2">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 hover:border-primary/50 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all shadow-xs hover:-translate-y-0.5"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Direct Email Link */}
              <a
                href="mailto:ankit.y.2302@gmail.com"
                title="ankit.y.2302@gmail.com"
                className="h-9 px-3.5 rounded-lg flex items-center gap-2 border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 hover:border-primary/50 text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-all shadow-xs text-xs font-medium hover:-translate-y-0.5"
              >
                <Mail size={14} className="text-primary shrink-0" />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
