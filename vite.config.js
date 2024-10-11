import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'


export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss], // Ensure Tailwind CSS is used as a PostCSS plugin
    },
  },
  build: {
    sourcemap: true, // Generate sourcemaps for easier debugging
  },
  server: {
    fs: {
      strict: true, // Ensure proper file access in Vite server
    },
  },
  optimizeDeps: {
    force: true, // Disable Vite's caching mechanism during development
  },
})
