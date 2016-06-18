<?php

class Settings {

	const TEXT_FIELD = 1;
	const TEXTAREA_FIELD = 2;
	const SELECT_FIELD = 3;
	const PAGE_FIELD = 4;
	const MEDIA_FIELD = 5;
	const CATEGORY_FIELD = 6;
	const RICHTEXT_FIELD = 7;

	protected $appearancePages = array();

	protected $pages = array();

	public function __construct()
	{
		add_action('admin_menu', array($this, 'createMenuItems'));
		add_action('admin_init', array($this, 'registerSettings'));

		add_action('admin_enqueue_scripts', array($this, 'insertScripts'));
	}

	public function createMenuItems()
	{
		foreach ($this->pages as $page)
		{
			add_options_page($page['title'], $page['title'], 'manage_options', $page['slug'], array(
				$this, 'showPage_' . $this->escapeSlug($page['slug'])
			));
		}

		foreach ($this->appearancePages as $page)
		{
			add_theme_page($page['title'], $page['title'], 'manage_options', $page['slug'], array(
				$this, 'showPage_' . $this->escapeSlug($page['slug'])
			));
		}
	}

	public function registerSettings()
	{
		foreach ($this->pages as $page)
		{
			foreach ($page['items'] as $item)
			{
				register_setting($page['slug'] . '-group', $item['name']);
			}
		}
	}

	public function insertScripts()
	{
		wp_enqueue_media();
		wp_register_script('meta-image', get_stylesheet_directory_uri() . '/lib/js/media-select.js', array('jquery'));
		wp_localize_script('meta-image', 'meta_image', array(
			'title' => 'Choose or upload an image',
			'button' => 'Use this image',
			'baseUrl' => get_bloginfo('url'),
		));

		wp_enqueue_script('meta-image');
	}

	public function addAppearancePage($slug, $name, $items = array())
	{
		$this->appearancePages[$slug] = array(
			'slug' => $slug,
			'title' => $name,
			'items' => array(),
		);

		foreach ($items as $item)
		{
			$this->addOption($slug, $item);
		}
	}

	public function addOptionsPage($slug, $name, $items = array())
	{
		$this->pages[$slug] = array(
			'slug' => $slug,
			'title' => $name,
			'items' => array(),
		);

		foreach ($items as $item)
		{
			$this->addOption($slug, $item);
		}
	}

	public function addOption($slug, $item)
	{
		if (! isset($this->pages[$slug]) && ! isset($this->appearancePages[$slug]))
		{
			return $this->addOptionsPage($slug, $slug, array($item));
		}

		$this->pages[$slug]['items'][] = $item;
	}

	public function showOptionsPage($slug)
	{
		$page = $this->pages[$slug];
		$group = $slug . '-group';

		?>
			<div class="wrap">
				<form method="POST" action="options.php">
					<?php settings_fields($group); ?>
					<?php do_settings_fields($group, ''); ?>
					<table class="form-table">
						<?php foreach ($page['items'] as $item) : ?>
							<tr valign="top">
								<th scope="row"><?php echo $item['title']; ?></th>
								<td><?php echo $this->getInput($item); ?></td>
							</tr>
						<?php endforeach; ?>
					</table>
					<?php submit_button(); ?>
				</form>
			</div>
		<?php
	}

	protected function getInput($item)
	{
		$html = '';
		$name = $item['name'];
		$prev = get_option($item['name']);

		switch($item['type'])
		{
			case self::TEXT_FIELD:
				$html = '<input type="text" id="' . $name . '" name="' . $name . '" value="' . $prev . '" />';
				break;
			case self::TEXTAREA_FIELD:
				$html = '<textarea id="' . $name . '" name="' . $name . '" style="height:200px;width:400px;vertical-align:top;">' . $prev . '</textarea>';
				break;
			case self::SELECT_FIELD:
				$html = '<select id="' . $name . '" name="' . $name . '">';
				foreach ($item['values'] as $key => $value)
				{
					$html .= '<option value="' . $key . '"' . ($prev === $key ? ' selected' : '') . '>' . $value . '</option>';
				}
				$html .= '</select>';
				break;
			case self::PAGE_FIELD:
				$html = wp_dropdown_pages(array(
					'selected' => $prev,
					'echo' => 0,
					'id' => $name,
					'name' => $name,
				));
				break;
			case self::MEDIA_FIELD:
				$html = '<input type="text" id="' . $name . '" name="' . $name . '" value="' . $prev . '" />';
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
			case self::RICHTEXT_FIELD:
				wp_editor($prev, $name, $item['options'] ? $item['options'] : array());
				break;
		}

		return $html;
	}

	protected function escapeSlug($slug)
	{
		return str_replace('-', '__', $slug);
	}

	protected function unescapeSlug($slug)
	{
		return str_replace('__', '-', $slug);
	}

	protected function strStartsWith($haystack, $needle)
	{
		return ! strncmp($haystack, $needle, strlen($needle));
	}

	public function __call($method, $args)
	{
		$matches = array();

		if (preg_match('/^showPage_(?P<slug>.*)$/', $method, $matches))
		{
			$slug = $this->unescapeSlug($matches['slug']);
			$this->showOptionsPage($slug);
		}
	}

}