jQuery(function($) {

    var modal;
    $('.meta-box-media-button').click(function(e) {

        var input = $(this).siblings('input');

        if (! modal) {
            modal = wp.media.frames.meta_image_frame = wp.media({
                title: meta_image.title,
                button: { text: meta_image.button },
                library: { type: 'image' }
            });
        }

        modal.off('select').on('select', function() {
            var attachment = modal.state().get('selection').first().toJSON();

            attachment.url = attachment.url.replace(meta_image.baseUrl, '').replace('//', '/');

            input.val(attachment.url);
        });

        modal.open();

        e.preventDefault();

    });
    $(function() {
        $( "#datepicker" ).datepicker();
    });

});
