jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("txt-waves")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(ScrollTrigger,scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.txt-waves",
                start:"-=0",
                toggleClass: {targets: "section.txt-waves", className: "active"}
            }
        });
        //INIT TIMELINE

        var Hblock = $("section.txt-waves div.block").height() + 60;
        var Hblock = Hblock * 3;
        
        ScrollTrigger.create({
            trigger: "section.txt-waves",
            pin: true,
            start: 'top 0',
            anticipatePin: 3,
            end:"+="+Hblock+"",
            scrub: 3,
        })

        jQuery("section.txt-waves div.block").each(function() {
            var h = jQuery(this).height();
            gsap.to(jQuery(this), {
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: jQuery(this),
                    start: 'top 0',
                    end: '+='+h+'',
                    scrub: 3.5,
                }
            });

        })
        
    }
})