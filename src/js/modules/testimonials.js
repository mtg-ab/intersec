jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("testimonials")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.testimonials",
                start:"-=250",
                toggleClass: {targets: "section.testimonials div.bloc-circles", className: "active"}
            }
        });
        //INIT TIMELINE

        var $ = require('jquery');
        var Flickity = require('flickity');
        require('flickity-fade');

        var flkty = new Flickity( 'section.testimonials div.bloc-slider', {
            wrapAround: true,
            pageDots: false,
            fade:true,
            draggable:false,
            autoPlay: 6500,
            prevNextButtons: false
        })

        $('div.bloc-slider').on( 'click', function() {
            flkty.next();
        });

    }
})
