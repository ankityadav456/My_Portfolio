"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import ProjectCard from "./ProjectCard";

import yumigo from "../assets/images/Yumigo.png";
import spotify from "../assets/images/Spotify-App.png";
import todo from "../assets/images/to-do.png";
import portfolio from "../assets/images/portfolio.png";
import foodSharp from "../assets/images/food-sharp.webp";
import music from "../assets/images/music.jpg";

const works = [
  {
    imgSrc: yumigo,
    title: "Yumigo Food Ordering App",
    tags: ["MERN", "Full Stack", "API"],
    projectLink: "https://github.com/ankityadav456/mern-food-ordering",
  },
  {
    imgSrc: spotify,
    title: "Spotify Clone Music Player",
    tags: ["React", "API", "Web App"],
    projectLink: "https://github.com/ankityadav456/spotify__clone.git",
  },
  {
    imgSrc: todo,
    title: "Modern To-Do App",
    tags: ["React", "CRUD", "Backend"],
    projectLink: "https://github.com/ankityadav456/user-managment_.git",
  },
  {
    imgSrc: portfolio,
    title: "Portfolio Website",
    tags: ["React", "UI/UX"],
    projectLink: "https://github.com/ankityadav456/My-app.git",
  },
  {
    imgSrc: foodSharp,
    title: "Food-Sharp",
    tags: ["Android", "E-Commerce"],
    projectLink: "https://github.com/ankityadav456/Food-sharp",
  },
  {
    imgSrc: music,
    title: "Music Player",
    tags: ["Android", "Development"],
    projectLink: "https://github.com/ankityadav456/-Music-Player",
  },
];

const Work = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".work-title",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative pb-24 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[160px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="work-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Selected Work
          </h2>

          <p className="text-text/70 mt-4 max-w-2xl mx-auto">
            Real-world projects built with performance,
            scalability and beautiful user experience.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;