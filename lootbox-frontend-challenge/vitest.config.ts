import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // simula browser
    include: ['src/tests/**/*.{test,spec}.{ts,tsx}'], // foca só na pasta tests
  },
});
