  /*------------- TOP SLIDER -------------*/
// console.log(jQuery('.rev_slider').css('max-height'))
// jQuery('.top-slider').css('height', jQuery('.rev_slider').css('max-height'));





  /*------------- TOP SLIDER -------------*/


jQuery(document).ready(function($) {

if ($('.rev_slider').size() > 0) {
  var rev_id = $('.top-slider .rev_slider').attr('id');
      rev_id = rev_id.replace('rev_slider_','');
      rev_id = rev_id.replace('_2','');
  console.log(rev_id);
  var revapi_id = eval('revapi'+rev_id);

  console.log(revapi_id);

  revapi_id.bind("revolution.slide.onloaded",function (e) {

      $('.top-slider').animate({height:$('.rev_slider').height()},300, function(){$('.top-slider').height('auto')});

  });
}

if ($('.banner-builder').size() > 0) {
	setTimeout(function(){$('.top-slider').animate({height:$('.banner-builder').height()},700, function(){$('.top-slider').height('auto')})}, 1000);
	//$('.top-slider').css({height: 'auto'});
}


/*------------- Parallax slider -----------------*/

$('.page-id-3172 .top-slider, .page-id-3053 .top-slider').addClass('parallax-slider');
if ($('.parallax-slider').size() > 0) {

   var pxs = $('.parallax-slider'), pw_top;
   pxs.wrapInner('<div class="parallax-wrapper"></div>');
   pxs.find('.parallax-wrapper').wrapInner('<div class="parallax-container"></div>');
  function parallax_slider() {
   var pxs_offset = pxs.offset().top,
       pw = pxs.find('.parallax-wrapper'),
       pc = pw.find('.parallax-container'),
       pw_height = pw.children('div').height(),
       pw_cap = pw.find('.tp-caption'),
       pw_cap_o;
   pw_h = ($(window).scrollTop() - pxs_offset > 0) ? pw_height - ($(window).scrollTop()-pxs_offset)*2 : pw_height;
   pw_cap_o = pw_h/pw_height;
   pw_cap.css('opacity', pw_cap_o);
   pw_top = ($(window).scrollTop() > pxs_offset) ? -($(window).scrollTop()-pxs_offset) : pxs_offset-$(window).scrollTop();
   pw.css({
            position:'relative',
            height: pw.children('div').height()
         });
   pc.stop().css({
                 position:'fixed',
                 width:'100%',
                 left:0,
                })
            .animate({
                      top:pw_top,
                      height: pw_h
                      },0);


   console.log('off - ' + $(window).scrollTop(), pxs_offset, pw_top);
   $("html").niceScroll().scrollstart(function(info){
      console.log('sss')
  })
 }
 $(window).scroll(function(){
  parallax_slider();
});

}


/*------------- Parallax slider -----------------*/





	/*----------------<RESIZE COMPLITE>----------------*/
    jQuery.fn.resizeComplete = function(func, ms){
        var timer = null;
        this.resize(function(){
            if (timer)
                {
                clearTimeout(timer);
                }
            timer = setTimeout(func,ms);
        });
    }
	/*----------------</RESIZE COMPLITE>----------------*/

  /*------------- Widget OUR STUFF -------------

var ost = 500;
jQuery('.widget_out_stuff-container').each(function(){
  var cont = jQuery(this);
  setTimeout(
    function(){
      cont.animate({opacity:1},300);
    },ost);
  ost+=150;
});
*/

  /*------------- Widget OUR STUFF -------------*/


  /*---------- Sidebar Posiyion ----------*/

  function sidebarPosition(){
    if($('.media_for_js').css('z-index') == 479) {
      $('aside.left-sidebar').insertAfter('.post-area');
    } else {
      $('aside.left-sidebar').insertBefore('.post-area');
    }
    console.log($('.media_for_js').css('z-index'));
  }
  sidebarPosition();
  /*---------- /Sidebar Posiyion ----------*/






	/*----------------<COLUMN>----------------*/
	jQuery(function(){
		var $column_post_media = jQuery('.column_post-media'),
		$column = jQuery('.template-blog-3 .column');
		$column_post_media.css('height', $column_post_media.width()*0.5);
		$column_post_media.find('iframe').css('height', $column_post_media.width()*0.5);
		$column.isotope({
			itemSelector: '.column_post',
			resizable: true,
			animationEngine: 'best-available',
			animationOptions: {
				duration: 800,
				easing: 'swing',
				queue: false
			}
		});
	});
	jQuery(window).resizeComplete(function(){
		var $column_post_media = jQuery('.column_post-media'),
		$column = jQuery('.template-blog-3 .column');
		$column_post_media.css('height', $column_post_media.width()*0.5);
		$column_post_media.find('iframe').css('height', $column_post_media.width()*0.5);
		$column.isotope({
			itemSelector: '.column_post',
			resizable: false,
			animationEngine: 'best-available',
			animationOptions: {
				duration: 800,
				easing: 'swing',
				queue: false
			}
		});

     sidebarPosition();

	}, 500);
	/*----------------</COLUMN>----------------*/

  /*--------------- CONTACT FORM ---------------*/

  var inputs = jQuery('.input-field input, .input-field textarea');
  inputs.focus(function(){
    jQuery(this).parents('.input-field').addClass('focus');
  });
  inputs.blur(function(){
    jQuery(this).parents('.input-field').removeClass('focus');
  });

  jQuery('#searchform input[type=text]').focus(function(){
    jQuery(this).parents('form').addClass('focus');
  });
  jQuery('#searchform input[type=text]').blur(function(){
    jQuery(this).parents('form').removeClass('focus');
  });

  jQuery('.wysija-input').focus(function(){
    jQuery(this).addClass('focus');
  });
  jQuery('.wysija-input').blur(function(){
    jQuery(this).removeClass('focus');
  });
  /*--------------- CONTACT FORM ---------------*/

	/*----------------<POST>----------------*/
	jQuery(window).load(function(){
		var $item_con_t1_l = jQuery('.post.left .item-con-t1'),
		$item_con_t1_r = jQuery('.post.right .item-con-t1'),
		$item_con_t1_c = jQuery('.post.center .item-con-t1');
		$item_con_t1_l.css('height', $item_con_t1_l.width() * 0.77);
		$item_con_t1_r.css('height', $item_con_t1_r.width() * 0.77);
		$item_con_t1_c.css('height', $item_con_t1_c.width()/2);
	});
	jQuery(window).resize(function(){
		var $item_con_t1_l = jQuery('.post.left .item-con-t1'),
		$item_con_t1_r = jQuery('.post.right .item-con-t1'),
		$item_con_t1_c = jQuery('.post.center .item-con-t1');
		$item_con_t1_l.css('height', $item_con_t1_l.width() * 0.77);
		$item_con_t1_r.css('height', $item_con_t1_r.width() * 0.77);
		$item_con_t1_c.css('height', $item_con_t1_c.width()/2);
	});
	/*----------------</POST>----------------*/

	/*----------------<ACCORDION>----------------*/
	jQuery('.widget_accordion .button, .widget_accordion header').click(function () {
    if (!jQuery(this).parents('.item').hasClass('active')) {
			jQuery(this).parent().find('.item-container').slideDown(500);
			jQuery(this).parents('.item').addClass('active');
			jQuery(this).find('span:first').fadeOut(300);
    } else {
			jQuery(this).parent().find('.item-container').slideUp(500);
			jQuery(this).parents('.item').removeClass('active');
			jQuery(this).find('span:first').fadeIn(300);
    }
	});
	/*----------------</ACCORDION>----------------*/

		/*----------------<HEADLINE>----------------*/


    var summar_width = 0;
    var menu_height = jQuery('.page-header .menu>li>a, .page-header .menu>ul>li>a').size() * 44;
    jQuery('.page-header .menu>li>a, .page-header .menu>ul>li>a').each(function(){
      summar_width += jQuery(this).width()+65;
    })

	function headline(){
     var outer_width = jQuery('.page-header .menu').parents('.container').width();
		if (outer_width+10 >  summar_width)
		{
			jQuery('body').removeClass('mobile');

			jQuery('.headline').css({'margin-bottom': '0'});

       jQuery('header  .menu').removeAttr('style');
	   jQuery('.menu .sub-menu, .menu .children').removeAttr('style');
		}
		else
		{
			jQuery('.menu .sub-menu, .menu .children').animate({height:"hide"},0);
			jQuery('body').addClass('mobile');
			jQuery('.absolute').css({'position': 'relative', 'top': '0'});

			jQuery('.headline').css({'margin-bottom': '-54px'});
			// jQuery('.header-image').css({'height': '54px'});
       jQuery('header  .menu').css('height','0');
		}

	}

	// headline();
	// setTimeout(headline, 500);
	// jQuery(window).resize(function(){
	// 	headline();
	// });

  jQuery('#menu-btn').click(function() {
   if (jQuery('.menu').height() > 0) {
     jQuery('.menu').animate({height:0},300).removeClass('opened');
   } else {
     jQuery('.menu').animate({height:menu_height},300, function() { jQuery(this).removeAttr('style').addClass('opened')});
    }
    return false;
  });

  // jQuery('.menu>li').click(function() {
  //    jQuery(this).children('.sub-menu').animate({height:'toggle'},300);
  //  // if (jQuery(this).children('.sub-menu').height() > 0) {
  //  //   jQuery(this).children('.sub-menu').animate({height:0},300);
  //  // } else {
  //  //   jQuery(this).children('.sub-menu').animate({height:menu_height},300, function() { jQuery(this).removeAttr('style')});
  //  //  }
  //   return false;
  // });
	/*----------------</HEADLINE>----------------*/

	/*----------------<ITEM CONTAINER TYPE1>----------------*/
    var cont_i = 500;
    function item_cont_t1() {
        $('.container-t1-margin').each(function(){

            jQuery(this).css('height', Math.ceil(jQuery(this).parent().parent().height())-8+'px');
            var ratio_cont = jQuery(this).width()/jQuery(this).height();
            var $img = jQuery(this).find('img');
            var $image_links = jQuery(this).find('.image-links');
            var $gallery_image_links = jQuery(this).find('.gallery-image-links');
            var $widget_recent_posts_2_fac = jQuery(this).find('.widget_recent_posts_2-fac');
            var ratio_img = $img.width()/$img.height();
            $image_links.css('margin-left', (jQuery(this).width()-$image_links.width())/2+'px');
            $gallery_image_links.css('margin-left', (jQuery(this).width()-$gallery_image_links.width())/2+'px');
            $widget_recent_posts_2_fac.css('margin-left', (jQuery(this).width()-$widget_recent_posts_2_fac.width())/2+'px');
            if (ratio_cont > ratio_img)
            {
                $img.css({'width': '100%', 'height': 'auto', 'top': -50*(1/ratio_img-1/ratio_cont)*ratio_cont+'%'});
            }
            else if (ratio_cont < ratio_img)
            {
                $img.css({'width': 'auto', 'height': '100%', 'left': -50*(ratio_img-ratio_cont)/ratio_cont+'%'});
            }
            $img.css('display','block');

        });

        jQuery('.gallery-container .gallery > article, .item-con-t1').each(function(){
          var cont =jQuery(this);
		  var sp = (!cont.is('.trans03linear')) ? 0 : 500;
          setTimeout(function(){
              cont.animate({opacity:1},sp);
            },cont_i);
            cont_i += 100;
        });
    }

    jQuery(window).load(function(){
        //setTimeout(item_cont_t1, 0);
        setTimeout(item_cont_t1, 500);
			if ($('.sc-highlight').size() > 0) {
			$(window).scrollTop($(window).scrollTop()+1);
			setTimeout(function(){
				$(window).scrollTop($(window).scrollTop()-1);
			}, 3000);
		}
    });
    jQuery(window).resize(function(){
        item_cont_t1();
    });
    jQuery(window).load(function(){
        //setTimeout(function(){ $(window).resize()}, 500);
    });
	/*----------------</ITEM CONTAINER TYPE1>----------------*/

	/*----------------<GALLERY>----------------*/
	jQuery(function(){
		jQuery('.gallery-container .gallery .item-con-t1').each(function () {
			jQuery(this).css({'height': Math.ceil(jQuery(this).width() *0.7), 'margin-bottom': jQuery(this).css('margin-right')});
		});
		var $gallery = jQuery('.gallery-container .gallery'), $optionSets = jQuery('.gallery-filters li'), $optionLinks = $optionSets.find('a');
		$gallery.css('display', 'block');
		$gallery.isotope({
			itemSelector : '.item-con-t1',
			resizable: false,
			animationEngine: 'best-available',
			animationOptions: {
				duration: 800,
				easing: 'swing',
				queue: false
			}
		});
		$optionLinks.click(function(){
			var $this = jQuery(this), selector = $this.attr('data-filter');
			if ( $this.hasClass('selected') ) {
				return false;
	        }
			$optionSets.find('.selected').removeClass('selected');
	        $this.addClass('selected');
			$gallery.isotope({ filter: selector });
			return false;
		});
	});
	/*----------------</GALLERY>----------------*/


	/*----------------<Back To Top>----------------*/
    $('#back_to_top').fadeOut(300);
    $(window).load().scroll(function(){
        if($(window).scrollTop() > 100){
            $('#back_to_top').fadeIn(300);
        }  else {
            $('#back_to_top').fadeOut(300);
        }
    });
    $('#back_to_top').click(function(){
        $('html,body').animate({scrollTop:0},1000,'easeInOutQuart');
        return false;
    });

	/*----------------</Back To Top>----------------*/

	/*----------------<PRETTY PHOTO>----------------*/
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
		slideshow: 5000, /* false OR interval time in ms */
		autoplay_slideshow: false, /* true/false */
		opacity: 0.80, /* Value between 0 and 1 */
		show_title: true, /* true/false */
		allow_resize: true, /* Resize the photos bigger than viewport. true/false */
		default_width: 500,
		default_height: 344,
		counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
		theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		horizontal_padding: 20, /* The padding on each side of the picture */
		hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
		wmode: 'opaque', /* Set the flash wmode attribute */
		autoplay: true, /* Automatically start videos: True/False */
		modal: false, /* If set to true, only the close button will close the window */
		deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
		overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
		keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
		changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
		callback: function(){}, /* Called when prettyPhoto is closed */
		ie6_fallback: true,
		social_tools: ''
	});
	/*----------------</PRETTY PHOTO>----------------*/

  /*------------------- Fixed Header ---------------*/

  if($('body').hasClass('sticky-menu-on')) {
    setTimeout(function(){$('.headerstyle2 .logo img, .headerstyle4 .logo img').height($('.headerstyle2 .logo img, .headerstyle4 .logo img').height())  },500);
    setTimeout(function(){$('.headerstyle2 .logo img, .headerstyle4 .logo img').css('opacity','1')} ,800);
    jQuery(window).scroll(function() {
      var st;

		if ($('body').hasClass('headerstyle2')) {
			st=$('.preheader').height();
		} else if ($('body').hasClass('headerstyle4')) {
			st=3;
		} else {
			st=100;
		}

      if(jQuery(window).scrollTop() > st) {
          jQuery('body').addClass('fixed-header');


          jQuery('.page-header .menu-bg').addClass('fixed');

      } else {
          jQuery('body').removeClass('fixed-header');


          jQuery('.page-header .menu-bg').removeClass('fixed');

      }
    });
  }

  /*------------------- Fixed Header ---------------*/

  /*---------- Banner Loading -----------*/
  if($('.banner-wrapper').size() > 0) {
    var banner = $('.banner-wrapper');
    setTimeout(function(){
      banner.find('#canvasLoader').hide();
      banner.find('.banner-overlay').animate({opacity:0},500);
    },4000);


    var cl = new CanvasLoader('canvasloader-container');
    cl.setShape('spiral'); // default is 'oval'
    cl.setDiameter(30); // default is 40
    cl.setSpeed(4); // default is 2
    cl.show(); // Hidden by default
  }
  /*---------- Banner Loading -----------*/


