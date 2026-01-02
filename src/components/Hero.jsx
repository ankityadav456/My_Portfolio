"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImg from "../assets/images/heroimg.png";
import heroImgLight from "../assets/images/heroImgLight.png";
import darkLogo from "../assets/images/ChatGPT Image Dec 9, 2025, 09_11_36 PM.png";
import lightLogo from "../assets/images/Modern AY logo design.png";
import pdf from "../assets/images/Ankit_Yadav_newResumes.pdf";

const socials = [
  { href: "https://github.com/ankityadav456", icon: <Github /> },
  { href: "https://www.linkedin.com/in/ankit-yadav-y2302", icon: <Linkedin /> },
  { href: "mailto:ankityadav_45@outlook.com", icon: <Mail /> },
];

const Hero = ({ theme }) => {
  return (
    <section
      id="home"
      className="relative mt-12 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT */}
        <motion.div
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
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </span>
              Available for work
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
            Hi, I’m{" "}
            <span className="text-primary">Ankit Yadav</span>
            <br />
            <span className="text-text/70">
              MERN Stack Developer
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-text/70 mb-10">
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-[48px] bg-primary/20 blur-2xl" />

          <div className="relative rounded-[48px] overflow-hidden border border-white/10 shadow-lg">
            <img
             src={theme === "dark" ? heroImg : heroImgLight}
              alt="Ankit Yadav"
              className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
