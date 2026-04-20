"use client";

import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

import react from "../assets/images/react.svg";
import nodejs from "../assets/images/nodejs.svg";
import express from "../assets/images/express.svg";
import mongodb from "../assets/images/mongodb.png";
import javascript from "../assets/images/javascript.svg";
import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import git from "../assets/images/git.svg";
import github from "../assets/images/github.svg";
import figma from "../assets/images/figma.svg";
import tailwind from "../assets/images/tailwind.svg";
import vscode from "../assets/images/vscode.svg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const skillItem = [
  { imgSrc: react, label: "ReactJS", desc: "Building modern UI" },
  { imgSrc: nodejs, label: "Node.js", desc: "Backend runtime" },
  { imgSrc: express, label: "Express.js", desc: "REST API framework" },
  { imgSrc: mongodb, label: "MongoDB", desc: "NoSQL database" },
  { imgSrc: javascript, label: "JavaScript", desc: "Core language" },
  { imgSrc: html, label: "HTML", desc: "Semantic structure" },
  { imgSrc: css, label: "CSS", desc: "Modern layouts & design" },
  { imgSrc: git, label: "Git", desc: "Version control" },
  { imgSrc: github, label: "GitHub", desc: "Code collaboration" },
  { imgSrc: figma, label: "Figma", desc: "UI/UX design" },
  { imgSrc: tailwind, label: "Tailwind CSS", desc: "Utility styling" },
  { imgSrc: vscode, label: "VS Code", desc: "Development editor" },
];

const Skill = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    // TITLE animation
    gsap.from(".skill-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // DESCRIPTION animation
    gsap.from(".skill-desc", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // CARDS stagger animation
    gsap.from(".skill-card", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
      },
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);
  return (
    <section id="skills" ref={sectionRef} className="relative pb-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="skill-title font-heading text-4xl md:text-5xl font-semibold mb-4">
            My Tech Stack
          </h2>

          <p className="skill-desc text-text/70 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable,
            modern and high-performance web applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="
        skill-grid
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        ">
          {skillItem.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;