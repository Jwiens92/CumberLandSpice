<?php

class CustomPostType {

	public $name;

	protected $singular;

	protected $plural;

	protected $supports;

	protected $taxonomies = array();

	protected $hierarchical = false;

	protected $icon = null;

    public $metaBoxes = array();

	public function __construct($name, $singular = null, $plural = null, $supports = array('title', 'editor'))
	{
		$this->name = $name;
		$this->singular = $singular ?: ucwords($name);
		$this->plural = $plural ?: $this->singular . 's';

		$this->supports = $supports;
        CustomPostTypes::addCustomPostType($this);
		add_action('init', array($this, 'createPostType'));
	}

	public function taggable()
	{
		$this->taxonomies[] = 'post_tag';

		return $this;
	}

	public function categorizable()
	{
		$this->taxonomies[] = 'category';

		return $this;
	}
    public function dedicated_categories(){
        register_taxonomy(
            $this->name.'_category',
            "$this->name",
            array(
                'hierarchical' => true,
                'label' => ucwords($this->name).' Categories',
                'query_var' => true,
                'rewrite' => true
            )
        );
    }
    public function custom_dedicated_categories($name, $admin_label){
        register_taxonomy(
            $name,
            "$this->name",
            array(
                'hierarchical' => true,
                'label' => $admin_label,
                'query_var' => true,
                'rewrite' => true
            )
        );
    }

	public function hierarchical()
	{
		$this->hierarchical = true;

		return $this;
	}

	public function setIcon($value)
	{
		$this->icon = $value;

		return $this;
	}

	public function createPostType()
	{
		register_post_type($this->name, array(
			'labels' => array(
				'name' => $this->plural,
				'singular_name' => $this->singular,
			),
			'public' => true,
			'supports' => $this->supports,
			'taxonomies' => $this->taxonomies,
			'hierarchical' => $this->hierarchical,
			'menu_icon' => $this->icon,
		));
	}

    public function addMetaBox($metaBox)
    {

        $this->metaBoxes[] = $metaBox;

        add_action('add_meta_boxes', array($this, 'initMetaBox'));



    }

    public function initMetaBox()
    {
        global $post;

        $template = get_post_meta($post->ID, '_wp_page_template', true);

        if (empty($this->template) || in_array($template, $this->template))
        {
            foreach($this->metaBoxes as $metaBox) {
                add_meta_box($metaBox->id, $metaBox->title, array($metaBox, 'showForm'), $this->name, 'normal', 'default');
            }


        }
    }

    public function saveMetaBoxes($post_id, $post, $update)
    {
        foreach($this->metaBoxes as $key => $metaBox) {
            $metaBox->save($post_id, $post, $update);
        }
    }

}