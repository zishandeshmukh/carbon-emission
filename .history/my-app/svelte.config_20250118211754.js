import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Use the Vercel adapter for deployment
		adapter: vercel()
	},
	preprocess: vitePreprocess() // Optional: Include any additional preprocessors if needed
};

export default config;
