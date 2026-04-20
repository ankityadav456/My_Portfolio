"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import dark1 from "../assets/images/ChatGPT Image Dec 9, 2025, 09_11_36 PM.png";
import light1 from "../assets/images/Modern AY logo design.png";

const stats = [
  { label: "Projects Completed", number: "15+" },
  { label: "Experience", number: "2.7+ Years" },
  { label: "Technologies", number: "20+" },
];

const typingText =
  "Hi, I'm Ankit Yadav — a Frontend-Focused MERN Stack Developer passionate about building modern, scalable, and high-performance web applications. I specialize in creating clean UI, smooth animations, and seamless user experiences using React, JavaScript, and modern frontend technologies, backed by Node.js, Express, and MongoDB.";

  const About = ({ theme }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  /* ================= Typing Effect ================= */
  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="about"
      className="relative py-16 pb-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* SECTION TITLE */}
        <motion.h2
          className="text-3xl md:text-5xl font-heading font-semibold text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            backdrop-blur-2xl
            bg-white/60 dark:bg-white/5
            border border-white/30 dark:border-white/10
            shadow-xl
            rounded-3xl
            p-8 md:p-14
          "
        >
      
          <p className="text-lg leading-relaxed text-text/80 mb-12 font-heading">
            {displayedText}
            <span className="animate-pulse ml-1 text-primary">|</span>
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">

            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="
                  rounded-2xl
                  bg-white/70 dark:bg-white/5
                  border border-white/20
                  backdrop-blur-xl
                  p-6 text-center
                  transition
                "
              >
                <h3 className="text-3xl font-semibold text-primary mb-1">
                  {item.number}
                </h3>
                <p className="text-sm text-text/60">
                  {item.label}
                </p>
              </motion.div>
            ))}

            {/* LOGO */}
            <div className="flex justify-center md:justify-end">
              <img
                src={theme === "dark" ? dark1 : light1}
                alt="logo"
                className="w-16 h-16 rounded-xl shadow-lg"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;