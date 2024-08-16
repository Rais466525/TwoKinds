import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TwoKinds/',  // Перенеси `base` сюда
  plugins: [react()],
})
