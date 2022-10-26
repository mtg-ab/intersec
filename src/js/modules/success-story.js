jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("success-story")){

        var Flickity = require('flickity');

        var flickity = new Flickity( 'section.success-story div.bloc-slider', {
            prevNextButtons: false,
            pageDots: false,
            cellAlign: "center",
            //wrapAround: true
        }) 

        jQuery('section.success-story span.arrow-left').on( 'click', function() {
            flickity.previous();
        });
        
        jQuery('section.success-story span.arrow-right').on( 'click', function() {
            flickity.next();
        });


    }
})
