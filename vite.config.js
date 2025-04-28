import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  fontFamily:{
    sans:['Montserrat', 'Padauk']
  },
  plugins: [react(),tailwindcss()],
//api integration for not refresh loading
  server: {  
    hmr: false,
  },
})
