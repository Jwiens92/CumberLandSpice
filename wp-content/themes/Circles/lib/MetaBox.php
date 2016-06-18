<?php

class MetaBox {

	const TEXT_FIELD = 1;
	const TEXTAREA_FIELD = 2;
	const SELECT_FIELD = 3;
	const PAGE_FIELD = 4;
	const MEDIA_FIELD = 5;
	const CATEGORY_FIELD = 6;
	const GALLERY_FIELD = 7;
	const MULTI_PAGE_FIELD = 8;
    const DATE = 9;
    const WP_EDITOR =10;

	public $id;

	public $title;

	public $postType;

	protected $template;

	protected $fields = [];

	protected $previousValue;

	public function __construct($id, $title, $postType = 'page',  $template = array())
	{
		$this->id = $id;
		$this->title = $title;
		$this->postType = $postType;
		$this->template = (array)$template;

        if($customPostType = CustomPostTypes::Find($postType)) $customPostType->addMetaBox($this);

		add_action('admin_enqueue_scripts', array($this, 'insertScripts'));
	}

	public function init()
	{

	}

	public function insertScripts()
	{
		global $typenow;

		if ($typenow === $this->postType)
		{
            wp_enqueue_script('jquery-ui-datepicker');
            wp_enqueue_style('jquery-style', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css');
			wp_enqueue_media();
			wp_register_script('meta-image', get_stylesheet_directory_uri() . '/lib/js/media-select.js', array('jquery'));
			wp_localize_script('meta-image', 'meta_image', array(
				'title' => 'Choose or upload an image',
				'button' => 'Use this image',
				'baseUrl' => get_bloginfo('url'),
			));

			wp_enqueue_script('meta-image');
		}
	}

    public function save($post_id, $post, $update)
    {
        $nonceName = $this->getNonceName();

        if (! isset($nonceName) || ! wp_verify_nonce($_POST[$nonceName], $this->getNonceKey())) {
            return;
        }

        foreach($this->fields as $key => $field) {
            update_post_meta($post_id, $field['name'], $_POST[$this->getFieldName($field)]);
        }

    }
    public function addFields($fields)
    {
        foreach ($fields as $field)
        {
            $this->addField($field);
        }
    }

	public function addField($field)
	{
        $this->fields[] = $field;
	}

    public function showForm($post, $args)
    {
        $nonceName = $this->getNonceName();
        $nonceValue = wp_create_nonce($this->getNonceKey());
        ?>
        <input type="hidden" id="<?php echo $nonceName; ?>" name="<?php echo $nonceName; ?>" value="<?php echo $nonceValue; ?>">
        <?php
        for ($i = 0; $i < count($this->fields); $i++)
        {
            $field = $this->fields[$i];

            ?>
            <div style="display:block;box-sizing:border-box;padding:8px 6px;vertical-align:top;width:100%;">
                <label for="<?php echo $this->getFieldName($field); ?>"><?php echo $field['title']; ?></label><br>
                <?php echo $this->inputForField($post,$field); ?>
            </div>
        <?php
        }

        ?>
        <div style="clear:both;"></div>
    <?php
    }

	protected function getNonceName()
	{
		return $this->id . '_nonce';
	}

	protected function getNonceKey()
	{
		return __FILE__ . $this->id;
	}

	protected function getFieldName($field)
	{
		return $this->id . '-' . $field['name'];
	}

	protected function inputForField($post,$field)
	{
		$html = '';
		$name = $this->getFieldName($field);

        $prev = get_post_meta($post->ID, $field['name'], true);


        switch($field['type'])
		{
			case self::TEXT_FIELD:
				$html = '<input type="text" id="' . $name . '" name="' . $name . '" value="' . $prev . '" style="width:100%;" />';
				break;
			case self::TEXTAREA_FIELD:
                $html = '<textarea id="' . $name . '" name="' . $name . '" style="height:200px;width:100%;vertical-align:top;">' . $prev . '</textarea>';
				break;
			case self::SELECT_FIELD:
				$html = '<select id="' . $name . '" name="' . $name . '">';
				foreach ($field['values'] as $key => $value)
				{
					$html .= '<option value="' . $key . '"' . ((string)$prev === (string)$key ? 'selected' : '') . '>' . $value . '</option>';
				}
				$html .= '</select>';
				break;
			case self::PAGE_FIELD:
				$args = array_merge(
					array(
						'selected' => $prev,
						'echo' => 0,
						'id' => $name,
						'name' => $name,
					),
					$field['args']
				);
				$html = wp_dropdown_pages($args);
				break;
			case self::MEDIA_FIELD:
				$html = '<input type="text" id="' . $name . '" name="' . $name . '" value="' . $prev . '" style="width:100%;" /><br>';
				$html .= '<button class="meta-box-media-button">Select Media</button>';
				break;
			case self::CATEGORY_FIELD:
				$html = wp_dropdown_categories(array(
					'selected' => $prev,
					'hide_empty' => false,
					'echo' => false,
					'id' => $name,
					'name' => $name,
				));
				break;
			case self::MULTI_PAGE_FIELD:
				$posts = get_posts(array(
					'posts_per_page' => -1,
					'post_type' => $field['post_type'],
				));
				foreach ($posts as $post)
				{
					$html .= '<label style="margin-right:20px;"><input type="checkbox" name="' . $name . '[]" value="' . $post->ID . '"' . (in_array($post->ID, (array) $prev) ? ' checked' : '') . '> ' . $post->post_title . '</label>';
				}
				break;
            case self::DATE:
                $html = '<input type="text" id="datepicker" name="' . $name . '" value="' . $prev . '" />';
                break;
            case self::WP_EDITOR:
                ob_start();
                $settings = array('media_buttons' => true, 'editor_css' => true);
                wp_editor( $prev, $name, $settings);
                $html = ob_get_contents();
                ob_end_clean();
                break;
		}

		return $html;
	}

}
