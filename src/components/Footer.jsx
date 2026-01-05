"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import logo from "../assets/images/logo.png";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ankityadav456",
    icon: <Github />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankit-yadav-y2302/",
    icon: <Linkedin />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: <Youtube />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram />,
  },
];

const Footer = () => {
  return (
    <footer className="relative section mt-10 overflow-hidden border-t-2 border-opacity-50 border-black dark:border-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4"
      >
        {/* CTA */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let’s build something meaningful together
          </h2>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-primary text-white font-medium
              hover:shadow-lg hover:-translate-y-[1px]
              transition-all"
          >
            Contact Me
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          {/* Brand */}
          

          {/* Sitemap */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-text/60">
              Sitemap
            </p>
            <ul className="space-y-3">
              {sitemap.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-text/70 hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-text/60">
              Connect
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
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
                  aria-label={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
            
            <div>
            
            <p className="text-sm text-text/70 max-w-xs mt-8">
              Frontend MERN Stack Developer crafting elegant, performant and
              modern web experiences.
            </p>
          </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text/60">
          <p>
            © 2025 <span className="text-primary font-medium">Ankit Yadav</span>
          </p>
          <p>Built with React, Tailwind & Framer Motion</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
