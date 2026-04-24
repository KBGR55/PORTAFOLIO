import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  root: '.',
  build: {
    outDir: 'build',
  },
  server: {
    port: 8081,
    open: false,
  },
})
