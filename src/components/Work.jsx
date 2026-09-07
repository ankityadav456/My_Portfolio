"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Sparkles, Layers, Globe, Smartphone } from "lucide-react";

import yumigo from "../assets/images/Yumigo.png";
import spotify from "../assets/images/Spotify-App.png";
import portfolio from "../assets/images/portfolio.png";
import todo from "../assets/images/to-do.png";
import foodSharp from "../assets/images/food-sharp.webp";
import music from "../assets/images/music.jpg";

const filterCategories = [
  { id: "all", label: "All Projects", icon: <Sparkles size={14} /> },
  { id: "mern", label: "MERN Stack", icon: <Layers size={14} /> },
  { id: "web", label: "React Web Apps", icon: <Globe size={14} /> },
  { id: "mobile", label: "Mobile Apps", icon: <Smartphone size={14} /> },
];

const works = [
  {
    id: "yumigo",
    imgSrc: yumigo,
    title: "Yumigo — Full Stack Food Ordering Application",
    description: "Full-stack food ordering platform covering menu browsing, cart management, order placement, and order history with JWT authentication, Bcrypt hashing, Stripe real-time payments, admin/user dashboards, dark/light theme, and GSAP animations.",
    category: "mern",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Stripe API", "Render"],
    metric: "JWT & Stripe Payments",
    projectLink: "https://yumigo-frontend.onrender.com/",
    githubLink: "https://github.com/ankityadav456/Yumigo-Food-Ordering-Web-App",
    isLive: true,
    featured: true,
  },
  {
    id: "portfolio",
    imgSrc: portfolio,
    title: "Personal Developer Portfolio Website",
    description: "Responsive modern developer portfolio with dark/light mode toggle, smooth scrolling, and GSAP animations. Integrated Getform for a backend-free contact form and deployed on Vercel with CI/CD through GitHub with strong Lighthouse scores.",
    category: "web",
    tags: ["React.js", "Tailwind CSS", "GSAP", "Getform", "Vercel", "Git"],
    metric: "Modern",
    projectLink: "https://ankityadav456.github.io/My_Portfolio/",
    githubLink: "https://github.com/ankityadav456/My_Portfolio",
    isLive: true,
    featured: true,
  },
  {
    id: "todo",
    imgSrc: todo,
    title: "Employee Management System (Full CRUD)",
    description: "Full CRUD enterprise application for managing employee records, departments, and roles, backed by an Express REST API and MongoDB Atlas cloud database with JWT authentication and secure form handling.",
    category: "mern",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB Atlas", "Express.js", "REST APIs"],
    metric: "Full CRUD & MongoDB Atlas",
    projectLink: "https://github.com/ankityadav456/user-managment_.git",
    githubLink: "https://github.com/ankityadav456/user-managment_.git",
    isLive: false,
    featured: true,
  },
  {
    id: "spotify",
    imgSrc: spotify,
    title: "Spotify Web UI Clone",
    description: "Pixel-perfect recreation of the Spotify interface in React.js with functional music player controls, volume manipulation, responsive track queues, and a fully responsive layout.",
    category: "web",
    tags: ["React.js", "JavaScript (ES6+)", "CSS3", "Audio Controls", "Responsive UI"],
    metric: "Pixel-Perfect Recreation",
    projectLink: "https://github.com/ankityadav456/Spotify-Clone-App",
    githubLink: "https://github.com/ankityadav456/Spotify-Clone-App",
    isLive: false,
    featured: false,
  },
  {
    id: "foodsharp",
    imgSrc: foodSharp,
    title: "Food-Sharp Android App",
    description: "Native mobile food ordering client engineered for Android with modular component views, optimized product catalog navigation, and local caching.",
    category: "mobile",
    tags: ["Android Studio", "Kotlin", "Mobile UX", "REST APIs"],
    metric: "Native Android App",
    projectLink: "https://github.com/ankityadav456/Food-sharp",
    githubLink: "https://github.com/ankityadav456/Food-sharp",
    isLive: false,
    featured: false,
  },
  {
    id: "music",
    imgSrc: music,
    title: "Harmonix Android Music Player",
    description: "High-performance native Android media playback engine supporting hardware audio decoding, custom visualizers, background audio services, and playlists.",
    category: "mobile",
    tags: ["Android", "Kotlin", "Audio Services", "Material 3"],
    metric: "Hardware Audio Decoders",
    projectLink: "https://github.com/ankityadav456/-Music-Player",
    githubLink: "https://github.com/ankityadav456/-Music-Player",
    isLive: false,
    featured: false,
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? works
    : works.filter((w) => w.category === activeFilter);

  return (
    <section id="work" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-12 select-none">
          {/* Architectural Background Watermark */}
          <div
            aria-hidden="true"
            className="absolute -top-6 sm:-top-9 left-1/2 -translate-x-1/2 font-heading font-black tracking-widest uppercase text-6xl sm:text-7xl md:text-8xl select-none pointer-events-none section-watermark whitespace-nowrap z-0"
          >
            PROJECTS
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/10 text-primary border border-orange-500/20 mb-2.5 shadow-2xs">
              <FolderGit2 size={13} className="text-primary" />
              <span>04 // FEATURED WORK</span>
            </div>

            {/* Clear, Recognizable Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-2.5">
              Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Production full-stack MERN applications, responsive web interfaces, and systems I've built and shipped.
            </p>
          </div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 px-2 sm:px-0">
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 shrink-0 ${
                  isActive
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm"
                    : "bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;