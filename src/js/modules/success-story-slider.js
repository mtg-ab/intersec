jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("success-story-slider")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.success-story-slider",
                start:"-=650",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        //INIT ANIM

        var Flickity = require('flickity');

        var flickity = new Flickity( 'section.success-story-slider div.container-slider', {
            prevNextButtons: false,
            pageDots: false,
            cellAlign: "left",
            wrapAround: true
        }) 

        jQuery('section.success-story-slider span.arrow-left').on( 'click', function() {
            flickity.previous();
        });
        
        jQuery('section.success-story-slider span.arrow-right').on( 'click', function() {
            flickity.next();
        });


    }
})
