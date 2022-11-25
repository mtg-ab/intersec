jQuery( document ).ready(function() {
    if(jQuery("div").hasClass("blog-post-template")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        var wh = jQuery("section.contain-post div.bloc-contain").height();

        ScrollTrigger.create({
            trigger: ".bloc-anchor",
            pin: true,
            start: 'top +=150px',
            scrub:1,
            end: () =>  '+='+wh+'',
        })

    }
})
