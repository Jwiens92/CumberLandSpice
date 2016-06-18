/**
 * Shortcodes scripts
 *
 */
jQuery(document).ready(function() {

	//scroll to top
	jQuery('.sc-divider-scroll').click(function(){
        jQuery('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

	jQuery('.sc-skillbar .sc-skillbar-bar').each(function(){
	    per = jQuery(this).attr('data-percentage');
	    color = jQuery(this).attr('data-color');
		color_style = '';
		if (color != "")
		{
			color_style = 'background-color: ' + color;
		}
		var sb_per = (jQuery(this).parents('.sc-skillbar').hasClass('sc-skillbar-style-2')) ? '<span></span>' : '';
		jQuery(this).append('<div style="width: 0; ' + color_style + '">'+sb_per+'</div>');
	    jQuery(this).children('div').delay(1000).animate({ "width" : per + "%"},
	    	{
	    		step:function(){

  						var skill_width = jQuery(this).attr('style').match(/\d+/)[0];
	    					jQuery(this).find('span').html(parseInt(skill_width)+1+'%');
	    				 },
	    		duration:  per*30
	  		});
	});

	jQuery('.sc-skillbar-vertical .sc-skillbar-bar').each(function(){
	    per = jQuery(this).attr('data-percentage');
		color = jQuery(this).attr('data-color');
		color_style = '';
		if (color != "")
		{
			color_style = 'background-color: ' + color;
		}
		jQuery(this).append('<div style="width: 25px; height: 0px; ' + color_style + '"></div>');
	    jQuery(this).children('div').delay(1000).animate({ "height" : per + "%"}, per*30);
	});
});
