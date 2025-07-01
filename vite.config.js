import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Dina3D/',
  build: {
    outDir: 'dist'
  },
  assetsInclude: ['**/*.glb'],
})