/*--------------------- Animated Pictures ---------------*/

var anim_block, anim_elem = $('.animated'), gn = 1;

anim_elem.each(function(){
  //jQuery(this).parents('.wrapper').addClass('animated-block');
  var  el_scr = $(this).offset();
  if($('.group1').size()>0) {
	var prev_el = $('.group'+(gn-1)).offset();
		prev_el_top = prev_el.top;
	} else 	{
		prev_el_top = 0;
	}
  if (el_scr.top == prev_el_top) {
  $(this).addClass('group'+(gn-1));
  } else {
  $(this).addClass('group'+gn);
    gn++;
  }
	return gn;
});

	for (var g = 0; g < gn; g++) {

  var i=0;
  $('.group' + g).each(function(){
    $(this).css({
        '-webkit-transition-delay': i+'s',
        '-moz-transition-delay': i+'s',
        '-o-transition-delay': i+'s',
        '-ms-transition-delay': i+'s',
        'transition-delay': i+'s'
    });
    console.log(i);
    i=i+0.15;
  });
}


  function anim_images() {

  anim_elem.each(function(){

  var block_offset = $(this).offset();
    if ( $(window).scrollTop() + window.innerHeight > block_offset.top+$(this).height()/2) {
      $(this).addClass('animation_started');
     // var el = $(this).find('.animated');
      setTimeout(function(){
        $(this).removeClass('animated').removeAttr('style');
      }, 3000);
      console.log($(window).scrollTop(), window.innerHeight,  $(window).scrollTop() + window.innerHeight, block_offset.top+$(this).height()/2);
    }
  });


}
  $(window).scroll(function() {
    anim_images();
  });
  $(window).load(function() {
    setTimeout(anim_images,300);
	setTimeout(function(){  $('.flexslider').animate({opacity:1},500);},300)
  });


