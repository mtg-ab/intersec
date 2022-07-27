jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("steps")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.steps",
                start:"-=450",
                toggleClass: {targets: "section.steps", className: "active"}
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.steps div.bloc-step",0.75, { opacity:1,left:0,stagger:0.2,ease: "power2.inOut" });
        //INIT ANIM

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
