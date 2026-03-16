<?php
/**
 * Plugin Name: Septic Masters Blocks New
 * Description: Custom Gutenberg blocks for the Septic Masters headless WordPress site.
 * Version: 1.0.0
 * Author: Septic Masters
 * Text Domain: septic-masters
 */

defined( 'ABSPATH' ) || exit;

// ── Block category ──────────────────────────────────────────────────────────

add_filter( 'block_categories_all', function ( $categories ) {
	return array_merge(
		[
			[
				'slug'  => 'septic-masters',
				'title' => 'Septic Masters',
				'icon'  => 'hammer',
			],
		],
		$categories
	);
} );

// ── Register blocks ──────────────────────────────────────────────────────────

add_action( 'init', function () {
	$blocks = [
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

	foreach ( $blocks as $block ) {
		$block_dir = __DIR__ . '/build/' . $block;
		if ( file_exists( $block_dir . '/block.json' ) ) {
			register_block_type( $block_dir );
		}
	}
} );

// ── REST API: /wp-json/site/v1/blocks/{slug} ─────────────────────────────────

add_action( 'rest_api_init', function () {
	register_rest_route(
		'site/v1',
		'/blocks/(?P<slug>[a-z0-9-]+)',
		[
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => 'septic_masters_get_blocks',
			'permission_callback' => '__return_true',
			'args'                => [
				'slug' => [
					'required'          => true,
					'sanitize_callback' => 'sanitize_title',
				],
			],
		]
	);
} );

/**
 * Fetch a page by slug and return its parsed Gutenberg blocks as JSON.
 */
function septic_masters_get_blocks( WP_REST_Request $request ): WP_REST_Response|WP_Error {
	$slug = $request->get_param( 'slug' );

	$page = get_page_by_path( $slug, OBJECT, 'page' );

	if ( ! $page ) {
		return new WP_Error(
			'not_found',
			sprintf( 'No page found with slug "%s".', $slug ),
			[ 'status' => 404 ]
		);
	}

	$raw_blocks = parse_blocks( $page->post_content );
	$blocks     = array_values(
		array_filter(
			array_map( 'septic_masters_format_block', $raw_blocks ),
			fn( $b ) => ! empty( $b['blockName'] )
		)
	);

	$response = rest_ensure_response( $blocks );
	$response->header( 'Access-Control-Allow-Origin', '*' );
	$response->header( 'Cache-Control', 'public, max-age=60' );

	return $response;
}

/**
 * Recursively format a parsed block into a clean array.
 *
 * @param array $block A block from parse_blocks().
 * @return array
 */
function septic_masters_format_block( array $block ): array {
	return [
		'blockName'   => $block['blockName'] ?? '',
		'attrs'       => $block['attrs'] ?? new stdClass(),
		'innerBlocks' => array_map(
			'septic_masters_format_block',
			$block['innerBlocks'] ?? []
		),
	];
}
