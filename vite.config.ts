import { fileURLToPath, URL } from 'node:url';
import { basename } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const base = mode === 'production' ? `/${basename(process.cwd())}/` : '/';

// https://vitejs.dev/config/
export default defineConfig({
	base,
	plugins: [vue()],
	build: {
		outDir: 'dist', // Default output directory for builds.
		assetsDir: 'assets', // Directory for static assets like images, fonts, etc.
	},
	server: {
		port: 3000, // Or any preferred port
		open: true, // Automatically open the browser on server start
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});

