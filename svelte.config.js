import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    vite: defineConfig({
		  plugins: [WindiCSS()],
    }),
  },
};

export default config;
