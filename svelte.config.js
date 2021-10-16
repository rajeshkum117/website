/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-static';

export default {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer()]
		}
	}),
	adapter: adapter({
		// default options are shown
		pages: 'build',
		assets: 'build',
		fallback: null
	})
};
