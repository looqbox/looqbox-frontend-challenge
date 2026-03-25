import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // @ts-expect-error: The userConfig interface doesn't include Vitest't test definitions
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
