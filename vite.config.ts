/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./__test__/setup.ts",
    coverage: {
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**__test__/**",
        "**/src/utils/**",
        "**/src/data/**",
        "**/src/core/models/**",
        "*.json",
        "*.config.js",
        "*.d.ts",
        ".eslintrc.cjs",
      ],
    },
  },
});
