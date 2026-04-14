import { defineConfig } from 'vite'

export default defineConfig({
  base: '/PORTAFOLIO/',
  root: '.',
  build: {
    outDir: 'build',
  },
  server: {
    port: 8081,
    open: false,
  },
})
