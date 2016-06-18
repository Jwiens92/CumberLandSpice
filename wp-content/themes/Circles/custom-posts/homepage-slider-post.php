<?php

$homeSlider = new customPostType('homeslider', 'Home Page Slider', 'Home Page Slider', array('title','page-attributes'));
$sliderContent = new MetaBox('slidercontent', 'Slider Content', 'homeslider');
$sliderContent->addField(array('title' => 'Background Image', 'name' => 'background', 'type' => MetaBox::MEDIA_FIELD));
$sliderContent->addField(array('title' => 'Background Image', 'name' => 'position', 'type' => MetaBox::SELECT_FIELD, 'values' => ['left' => 'left', 'center' => 'center', 'right' => 'right']));
$sliderContent->addField(array('title' => 'Text Color (Hex Number, only code.)', 'name' => 'color', 'type' => MetaBox::TEXT_FIELD));
$sliderContent->addField(array('title' => 'Title', 'name' => 'title', 'type' => MetaBox::TEXT_FIELD));
$sliderContent->addField(array('title' => 'Title Font', 'name' => 'titlefont', 'type' => MetaBox::TEXT_FIELD));
$sliderContent->addField(array('title' => 'Text Overlay', 'name' => 'textOverlay', 'type' => MetaBox::WP_EDITOR));
$sliderContent->addField(array('title' => 'TextFont', 'name' => 'textfont', 'type' => MetaBox::TEXT_FIELD));
