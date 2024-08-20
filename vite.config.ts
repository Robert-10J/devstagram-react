import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath( new URL('./src/components', import.meta.url)) },
      { find: '@hooks', replacement: fileURLToPath( new URL('./src/hooks', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath( new URL('./src/pages', import.meta.url)) },
      { find: '@config', replacement: fileURLToPath( new URL('./src/config', import.meta.url)) },
    ]
  }
})