/*--------------------- Animated Pictures ---------------*/



/*--------------------- REVOLUTION SLIDER---------------*/

$('.rev-next').click(function(){
    $('.tp-rightarrow').click();
    return false;
});
$('.rev-prev').click(function(){
    $('.tp-leftarrow').click();
    return false;
});

/*--------------------- REVOLUTION SLIDER---------------*/

/*---------------------- SKILLS ANIMATION ----------------------*/

$('.member-skills span').each(function(){
  var skill_width = $(this).attr('style').match(/\d+/)[0];
  $(this).width(0).css('opacity','1').animate({width:skill_width+'%'},2000);
});

/*---------------------- SKILLS ANIMATION ----------------------*/


/*----------------- MENU -----------------------------*/

$('.menu li').each(function(){
	if ($(this).children('.sub-menu, .children').size()>0) {
		$(this).append('<span class="icon-angle-down"></span>').children('a').addClass('has-sub-menu');
		$(this).children('.sub-menu, .children').animate({height:"hide"},0);
	}
});

$('.menu li .has-sub-menu').click(function(){
  if($('#menu-btn').css('display') == 'inline-block') {
  	if ($(this).parent('li').hasClass('open')){
  		$(this).siblings('.sub-menu, .children').animate({height:"hide"},300);
  		$(this).parent('li').removeClass('open');
   	} else {
  		$(this).siblings('.sub-menu, .children').animate({height:"show"},300);
  		$(this).parent('li').addClass('open');
  	}
  	return false;
  } else {

  }
});

