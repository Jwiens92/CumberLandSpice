<?php
/*
 * Custom Header version 1.0
 * last edited by: Joshua Wiens
 * 12/05/15
 */
?>

<?php

$args = array(
    'post_status' => 'publish',
    'post_type' => 'homeslider',
    'orderby' => 'menu_order',
    'order' => 'ASC'
);
$slides = new WP_Query($args);
?>

<div class="sliderWrap">
    <div class="container-fluid">
        <div class="row">
            <div id="carousel1" class="carousel" data-ride="carousel" data-interval="<?php print getTimeInterval(); ?>">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <?php $count=0; ?>
                    <?php foreach($slides->posts as $post): ?>
                        <li data-target="#carousel1" data-slide-to="<?php print $count ?>" class="<?php if($count ==0){print "active";}?>" ></li>
                        <?php $count++; ?>
                    <?php endforeach ?>
                    <?php $count=0; ?>
                </ol>
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                    <?php $count=0; ?>
                    <?php foreach($slides->posts as $post): ?>
                        <div class="item <?php if($count ==0){print "active";}?>">
                            <div class="col-lg-12 sliderBackground" style="background: url(<?php print $post->background ?>) no-repeat <?php print $post->position ?>;">
                                <div class="row bannerText">
                                    <div class="bannerWrap paddingTop col-lg-4 col-lg-offset-7 col-md-5 col-md-offset-6 col-sm-6 col-sm-offset-5 col-xs-10 col-xs-offset-1">
                                        <h1 style="color:<?php print $post->color ?>; font-size: <?php print $post->titlefont?>px;" class="centerAll"><?php print $post->title?></h1>
                                        <h4 style="color:<?php print $post->color ?>; font-size: <?php print $post->textfont?>px;" class="centerAll"><?php print $post->textOverlay?></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php $count++; ?>
                    <?php endforeach?>
                    <?php $count=0; ?>
                </div>
                <!-- Controls -->
                <a class="left carousel-control" href="#carousel1" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a class="right carousel-control" href="#carousel1" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div> <!-- Carousel -->
        </div>
    </div>
</div>
