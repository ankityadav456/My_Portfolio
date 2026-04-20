/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Fonts
      fontFamily: {
         darling: ["Great Vibes", "cursive"],
        sans: ["Inter", "sans-serif"],          // Body text
        heading: ["Poppins", "sans-serif"],     // Headings / Hero
        mono: ["JetBrains Mono", "monospace"],  // Code accents
      },

      // Theme colors (linked to CSS variables)
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        text: "var(--text)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },

      // Shadows
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        glow: "0 0 20px rgba(255, 87, 34, 0.4)",
      },

      // Animation Timing
      transitionDuration: {
        250: "250ms",
      },

      // ✨ Glowing Text Animation
      keyframes: {
        glowPulse: {
          "0%, 100%": {
            textShadow: "0 0 10px var(--primary)",
          },
          "50%": {
            textShadow: "0 0 25px var(--secondary)",
          },
        },
      },
      animation: {
        glowPulse: "glowPulse 2s ease-in-out infinite",
      },
    },
  },

  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
};
