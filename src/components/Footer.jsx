"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/ankityadav456", icon: <Github size={20} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankit-yadav-y2302/", icon: <Linkedin size={20} /> },
  { label: "YouTube", href: "https://www.youtube.com", icon: <Youtube size={20} /> },
  { label: "Instagram", href: "https://www.instagram.com", icon: <Instagram size={20} /> },
];

const Footer = () => {
  return (
    <footer className="text-gray-800 dark:text-gray-200 py-8">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100"
            whileHover={{ scale: 1.05 }}
          >
            Let’s work together today!
          </motion.h2>
        </div>

        {/* Sitemap & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Sitemap */}
          <div>
            <p className="text-lg font-semibold mb-3">Sitemap</p>
            <ul className="space-y-2">
              {sitemap.map(({ label, href }, key) => (
                <motion.li 
                  key={key}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                >
                  <a
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-lg font-semibold mb-3">Socials</p>
            <ul>
              {socials.map(({ label, href, icon }, key) => (
                <motion.li 
                  key={key}
                  whileHover={{ scale: 0.9}}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition"
                  >
                    {icon} {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center">
            <img src="/images/logo.jpg" alt="Logo" className="w-10 h-10 rounded-lg" />
          </a>
          <p className="text-md text-center md:text-left">
            &copy; 2025 <span className="text-purple-500 dark:text-purple-400">Ankit Yadav</span>. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
