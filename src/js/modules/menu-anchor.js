jQuery( document ).ready(function() {

    if(jQuery("section").hasClass("menu-anchor")){

        ///INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        var wh = jQuery("body").height();

        ScrollTrigger.create({
            trigger: "section.menu-anchor",
            pin: true,
            start: 'top 115px',
            scrub:1,
            end: () =>  '+='+wh+'',
            toggleClass: {targets: "section.menu-anchor", className: "active"}
        })

        jQuery(window).scroll(function (event) {

            jQuery( "section.menu-anchor nav ul li span" ).each(function( index ) {
                var url = jQuery(this).data('url');
                jQuery( "section" ).each(function( index ) {
                    if(jQuery(this).attr('id') == url){

                        ScrollTrigger.create({
                            trigger: jQuery(this),
                            start: 'top 160px',
                            scrub:1,
                            end: () =>  'bottom 160px',
                            toggleClass: {targets: "span#"+url+"", className: "active"},
                        })

                        jQuery( "section.menu-anchor nav ul li span" ).each(function( index ) {
                            if(jQuery(this).hasClass('active')){
                                jQuery(this).css('color','#f1762c');
                            }else{
                                jQuery(this).css('color','#2f2f2f');
                            }
                        })                            

                    }
                    
                })
            })
        });

        jQuery( "section.menu-anchor nav ul li span" ).each(function( index ) {
            jQuery(this).click(function( index ) {
                jQuery(this).css('color','#f1762c');
                var url = jQuery(this).data('url');
                $('html, body').animate({
                    scrollTop: jQuery("section#"+url+"").offset().top + 20
                }, 750);
            })
        })
        
    }

})