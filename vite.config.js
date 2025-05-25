import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-tabs-multitask-app/',
   optimizeDeps: {
    include: ['redux-thunk'],
  },
})