$('.menu li').hover(function(){
  if($('#menu-btn').css('display') == 'none') {
    $(this).children('ul').fadeIn(200);
  }
}, function(){
  if($('#menu-btn').css('display') == 'none') {
    $(this).children('ul').fadeOut(200);
  }
})


/*------------------- MENU -------------------*/


/*------------------------------- IE TRANSITIONS ----------------------------*/

	$('.no-csstransitions .item-con-t1').hover(function(){
		$(this).find('.visible-on-hover').stop().animate({opacity:1},400);
	}, function(){
		$(this).find('.visible-on-hover').stop().animate({opacity:0},400);
	});

/*------------------------------- IE TRANSITIONS ----------------------------*/

$('.top-compact, .bottom-compact').each(function(){
  $(this).removeAttr('style');
  var c = $(this).find('.z-tab').size();
  $(this).find('.z-tab').width(100/c+'%');
});

$('.widget_out_stuff2 .item-con-t1 header h2').each(function(){
    var me = $(this);
    me.html( me.text().replace(/(^\w+)/,'<b>$1</b>') );
  });



/*--------------------- Control Panel -------------------*/

$('#control-panel select').change(function(){
   window.location.href=$(this).find('option:selected').val();
});


/*------------- SHOP ----------------*/

$('.product > .button').wrap('<div class="product-bottom"></div>');
$('.product-bottom').each(function(){
  $(this).append('<a class="product-details" href="' + $(this).parents('.product').children('a').attr('href') +'">Details</a>');
});
$('.woocommerce-ordering').append('<span>Sort by</span><span class="icon-angle-down"></span>');
$('#calc_shipping_country').after('<span class="icon-angle-down"></span>');

