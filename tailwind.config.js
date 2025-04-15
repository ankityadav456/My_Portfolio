/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';  // Correct plugin name

export default {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Make sure the font-family is applied properly
      },
    },
  },
  plugins: [tailwindScrollbar],  // Correct plugin name
}
