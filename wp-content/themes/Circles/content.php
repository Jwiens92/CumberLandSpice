<?php
/**
 * The default template for displaying content
 *
 * @package circles
 * @since circles 1.0
 */

$featured_image_align = ts_get_featured_image_align();
?>
<article class='post <?php echo (get_post_format() ? 'format-'.get_post_format() : '');?> <?php echo $featured_image_align; ?>'>
	<header>
		<a href='<?php the_permalink();?>'><h2><?php the_title(); ?></h2></a>	
	</header>
	<?php get_template_part( 'inc/post-info' ); ?>
	<div class="post-body clearfix">
		<?php if ( !is_search() && has_post_thumbnail() ) : // display thumbnail if not Search ?>
			<div class="previewDiv" style="background: url(<?php print wp_get_attachment_url( get_post_thumbnail_id($post->ID, 'thumbnail') ) ?>) no-repeat center;
				background-size: <?php
				if(get_post_meta($post->ID, 'scale')[0] == '')
					print "cover";
				else
					print get_post_meta($post->ID, 'scale')[0];
				?>">
			</div>
		<?php endif; ?>
		<div class='post-body-text'>
			<p><?php

				ts_the_excerpt_theme('long');
				?></p>
		</div>
		<a href='<?php the_permalink();?>' title="<?php esc_attr_e( get_the_title() ); ?>" class='sc-button grey-grad'><?php _e( 'read more', 'circles' ); ?></a>
	</div>
</article>

