
jQuery( document ).ready(function() {
    if(jQuery("header").hasClass("header")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
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
            if(jQuery(this).hasClass('en')){
                jQuery("div.switch-language ").addClass('fr');
                jQuery("div.switch-language span.lang").html("FR");
                var url = jQuery('a.lang_switcher_link[data-language="fr"]').attr("href");
                window.location.href = ""+url+"";
            }else if(jQuery(this).hasClass('fr')){
                jQuery("div.switch-language ").addClass('en');
                jQuery("div.switch-language span.lang").html("EN")
                var url = jQuery('a.lang_switcher_link[data-language="en"]').attr("href");
                window.location.href = ""+url+"";
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

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "header",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("header div.container",0.85, { opacity:1,y:0,delay:0,ease: "power2.inOut" });
        //INIT ANIM


    }
})
