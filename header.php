<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package TC_Portfolio_v6
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>

	<script>
		window.__PRELOADED_STATE__ = {
			siteTitle: '<?php echo get_bloginfo('name') ?>',
			siteDescription: '<?php echo get_bloginfo( 'description', 'display' ) ?>',
			siteURL: '<?php echo network_site_url('/') ?>'
		};
	</script>

	<script src="https://use.typekit.net/iuh0oey.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
</head>

<body <?php body_class(); ?>>

<div class="tc-app">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'tc-portfolio-v6' ); ?></a>

	<header id="tc-header"></header>

	<div id="content">
