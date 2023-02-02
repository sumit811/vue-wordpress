<?php
/**
 * Customize Rest API Response
 *
 * @package       CUSTOMIZERESTAPIRESPONSE
 * @author        Sumit
 * @version       1.0.0
 *
 * @wordpress-plugin
 * Plugin Name:   Customize Rest API Response
 * Plugin URI:    https://mydomain.com
 * Description:   This is some demo short description...
 * Version:       1.0.0
 * Author:        Sumit
 * Author URI:    https://your-author-domain.com
 * Text Domain:   customize-rest-api-response
 * Domain Path:   /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

// Include your custom code here.
add_action( 'rest_api_init', function () {
    // Registers a REST field for the /wp/v2/search endpoint.
    register_rest_field( 'search-result', 'excerpt', array(
        'get_callback' => function ( $post_arr ) {
            return "Nam vitae nisi ut metus faucibus scelerisque. Donec non justo vel magna porta rhoncus. Sed porttitor vel ipsum a ullamcorper. Nulla aliquet urna sed efficitur suscipit. Nunc scelerisque tortor dictum velit sodales molestie. Vivamus ut felis eget nisl interdum faucibus. Pellentesque faucibus, lectus vel ultrices rhoncus, mi ante feugiat dolor, quis mattis ex arcu a sem. Duis bibendum eu tellus a accumsan.

";
        },
    ) );
} );
///////////////////////////
function get_my_menu() {
    // Replace your menu name, slug or ID carefully
    return wp_get_nav_menu_items(12);
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2', 'menu', array(
        'methods' => 'GET',
        'callback' => 'get_my_menu',
    ) );
} );
//////////////////////////////////////////////////////////////////
if ( ! function_exists('Contact_us') ) {

    // Register Custom Post Type
    function Contact_us() {
    
        $labels = array(
            'name'                  => _x( 'Contact us', 'Post Type General Name', 'contact_us' ),
            'singular_name'         => _x( 'Contact us', 'Post Type Singular Name', 'contact_us' ),
            'menu_name'             => __( 'Contact us', 'contact_us' ),
            'name_admin_bar'        => __( 'Contact us', 'contact_us' ),
            'archives'              => __( 'Item Archives', 'contact_us' ),
            'attributes'            => __( 'Item Attributes', 'contact_us' ),
            'parent_item_colon'     => __( 'Parent Item:', 'contact_us' ),
            'all_items'             => __( 'All Items', 'contact_us' ),
            'add_new_item'          => __( 'Add New Item', 'contact_us' ),
            'add_new'               => __( 'Add New', 'contact_us' ),
            'new_item'              => __( 'New Item', 'contact_us' ),
            'edit_item'             => __( 'Edit Item', 'contact_us' ),
            'update_item'           => __( 'Update Item', 'contact_us' ),
            'view_item'             => __( 'View Item', 'contact_us' ),
            'view_items'            => __( 'View Items', 'contact_us' ),
            'search_items'          => __( 'Search Item', 'contact_us' ),
            'not_found'             => __( 'Not found', 'contact_us' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'contact_us' ),
            'featured_image'        => __( 'Featured Image', 'contact_us' ),
            'set_featured_image'    => __( 'Set featured image', 'contact_us' ),
            'remove_featured_image' => __( 'Remove featured image', 'contact_us' ),
            'use_featured_image'    => __( 'Use as featured image', 'contact_us' ),
            'insert_into_item'      => __( 'Insert into item', 'contact_us' ),
            'uploaded_to_this_item' => __( 'Uploaded to this item', 'contact_us' ),
            'items_list'            => __( 'Items list', 'contact_us' ),
            'items_list_navigation' => __( 'Items list navigation', 'contact_us' ),
            'filter_items_list'     => __( 'Filter items list', 'contact_us' ),
        );
        $capabilities = array(
            'read_post'             => 'read_post',
            'delete_post'           => 'delete_post',
            'read_private_posts'    => 'read_private_posts',
        );
        $args = array(
            'label'                 => __( 'Contact us', 'contact_us' ),
            'description'           => __( 'Contact us', 'contact_us' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'editor' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => true,
            'publicly_queryable'    => true,
            'capabilities'          => $capabilities,
            'show_in_rest'          => true,
        );
        register_post_type( 'contact_us', $args );
    
    }
    add_action( 'init', 'Contact_us', 0 );
    
    }
//////////////////////////////////////////////////////////////////
