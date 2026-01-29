import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          router: ['react-router-dom'],
          redux: ['react-redux', '@reduxjs/toolkit'],
          antd: ['antd', '@ant-design/icons'],
          axios: ['axios'],
        },
      },
    },
  },
});
