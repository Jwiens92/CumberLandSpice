<?php

$websiteOptions= new customPostType('websiteoptions', 'Website Options', 'Website Options', array('title','page-attributes'));
$mainOptions = new MetaBox('mainoptions', 'Main Options', 'websiteoptions');
$mainOptions->addField(array('title' => 'Time interval for home page slider', 'name' => 'timeinterval', 'type' => MetaBox::TEXT_FIELD));