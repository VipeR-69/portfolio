import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['ghanshyam.nodenerve.com'],
    port: 5555,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
