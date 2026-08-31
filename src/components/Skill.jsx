"use client";

import { useState } from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { Code2, Layers, Database, Wrench, Sparkles } from "lucide-react";

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
import firebase from "../assets/images/firebase.svg";
import kotlin from "../assets/images/Kotlin.svg";

const categories = [
  { id: "all", label: "All Skills", icon: <Sparkles size={14} /> },
  { id: "frontend", label: "Frontend & UI", icon: <Code2 size={14} /> },
  { id: "state", label: "State & Routing", icon: <Layers size={14} /> },
  { id: "backend", label: "Backend & DB", icon: <Database size={14} /> },
  { id: "tools", label: "Tools & DevOps", icon: <Wrench size={14} /> },
];

const skills = [
  // FRONTEND
  {
    imgSrc: react,
    label: "React.js",
    desc: "React 18+, Component architecture, Virtual DOM, code splitting & custom hooks",
    category: "frontend",
    tag: "Core Skill",
  },
  {
    imgSrc: javascript,
    label: "JavaScript (ES6+)",
    desc: "Modern ECMAScript, Async/Await, Closures, Promises, Event Loop & DOM APIs",
    category: "frontend",
    tag: "Expert",
  },
  {
    imgSrc: tailwind,
    label: "Tailwind CSS",
    desc: "Utility-first architecture, responsive layouts, design tokens & dark/light theme systems",
    category: "frontend",
    tag: "Core Skill",
  },
  {
    imgSrc: html,
    label: "HTML5 & CSS3",
    desc: "Semantic HTML, Accessibility (a11y), CSS Grid, Flexbox, Keyframes & Animations",
    category: "frontend",
    tag: "Foundation",
  },
  {
    imgSrc: react,
    label: "Bootstrap & Metronic UI",
    desc: "Rapid enterprise UI prototyping with Bootstrap and Metronic UI Framework",
    category: "frontend",
    tag: "UI Frameworks",
  },

  // STATE & ROUTING
  {
    imgSrc: react,
    label: "React Hooks & Context API",
    desc: "useState, useEffect, useMemo, useCallback, useRef & global Context architecture",
    category: "state",
    tag: "State Mgmt",
  },
  {
    imgSrc: react,
    label: "React Router & SPA",
    desc: "Dynamic routing, nested layouts, protected routes, loaders & browser history navigation",
    category: "state",
    tag: "Routing",
  },
  {
    imgSrc: react,
    label: "Redux & Storage",
    desc: "State management, Redux actions/reducers, LocalStorage & SessionStorage syncing",
    category: "state",
    tag: "State Mgmt",
  },

  // BACKEND & DATABASE
  {
    imgSrc: nodejs,
    label: "Node.js",
    desc: "Event-driven JavaScript runtime, asynchronous I/O, REST APIs & server logic",
    category: "backend",
    tag: "Backend",
  },
  {
    imgSrc: express,
    label: "Express.js",
    desc: "RESTful API development, custom middlewares, routing & error handling pipelines",
    category: "backend",
    tag: "Backend",
  },
  {
    imgSrc: mongodb,
    label: "MongoDB & Mongoose",
    desc: "NoSQL schema modeling, validation, aggregation pipelines & MongoDB Atlas indexing",
    category: "backend",
    tag: "Database",
  },
  {
    imgSrc: express,
    label: "RESTful APIs & Axios",
    desc: "20+ production APIs integrated, async data handling, interceptors, error states & loading states",
    category: "backend",
    tag: "API Integration",
  },
  {
    imgSrc: firebase,
    label: "JWT Auth & Stripe API",
    desc: "JWT authentication, Bcrypt password hashing, protected routes & Stripe payment workflows",
    category: "backend",
    tag: "Security & Payments",
  },

  // TOOLS & WORKFLOW
  {
    imgSrc: git,
    label: "Git & GitHub",
    desc: "Git branching strategies, pull requests, code reviews, rebasing & version control",
    category: "tools",
    tag: "Workflow",
  },
  {
    imgSrc: vscode,
    label: "Lighthouse & Chrome DevTools",
    desc: "Performance audits, eliminating render-blocking resources, lazy loading & resolving memory leaks",
    category: "tools",
    tag: "Performance",
  },
  {
    imgSrc: vscode,
    label: "Postman & VS Code",
    desc: "API debugging, automated endpoint testing, modern linting, Prettier & developer tooling",
    category: "tools",
    tag: "Developer Tools",
  },
  {
    imgSrc: firebase,
    label: "C# / ASP.NET MVC Exposure",
    desc: "Working knowledge of C#, ASP.NET MVC, Razor Views, SQL Server & deployment on Render/Vercel",
    category: "tools",
    tag: "Full-Stack Exposure",
  },
];

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-primary font-semibold mb-2">
            My Toolkit
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-3">
            Everyday tools & technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Technologies, libraries, and tools I use to build fast, reliable, and accessible web applications.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 px-2 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 shrink-0 ${
                  isActive
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm"
                    : "bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.label} {...skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;
