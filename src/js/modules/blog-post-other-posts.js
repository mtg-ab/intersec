jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("other-posts")){

        if (jQuery(window).width() < 768) {
            var Flickity = require('flickity');

            var flky = new Flickity( 'section.other-posts div.bloc-posts', {
                prevNextButtons: false,
                pageDots: false,
                cellAlign: "left",
            })            
        }

    }
})
