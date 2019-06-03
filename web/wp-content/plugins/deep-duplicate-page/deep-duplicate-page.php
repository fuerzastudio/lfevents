<?php
/**
 * Adds Deep Duplicate action to the page row actions.
 *
 * @package   Deep_Duplicate_Page
 *
 * Plugin Name:       Deep Duplicate Page
 * Plugin URI:        https://github.com/LF-Engineering/lfevents/tree/master/web/wp-content/plugins/deep-duplicate-page
 * Description:       Adds "Deep Duplicate" action to the page row actions.  A deep duplicate of a page duplicates the page and all children creating a new copy of the full page tree.
 * Version:           0.1.0
 * Author:            cjyabraham
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Function creates page deep duplicate
 */
function ddp_deep_duplicate_page() {
	if ( ! ( isset( $_GET['post'] ) || isset( $_POST['post'] ) || ( isset( $_REQUEST['action'] ) && 'ddp_deep_duplicate_page' == $_REQUEST['action'] ) ) ) {
		wp_die( 'No page to duplicate has been supplied!' );
	}

	// Nonce verification.
	if ( ! isset( $_GET['deep_duplicate_nonce'] ) || ! wp_verify_nonce( $_GET['deep_duplicate_nonce'], basename( __FILE__ ) ) ) { //phpcs:ignore
		return;
	}

	// get the original post id.
	$post_id = ( isset( $_GET['post'] ) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );

	$new_post_id = deep_duplicate( $post_id, 0 );

	if ( $new_post_id ) {
		// finally, redirect to the edit post screen for the new draft.
		wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );
		exit;
	} else {
		wp_die( 'Page creation failed, could not find original page: ' . esc_html( $post_id ) );
	}
}
add_action( 'admin_action_ddp_deep_duplicate_page', 'ddp_deep_duplicate_page' );

/**
 * Add the duplicate link to action list for page_row_actions
 *
 * @param array  $actions Array of actions.
 * @param object $post Post object.
 */
function ddp_duplicate_page_link( $actions, $post ) {
	if ( current_user_can( 'edit_posts' ) ) {
		$actions['deep_duplicate'] = '<a href="' . wp_nonce_url( 'admin.php?action=ddp_deep_duplicate_page&post=' . $post->ID, basename( __FILE__ ), 'deep_duplicate_nonce' ) . '" title="Deep Duplicate this item" rel="permalink">Deep Duplicate</a>';
	}
	return $actions;
}

add_filter( 'page_row_actions', 'ddp_duplicate_page_link', 10, 2 );

/**
 * The recursive function that traverses the children of a page and duplicates each of them
 * Returns the new post id that was created.
 *
 * @param int $post_id the post id.
 * @param int $new_parent_id the new parent id for the duplicated post.
 */
function deep_duplicate( $post_id, $new_parent_id ) {
	global $wpdb;

	$post_in = get_post( $post_id );

	if ( ! isset( $post_in ) || null === $post_in ) {
		return null;
	}

	/*
	 * if you don't want current user to be the new post author,
	 * then change next couple of lines to this: $new_post_author = $post_in->post_author;
	 */
	$current_user_in = wp_get_current_user();
	$new_post_author = $current_user_in->ID;

	// new post data array.
	$args = array(
		'comment_status' => $post_in->comment_status,
		'ping_status'    => $post_in->ping_status,
		'post_author'    => $new_post_author,
		'post_content'   => $post_in->post_content,
		'post_excerpt'   => $post_in->post_excerpt,
		'post_name'      => $post_in->post_name,
		'post_parent'    => $new_parent_id,
		'post_password'  => $post_in->post_password,
		'post_status'    => 'draft',
		'post_title'     => $post_in->post_title,
		'post_type'      => $post_in->post_type,
		'to_ping'        => $post_in->to_ping,
		'menu_order'     => $post_in->menu_order,
	);

	// insert the post by wp_insert_post() function.
	$new_post_id = wp_insert_post( $args );


	// get all current post terms ad set them to the new post draft.
	$taxonomies = get_object_taxonomies( $post_in->post_type ); // returns array of taxonomy names for post type, ex array("category", "post_tag");.
	foreach ( $taxonomies as $taxonomy_in ) {
		$post_terms = wp_get_object_terms( $post_id, $taxonomy_in, array( 'fields' => 'slugs' ) );
		wp_set_object_terms( $new_post_id, $post_terms, $taxonomy_in, false );
	}

	// duplicate all post meta just in two SQL queries.
	$post_meta_infos = $wpdb->get_results( $wpdb->prepare( "SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=%d", $post_id ) );
	if ( count( $post_meta_infos ) != 0 ) {
		$sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
		foreach ( $post_meta_infos as $meta_info ) {
			$meta_key = $meta_info->meta_key;
			if ( '_wp_old_slug' == $meta_key ) {
				continue;
			}
			$meta_value = addslashes( $meta_info->meta_value );
			$sql_query_sel[] = "SELECT $new_post_id, '$meta_key', '$meta_value'";
		}
		$sql_query .= implode( ' UNION ALL ', $sql_query_sel );
		$wpdb->query( $sql_query ); //phpcs:ignore
	}

	$args = array(
		'post_parent' => $post_id,
		'post_type'   => $post_in->post_type,
		'numberposts' => -1,
		'post_status' => 'any',
	);
	$children = get_children( $args );

	if ( $children ) {
		foreach ( $children as $child ) {
			deep_duplicate( $child->ID, $new_post_id );
		}
	}

	return $new_post_id;
}