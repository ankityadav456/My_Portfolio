"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import dark1 from "../assets/images/ChatGPT Image Dec 9, 2025, 09_11_36 PM.png";
import light1 from "../assets/images/Modern AY logo design.png";

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
    icon: <Github size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankit-yadav-y2302/",
    icon: <Linkedin size={18} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: <Youtube size={18} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram size={18} />,
  },
];

const Footer = ({theme}) => {
  return (
    <footer className="relative border-t border-black/5 dark:border-white/10">

      {/* subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10" />

      <div className="container mx-auto px-4 pt-16 pb-5">

        {/* MAIN GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <img src={theme === "dark" ? dark1 : light1} alt="logo" className="w-9 h-9" />
              <h3 className="text-lg font-semibold text-text">
                Ankit Yadav
              </h3>
            </div>

            <p className="mt-4 text-text/70 max-w-sm">
              MERN Stack Developer crafting modern,
              scalable and high-performance web applications.
            </p>
          </div>

          {/* SITEMAP */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-text/60">
              Sitemap
            </p>

            <ul className="space-y-3">
              {sitemap.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-text/70 hover:text-primary transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-text/60">
              Connect
            </p>

            <div className="flex gap-4">
              {socials.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    w-10 h-10 rounded-lg
                    flex items-center justify-center
                    border border-black/10 dark:border-white/10
                    hover:bg-primary hover:text-white
                    transition-all duration-300
                  "
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            <p className="mt-6 text-sm text-text/60">
              Open for freelance & full-time opportunities.
            </p>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-text/60 gap-3">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-primary font-medium">
              Ankit Yadav
            </span>
          </p>

          <p>Built with React • Tailwind • Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;