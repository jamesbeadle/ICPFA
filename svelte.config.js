import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
const filesPath = (path) => `${path}`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
		postcss: {
			plugins: [autoprefixer]
		}
	}),
	kit: {
		adapter: adapter(),
		files: {
			assets: filesPath('static'),
			lib: filesPath('src/lib'),
			routes: filesPath('src/routes'),
			appTemplate: filesPath('src/app.html')
		}
	}
};

export default config;
