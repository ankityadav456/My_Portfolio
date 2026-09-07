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
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        script: ["'Alex Brush'", "cursive"],
        handwriting: ["Caveat", "cursive"],
      },

      // Theme colors (linked to CSS variables)
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-card": "var(--surface-card)",
        "surface-border": "var(--surface-border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          glow: "var(--primary-glow)",
        },
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },

      // Shadows & Glass
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        "glow-sm": "0 0 15px var(--primary-glow)",
        "glow-md": "0 0 30px var(--primary-glow)",
        "glow-lg": "0 0 50px var(--primary-glow)",
      },

      // Animation Timing
      transitionDuration: {
        250: "250ms",
      },

      // Keyframes
      keyframes: {
        glowPulse: {
          "0%, 100%": {
            textShadow: "0 0 10px var(--primary)",
          },
          "50%": {
            textShadow: "0 0 25px var(--secondary)",
          },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        glowPulse: "glowPulse 2s ease-in-out infinite",
        floatSlow: "floatSlow 4s ease-in-out infinite",
      },
    },
  },

  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
};