$('.widget_shopping_cart').prepend('<a id="cart_button"></a>');

var cart = $('.widget_shopping_cart_content');
 $('.widget_shopping_cart_content').stop().animate({opacity:0},500, function(){$(this).hide()});
$('.widget_shopping_cart').hover(function(){
  $('.widget_shopping_cart_content').stop().show().animate({opacity:1},500);
  console.log('show');
}, function(){

  $('.widget_shopping_cart_content').stop().animate({opacity:0},500, function(){$(this).hide()});
  console.log('hide');
});
var addi;
function if_added(item) {
    if (item.hasClass('added')) {
        console.log('added');
        clearInterval(addi);
        $('body').append('<div id="added_item"><img src="'+ item.parents('.product').find('.attachment-shop_catalog').attr('src') +'" alt=""/><b>"'+ item.parents('.product').find('h3').html() +'"</b> was added to the cart. </div>');
        $('#added_item').fadeIn(500);
        setTimeout(function(){
          $('#added_item').animate({opacity:0,marginTop:20},500, function(){$(this).remove()});
        },2000)
      } else {
        console.log(item.attr('class'));
      }

  }

$('.add_to_cart_button').each(function(){
  var add_btn = $(this);
  $(this).click(function(){
    addi = setInterval( function() {if_added(add_btn)},100);
  })

});

