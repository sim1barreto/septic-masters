const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
const CopyPlugin = require( 'copy-webpack-plugin' );

const blocks = [
	'hero',
	'services',
	'testimonials',
	'why-us',
	'how-it-works',
	'trust-bar',
	'lead-capture',
	'faq',
	'emergency-banner',
	'service-area-map',
	'page-hero',
	'about-story',
	'values-grid',
	'timeline',
	'team-grid',
	'promise-cta',
	'services-detail',
	'cta-banner',
	'service-areas-grid',
	'coverage-map',
	'contact-info-bar',
	'contact-form',
];

// Build entry map: { 'hero/index': './src/blocks/hero/index.js', ... }
const entry = blocks.reduce( ( acc, block ) => {
	acc[ `${ block }/index` ] = `./src/blocks/${ block }/index.js`;
	return acc;
}, {} );

// Filter out the default CopyPlugin so we can replace it with our own.
const filteredPlugins = defaultConfig.plugins.filter(
	( plugin ) => plugin.constructor.name !== 'CopyPlugin'
);

module.exports = {
	...defaultConfig,
	entry,
	output: {
		...defaultConfig.output,
		path: path.resolve( __dirname, 'build' ),
		filename: '[name].js',
	},
	plugins: [
		...filteredPlugins,
		// Copy block.json from src → build for each block.
		new CopyPlugin( {
			patterns: blocks.map( ( block ) => ( {
				from: path.resolve( __dirname, `src/blocks/${ block }/block.json` ),
				to: path.resolve( __dirname, `build/${ block }/block.json` ),
			} ) ),
		} ),
	],
};
