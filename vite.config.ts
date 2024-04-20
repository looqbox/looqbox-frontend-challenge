import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [ react(), viteTsconfigPaths() ],
	server: {    
		open: true
	},
	build: {
		target: browserslistToEsbuild([
			'>0.2%',
			'not dead',
			'not op_mini all'
		]),
		outDir: 'build'
	},
});
