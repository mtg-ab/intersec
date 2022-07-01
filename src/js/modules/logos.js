jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("logos-row")){
        var Flickity = require('flickity');

        let tickerSpeed = 0;
        
        let flickity = null;
        const slideshowEl = document.querySelector('section.logos-row div.container');
        
        flickity = new Flickity(slideshowEl, {
            autoPlay: false,
            prevNextButtons: [ '<b>prev</b>', '<em>next</em>' ],
            pageDots: false,
            wrapAround: true,
            selectedAttraction: 0.01,
            friction: 0.15,
            prevNextButtons: false,
        });
        flickity.x = 0;

        $('span.btn-left').on( 'click', function() {
            flickity.previous();
        });
        
        $('span.btn-right').on( 'click', function() {
            flickity.next();
        });
        
    }
})
