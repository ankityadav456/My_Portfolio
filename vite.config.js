// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/My_Portfolio/',  // Adjust base URL to match your repository name
  plugins: [react()],
})
