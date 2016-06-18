<?php
/**
 * Shortcode Title: Icon
 * Shortcode: icon
 * Usage: [icon type="icon-bullhorn" size="icon-large" color="" title=""]Your content here...[/icon]

 */
add_shortcode('icon', 'ts_icon_func');

function ts_icon_func( $atts, $_content = null ) {

	extract(shortcode_atts(array(
		'icon' => 'img-1',
		'title' => '',
		'content' => '',
		'animation' => '',
		'url' => '',
		'target' => '_self'
	),
	$atts));

	$animation_class = '';
	switch ($animation) {
		case 'showup':
			$animation_class = 'animated';
			break;
	}

	$html = '
		<article class="why-choose-us">
			<a '.(empty($url) ? '' : 'href="'.$url.'" target="'.$target.'"').'>
				<div class="why-choose-us-img '.$icon.' '.$animation_class.'">
					<span></span>
					<span class="tran03slinear"></span>
					<span></span>
				</div>
				<h2 class="tran03slinear">'.$title.'</h2>
			</a>
			'.$content.'
		</article>';
	return $html;

}