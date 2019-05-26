<?php
/**
 * LFEvents helper functions
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

/**
 * Gets related LFEvents for current post.  Only returns Events for the current year.
 *
 * @param int $parent_id ID of top parent post of the Event.
 *
 * @return array
 */
function lfe_get_related_events( $parent_id ) {
	$related_events = [];

	$terms = wp_get_post_terms( $parent_id, 'lfevent-category', array( 'fields' => 'ids' ) );

	$args = array(
		'post_type'   => 'page',
		'post_parent' => 0,
		'no_found_rows' => true,  // used to improve performance.
		'update_post_meta_cache' => false, // used to improve performance.
		'update_post_term_cache' => false, // used to improve performance.
		'post__not_in' => array( $parent_id ), // ignores current post.
		'tax_query'   => array(
			array(
				'taxonomy' => 'lfevent-category',
				'field'    => 'term_id',
				'terms'    => $terms,
			),
		),
	);

	$the_query = new WP_Query( $args );

	if ( $the_query->have_posts() ) {
		while ( $the_query->have_posts() ) {
			$the_query->the_post();
			$related_events[] = array( 'ID' => get_the_ID() );
		}
	}
	wp_reset_postdata(); // Restore original Post Data.

	return $related_events;

}

/**
 * Gets all archives of a particular LFEvent.
 *
 * @param int $parent_id ID of top parent post of the Event.
 *
 * @return array
 */
function lfe_get_archive( $parent_id ) {
	global $wpdb;
	$parent_post = get_post( $parent_id );

	$myposts = $wpdb->get_results(
		$wpdb->prepare(
			"SELECT * FROM $wpdb->posts
			WHERE (post_type like %s
			OR post_type = 'page')
			AND post_parent = 0
			AND post_status = 'Publish'
			AND post_name = %s
			AND id <> %d
			ORDER BY post_type ASC",
			'lfevent%',
			$parent_post->post_name,
			$parent_id
		)
	);

	return $myposts;
}

/**
 * Generates the "Other Events" menu item.
 *
 * @param int    $parent_id ID of top parent post of the Event.
 * @param string $background_style sets the solid or gradient background color.
 */
function lfe_get_other_events( $parent_id, $background_style ) {
	$related_events = lfe_get_related_events( $parent_id );
	$archive_events = lfe_get_archive( $parent_id );

	echo '<li class="page_item page_item_has_children other-events">';
	echo '<a>Other Events</a>';
	echo '<ul class="children" style="' . esc_html( $background_style ) . '">';
	echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">All Linux Foundation Events</a></li>';

	if ( $related_events ) {
		echo '<li class="other-events-header"><a>Related Events</a></li>';
	}

	foreach ( $related_events as $p ) {
		echo '<li><a href="' . esc_url( get_permalink( $p['ID'] ) ) . '">' . esc_html( get_the_title( $p['ID'] ) ) . '</a></li>';
	}

	if ( $archive_events ) {
		echo '<li class="other-events-header"><a>Previous Years</a></li>';
	}

	foreach ( $archive_events as $p ) {
		$year = substr( get_post_type( $p->ID ), 7 );
		if ( $year ) {
			echo '<li><a href="' . esc_url( get_permalink( $p->ID ) ) . '">' . esc_html( $year ) . '</a></li>';
		} else {
			echo '<li><a href="' . esc_url( get_permalink( $p->ID ) ) . '">Current year</a></li>';
		}
	}

	echo '</ul></li>';
}


/**
 * Theme support
 */
function lfe_setup_theme_supported_features() {

	// Add support for Block Styles.
	add_theme_support( 'align-wide' );

}

add_action( 'after_setup_theme', 'lfe_setup_theme_supported_features' );


/**
 * We need this function to remove links on parent menu items.
 *
 * @param string $query Args for the wp_list_pages funciton.
 * @param string $background_style sets the solid or gradient background color.
 */
function lfe_remove_parent_links( $query, $background_style ) {
	$pages = wp_list_pages( $query );
	$pages = explode( '</li>', $pages );
	$count = 0;
	foreach ( $pages as $page ) {
		if ( strstr( $page, '<ul class=\'children\'>' ) ) {
			$page = explode( '<ul class=\'children\'>', $page );
			$page[0] = preg_replace( '/(<[^>]+) href=".*?"/i', '$1 href="#"', $page[0] );
			if ( count( $page ) == 3 ) {
				$page[1] = preg_replace( '/(<[^>]+) href=".*?"/i', '$1 href="#"', $page[1] );
			}
			$page = implode( '<ul class=\'children\' style=\'' . esc_html( $background_style ) . '\'>', $page );
		}
		$pages[ $count ] = $page;
		$count++;
	}
	$pages = implode( '</li>', $pages );
	echo $pages; //phpcs:ignore
}

/**
 * Outputs the Sponsors page for an Event if a Sponsors page exists.
 *
 * @param int $parent_id ID of top parent post of the Event.
 */
function lfe_get_sponsors( $parent_id ) {
	global $post;
	if ( 'sponsors' === $post->post_name ) {
		return;
	}

	$post_types = lfe_get_post_types();

	$args = array(
		'post_type' => $post_types,
		'post_parent' => $parent_id,
		'name' => 'sponsors',
		'no_found_rows' => true,  // used to improve performance.
		'update_post_meta_cache' => false, // used to improve performance.
		'update_post_term_cache' => false, // used to improve performance.
	);

	$the_query = new WP_Query( $args );

	if ( $the_query->have_posts() ) {
		while ( $the_query->have_posts() ) {
			$the_query->the_post();
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<div class="entry-content">
					<?php the_content(); ?>
					<?php edit_post_link( __( '(Edit Sponsors)', 'foundationpress' ), '<span class="edit-link">', '</span>' ); ?>
				</div>
			</article>
			<?php
		}
	}
	wp_reset_postdata(); // Restore original Post Data.

}

/**
 * Enqueues scripts for lfe stuff.
 */
function lfe_scripts() {

	// https://instant.page/.
	wp_enqueue_script( 'instantpage', get_stylesheet_directory_uri() . '/dist/assets/js/' . foundationpress_asset_path( 'instantpage-1.2.2.js' ), array(), '1.2.2', true );
}

add_action( 'wp_enqueue_scripts', 'lfe_scripts' );

/**
 * Adds the module tag to the instant.page script.
 *
 * @param string $tag the tag.
 * @param string $handle the handle.
 */
function instantpage_script_loader_tag( $tag, $handle ) {
	if ( 'instantpage' === $handle ) {
		$tag = str_replace( 'text/javascript', 'module', $tag );
	}
	return $tag;
}

add_filter( 'script_loader_tag', 'instantpage_script_loader_tag', 10, 2 );
