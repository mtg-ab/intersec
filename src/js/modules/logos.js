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
            draggable:true,
        });
        flickity.x = 0;

        $('span.btn-left').on( 'click', function() {
            flickity.previous();
        });
        
        $('span.btn-right').on( 'click', function() {
            flickity.next();
        });

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.logos-row",
                start:"-=650",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.logos-row figure",1, { opacity:1,y:0,delay:0,ease: "power2.inOut" });
        //INIT ANIM
        
    }
})
