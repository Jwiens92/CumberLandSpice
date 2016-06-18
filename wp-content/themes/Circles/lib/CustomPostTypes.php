<?php

class CustomPostTypes {

    private static $instance;
    private $list = array();

    public function __construct(){
        //add_action('save_post', array($this, 'savePost'),10,3);
        add_action('save_post', 'CustomPostTypes::savePost',10,3);
    }

    public static function instance(){

        if(!isset(self::$instance)){
            self::$instance = new CustomPostTypes();
        }

        return self::$instance;
    }

    public static function Get()
    {
        $customPostTypes =  CustomPostTypes::instance();

        return $customPostTypes;

    }
    public static function addCustomPostType($post){
        $customPosts = self::Get();
        $customPosts->list[$post->name] = $post;
    }

    public static function savePost( $post_id, $post, $update )
    {
        if($customPostType = CustomPostTypes::Find($post->post_type)) {
            return $customPostType->saveMetaBoxes($post_id, $post, $update);
        }
        return null;
    }


    public static function find($postType)
    {
        $customPostTypes = CustomPostTypes::Get();

        foreach($customPostTypes->list as $customKey => $customPost) {
            if($postType == $customKey) return $customPost;
        }
        return null;

    }
    public static function getPosts()
    {
        $customPosts = self::Get();

        return $customPosts->list;
    }
}