/*------------- Tweets in the footer ----------------*/

$('#recent-tweets').flexslider({
	animation: "fade",
	controlNav: false,
	directionNav: false
});

$('.prev-t3').click(function(){
	$('#recent-tweets').flexslider("prev");
});

$('.next-t3').click(function(){
	$('#recent-tweets').flexslider("next");
});


/*------------ Rev slider nav ------------*/
var bul;
setTimeout(function(){
  bul = $('.tp-bullets .bullet');
  if ($('.revslider-nav2 li').size()>0) {
  $('.tp-bullets').addClass('nobullets');
}
  return bul;
},3000);

$('.revslider-nav2 li').click(function(){
  var bul_num = $(this).index();
  bul.eq($(this).index()).click();
});

/*------ Gmap -----*/

$(window).load(function(){
  $('.wpgmappity_container').parent('div').width('100%');
});

/*----------- Mega Menu -----------*/

function mega_menu(){
  var mega_m = $('li.mega-menu > .sub-menu');
  mega_m.each(function(){
    var mm = $(this);

    mm.css({
      display:'block',
      visibility:'hidden'
    });

    var m_w = mm.children('li').size()*mm.children('li').width();
    var mw_l = -m_w/2;
    mm.css({
      display:'none',
      visibility:'visible',
      marginLeft: mw_l
    });

    mm.width(m_w);
  });
}

mega_menu();

/*----------- Mega Menu -----------*/




  /*------------- Flexslider --------------*/

function flexsliderInit() {
  $('.flexslider').each(function(){

    if(!$(this).parents().is('.top-slider')) {
    $(this).find('.flex-control-nav').remove();
    var iCount = 0, scrWidth = $('.media_for_js').css('z-index');

      if (scrWidth == 479) { iCount = 1} else if (scrWidth == 767 || scrWidth == 639) {iCount = 2} else {
			if ($(this).hasClass('widget_our_clients-container')) {
			  iCount = 5;
			} else if ($(this).hasClass('featured-project-slider')) {
			  iCount = 4;
			} else {
			 iCount = 3
		   }
      }

    var selector = ($(this).hasClass('fs-inner')) ? '.slides-inner > li' : '.slides > li';
    var slideshow = ($(this).hasClass('fs-inner')) ? true : false;
    if ($(this).hasClass('fs-inner') || $(this).hasClass('images-slider') || $(this).hasClass('widget_testimonials-container') || $(this).parent('div').hasClass('flexslider-testimonials')  || $(this).parent('div').hasClass('portfolio-gallery') || $(this).parents('article').hasClass('format-gallery')) {
		 iCount = 1;
	}

    console.log(selector)
    var cnav = ($(this).hasClass('control-nav')) ? true : false;
    $(this).removeData("flexslider").flexslider({
                      animation: 'slide',
                      selector: selector,
                      animationLoop: true,
                      itemWidth: 200,
                      itemMargin: 0,
                      smoothHeight: true,
                      slideshow: slideshow,
                      controlNav: cnav,
                      directionNav: false,
                      slideshowSpeed: 7000,
                      minItems: iCount,
                      maxItems: iCount,
					  startAt: 0,
                      move: 1
      });
      $(this).find('.flex-viewport').each(function(){
         if ($(this).find(selector).size() == 0) { $(this).addClass('rem').hide()}
      })
      setTimeout(function(){$('.flex-viewport.rem').remove()},1000);
      console.log('c-'+iCount);
    }
    });


  }



  $(window).resizeComplete(function(){
    flexsliderInit();
    setTimeout(item_cont_t1, 300);
  },400);
  $(window).load(function(){
    flexsliderInit();
  });



  // /*-------- Nice scroll ---------*/




    $("html").niceScroll({
            scrollspeed: 60,
            mousescrollstep: 35,
            cursorwidth: 12,
            cursorborder: 0,
            cursorcolor: '#7d7d7d',
            cursorborderradius: 12,
            autohidemode: false,
            horizrailenabled: false,
            zindex : 300,
            hwacceleration: false
    });



  // /*-------- Nice scroll ---------*/

});
