import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/little-bear-pig-bank/',
  plugins: [react()],
})
