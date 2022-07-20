jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("steps")){
        var Flickity = require('flickity');

        let tickerSpeed = 0;
        
        let flickity = null;
        const slideshowEl = document.querySelector('section.steps div.steps');
        
        flickity = new Flickity(slideshowEl, {
            autoPlay: false,
            pageDots: false,
            prevNextButtons: false,
            cellAlign: 'left'
        });
        
    }
})
