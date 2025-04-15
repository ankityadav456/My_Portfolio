import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/My_Portfolio/',   // Add this line to set base path for GitHub Pages
  plugins: [react()],
})
