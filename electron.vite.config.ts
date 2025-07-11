import path from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    publicDir: path.resolve("resources") //esse publicDir serve para deixar determinada a pasta publica na hora da compilação de Typescript para Javascript, pois a pasta que é executada no node é a out,e não src
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': path.resolve('src/renderer/src')
      }
    },
    plugins: [react(),tailwindcss()]
  }
})
