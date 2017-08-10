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

	<title><?php bloginfo( 'name' ); ?> &ndash; Senior Developer &amp; Designer from Bournemouth, UK</title>

	<?php wp_head(); ?>

	<?php get_template_part('favicons'); ?>

	<script>
		window.__PRELOADED_STATE__ = {
			siteTitle: '<?php echo get_bloginfo('name') ?>',
			siteDescription: '<?php echo html_entity_decode(get_bloginfo( 'description', 'display' )) ?>',
			siteURL: '<?php echo network_site_url('/') ?>'
		};
	</script>

	<script src="https://use.typekit.net/iuh0oey.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>

	<script defer>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-5286206-2', 'auto');
		ga('send', 'pageview');
	</script>
</head>

<body <?php body_class(); ?>>

<div class="tc-app">
	<a class="skip-link sr-only" href="#content"><?php esc_html_e( 'Skip to content', 'tc-portfolio-v6' ); ?></a>

	<header id="tc-header"></header>

	<div id="content">
