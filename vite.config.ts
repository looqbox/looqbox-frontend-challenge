import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, InlineConfig, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  test: {
    globals: true, // para não precisar importar as funções do pacote "vitest" em todos os arquivos.
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})
