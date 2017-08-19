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
		<div class="container">

			<div class="footer__contact text-center">
				<i class=""></i> Interested in working with me?
				<a class="btn btn-sm btn-primary footer__link footer__link--contact" href="mailto:hello@elseif.io">Let's chat</a>
			</div>

			<ul class="footer__social list-unstyled">
				<li class="footer__item footer__item--social list-inline-item">
					<a class="footer__icon footer__icon--linkedin" href="https://uk.linkedin.com/in/tomchristian1">
						<i class="icon-linkedin"></i>
						<span class="sr-only">LinkedIn</span>
					</a>
				</li>
				<li class="footer__item footer__item--social list-inline-item">
					<a class="footer__icon footer__icon--github" href="https://github.com/tctc91">
						<i class="icon-github"></i>
						<span class="sr-only">Github</span>
					</a>
				</li>
				<li class="footer__item footer__item--social list-inline-item">
					<a class="footer__icon footer__icon--twitter" href="https://twitter.com/tomchristian91">
						<i class="icon-twitter"></i>
						<span class="sr-only">Twitter</span>
					</a>
				</li>
				<li class="footer__item footer__item--social list-inline-item">
					<a class="footer__icon footer__icon--medium" href="https://medium.com/@tomchristian91">
						<i class="icon-medium"></i>
						<span class="sr-only">Medium</span>
					</a>
				</li>
			</ul>

			<div class="footer__credits">
				<span class="footer__link footer__link--credit">
					<a class="footer__link footer__link--copyright" href="<?php echo get_home_url(); ?>">&copy; Tom Christian</a> &ndash; <a class="footer__link footer__link--github" href="https://github.com/tctc91/portfolio-v6">Created with React &amp; Wordpress API</a>
				</span>
				<span class="footer__link footer__link--credit footer__link--video">Footage from <a href="https://www.youtube.com/channel/UC0BcBb8gTlHW6_EtRqwKY7g" target="_blank" rel="external">The Soan Age &rarr;</a></span>
			</div>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>

<script src="http://localhost:8080/app/dist/app.js"></script>

</body>
</html>
