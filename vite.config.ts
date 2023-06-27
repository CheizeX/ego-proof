import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), macrosPlugin()],
	server: {
		port: 8080,
	},
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' },
			{ find: '~', replacement: '/' },
		],
	},
	build: {
		chunkSizeWarningLimit: 2500,
	},
});
