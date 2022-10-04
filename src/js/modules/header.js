jQuery( document ).ready(function() {
    if(jQuery("header").hasClass("header")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        var wh = jQuery("body").height();

        if (jQuery(window).width() > 768) {
            ScrollTrigger.create({
                trigger: "header",
                pin: true,
                start: 'top 0px',
                scrub:1,
                end: () =>  '+='+wh+'',
            })
            
            ScrollTrigger.create({
                trigger: "body",
                start: 'top -100px',
                scrub:1,
                end: () =>  '+='+wh+'',
                toggleClass: {targets: "header", className: "sticky"}
            })
        }
        
        jQuery("div.switch-language ").click(function() {
            jQuery(this).toggleClass('en')
            if(jQuery(this).hasClass('en')){
                jQuery("div.switch-language span.lang").html("EN")
            }else{
                jQuery("div.switch-language span.lang").html("FR")
            }
        })

        jQuery('header div.burger-menu').click(function(){
            jQuery(this).toggleClass('open');
            jQuery('div.contain-menu-mobile').toggleClass('open');
        });

        jQuery('div.contain-menu-mobile ul li.sub-menu').each(function(){
            jQuery(this).append("<span class='btn-more'></span>")
            jQuery(this).find('span.btn-more').click(function(){
                if(jQuery(this).parent().hasClass('open')){
                    jQuery(this).parent().removeClass('open')
                }else{
                    jQuery('div.contain-menu-mobile ul li.sub-menu').removeClass('open')
                    jQuery(this).parent().addClass('open')
                }
            })
        })


    }
})
