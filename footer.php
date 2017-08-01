<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package TC_Portfolio_v6
 */

?>

	</div><!-- #content -->

	<footer class="footer text-center">
		<div class="container-fluid">
			<?php dynamic_sidebar( 'footer-1' ); ?>

			<ul class="footer__social list-unstyled">
				<li class="footer__item footer__item--social list-inline-item">
					<a class="footer__link" href="https://uk.linkedin.com/in/tomchristian1">LinkedIn</a>
				</li>
				<li class="footer__item footer__item--social list-inline-item">
					<a class="footer__link" href="https://twitter.com/tomchristian91">Twitter</a>
				</li>
				<li class="footer__item footer__item--social list-inline-item">
					<a class="footer__link" href="https://github.com/tctc91">Github</a>
				</li>
			</ul>

			<div class="footer__credits">
				<a class="footer__link footer__link--credit" href="https://github.com/tctc91/angular2-wordpress-portfolio">
					&copy; Tom Christian &ndash; Created with ReactJS &amp; Wordpress
				</a>
			</div>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
