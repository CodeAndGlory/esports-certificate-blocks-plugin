<?php
/**
 * Plugin Name:       Esports Certificate Blocks Plugin
 * Description:       Adds blocks styled by the esports-certificate-yootheme-child
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Jody McKay - UNCG Online
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       esports-certificate-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_esports_certificate_blocks_plugin_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_esports_certificate_blocks_plugin_block_init' );

add_filter( 'wp_kses_allowed_html', 'esports_certificate_add_restricted_attributes_to_tags', 10, 2);

function esports_certificate_add_restricted_attributes_to_tags($tags) {
	$tags['svg'] = array(
		'xmlns' => array(),
		'fill' => array(),
		'viewbox' => array(),
		'role' => array(),
		'aria-hidden' => array(),
		'focusable' => array(),
		'aria-labelledby' => array(),
		'class' => array()
	);

	$tags['path'] = array(
		'd' => array(),
		'fill' => array(),
		'class' => array()
	);

	return $tags;
}
