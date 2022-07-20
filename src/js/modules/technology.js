jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("technology")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.technology",
                start:"-=250",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.technology .bloc",1, { opacity:1,x:0,stagger:0.05,ease: "power2.inOut" });
        //INIT ANIM

        jQuery("section.technology div.row-1 div.bloc-circle").each(function() {
            jQuery(this).click(function() {

                jQuery("section.technology div.row-1 div.bloc-circle").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.technology div.row-1 div.bloc div.bloc-txt").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })

            })
        })

        jQuery("section.technology div.row-2 div.bloc-circle").each(function() {
            jQuery(this).click(function() {

                jQuery("section.technology div.row-2 div.bloc-circle").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.technology div.row-2 div.bloc div.bloc-txt").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })

            })
        })
    }
})
