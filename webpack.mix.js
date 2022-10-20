const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
/* jQuery must be declared here too */
mix.webpackConfig({
	externals: {
		"jquery": "jQuery"
	},
});

/* The compiler is not detecting the images */
mix.options({
	processCssUrls: false
});

mix.js('resources/js/web.js', 'public/js').js('resources/js/app.js', 'public/js')
	.postCss('resources/css/web.css', 'public/css')
	.postCss('resources/css/app.css', 'public/css').version();
