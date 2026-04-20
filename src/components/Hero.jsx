"use client";

import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImg from "../assets/images/heroimg.png";
import heroImgLight from "../assets/images/heroImgLight.png";
import darkLogo from "../assets/images/ChatGPT Image Dec 9, 2025, 09_11_36 PM.png";
import lightLogo from "../assets/images/Modern AY logo design.png";
import pdf from "../assets/images/Ankit_Yadav_newResumes.pdf";
import Lottie from "react-lottie-player";
import styles from "../style";
import animationData from "../lotties/person-coding.json";
// import ThreeBackground from "./AnimatedBackground";

const socials = [
  { href: "https://github.com/ankityadav456", icon: <Github /> },
  { href: "https://www.linkedin.com/in/ankit-yadav-y2302", icon: <Linkedin /> },
  { href: "mailto:ankityadav_45@outlook.com", icon: <Mail /> },
];

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = ({ theme }) => {
  useEffect(() => {

  const isMobile = window.innerWidth < 768;

  /* ===== LEFT SIDE ===== */
  gsap.fromTo(
    ".leftSide > *",
    {
      y: isMobile ? -120 : 500, // mobile ↓ , desktop ↑
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
      stagger: 0.15,
    }
  );

  /* ===== RIGHT SIDE ===== */
  gsap.fromTo(
    ".rightSide",
    {
      y: isMobile ? 120 : -500, // mobile ↑ , desktop ↓
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5,
    }
  );

}, []);
  return (
<section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20"
>
      {/* Soft background glow */}
      {/* <ThreeBackground theme={theme} /> */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT */}
        <motion.div
        className="leftSide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="logo"
              className="w-12 h-12 rounded-xl"
            />

            <div className="flex items-center gap-2 text-sm text-text/70">
              <span className="relative w-2 h-2 rounded-full bg-[#ff5722]">
                <span className="absolute inset-0 rounded-full bg-[#ff5722] animate-ping" />
              </span>
              Available for work
            </div>
          </div>

          {/* Headline */}
       <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
  Hi, I’m{" "}
  <span className="text-primary">Ankit Yadav</span>
  <br />
  <span className="text-text/70">
    MERN Stack Developer
  </span>
</h1>


          {/* Description */}
          <p className="max-w-xl text-text/70 mb-10 font-heading">
            I build modern, scalable and visually polished web applications
            with clean code, smooth animations and strong UX principles.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            {/* CV */}
            <a
              href={pdf}
              download
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-primary text-white font-medium
                hover:shadow-lg hover:-translate-y-[1px]
                transition-all
              "
            >
              <Download size={18} />
              Download CV
            </a>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ href, icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-11 h-11 rounded-xl
                    flex items-center justify-center
                    bg-white/70 dark:bg-white/10
                    border border-white/10
                    backdrop-blur-md
                    hover:bg-primary hover:text-white
                    transition-all
                  "
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT – IMAGE */}
        <div
          className={`rightSide flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <div className="relative z-index-[5] h-[90%] w-[85%] ">
            <Lottie {...defaultOptions} />
          </div>
          {/* <div className="absolute -z-10 w-[60%] h-[60%] 
bg-red-500/30 blur-[120px] rounded-full" /> */}

        </div>
      </div>
    </section>
  );
};

export default Hero;
