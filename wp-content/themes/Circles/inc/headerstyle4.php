<?php
/**
 * Header style 4
 *
 * @package circles
 * @since circles 1.0
 */
?>
<header class='page-header'>
	<div class='wrapper dark-menu'>
		<div class='container'>
			<div class='grid_12'>
				<div class='logo'>
					<?php if (ot_get_option('alternative_logo_url')): ?>
						<?php $logo = '<img src="'.ot_get_option('alternative_logo_url').'" alt="'.esc_attr( get_bloginfo( 'name', 'display' ) ).'">'; ?>
					<?php else: ?>
						<?php $logo = '<img src="'.get_bloginfo('template_directory').'/images/logo.png" alt="'.esc_attr( get_bloginfo( 'name', 'display' ) ).'">'; ?>
					<?php endif;?>
					<a href='<?php echo home_url( '/' ); ?>' title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php echo $logo; ?></a>
				</div>
				<a id="menu-btn" href="#"></a>
				<div id="search-icon">
					<i></i>
					<form role="search" method="get" id="searchform" action="#" class="">
						<input type="text" value="" name="s" placeholder="Search" id="s">
					</form>
				</div>
				<?php
				$defaults = array(
					'container' => 'nav',
					'theme_location' => 'primary',
					'depth' => 3,
					'walker' => new ts_walker_nav_menu
				);
				wp_nav_menu($defaults);
				?>
			</div>
		</div>
	</div>
		<?php
		if (!get_post_meta(get_the_ID(), 'post_slider', true)):
			get_template_part('inc/top');
		endif;
		?>
	<div class='absolute'></div>
</header>