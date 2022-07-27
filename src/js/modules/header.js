jQuery( document ).ready(function() {
    if(jQuery("header").length){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        var wh = jQuery("body").height();
        /*
        ScrollTrigger.create({
            trigger: "header",
            pin: true,
            start: 'top 0px',
            scrub:1,
            end: () =>  '+='+wh+'',
        })
        */
        jQuery("div.switch-language ").click(function() {
            jQuery(this).toggleClass('en')
            if(jQuery(this).hasClass('en')){
                jQuery("div.switch-language span.lang").html("EN")
            }else{
                jQuery("div.switch-language span.lang").html("FR")
            }
        })

    }
})
