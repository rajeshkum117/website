/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import livereload from 'rollup-plugin-livereload';

const config = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer()]
		}
	}),
	plugins: [
		!production &&
			livereload({
				watch: 'public',
				clientUrl: process.env.CLIENT_URL
			})
	]
};

export default config;
