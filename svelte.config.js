/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({fallback: 'index.html'})
	},
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer()]
		}
	})
};
