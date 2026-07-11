/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		devtools(),
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		viteReact(),
		tailwindcss(),
	],
	test: {
		globals: true, // Permite usar describe, it, expect sem importar
		environment: "jsdom", // Simula o navegador
		setupFiles: "./src/setupTests.ts", // Arquivo de configuração que criaremos
		css: true, // Útil se você testa estilos/classes
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
