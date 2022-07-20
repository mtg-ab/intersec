jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("tabs-logos")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.tabs-logos",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.tabs-logos p.title_bg",0, { opacity:1,y:0,delay:0,ease: "power2.inOut" });
        tl.to("section.tabs-logos svg.circle circle",0.5, { strokeDashoffset:'0',delay:0,ease: "power2.inOut" });

        //INIT ANIM
    
        jQuery("section.tabs-logos div.bloc-logos div.bloc-logo").each(function() {
            jQuery(this).click(function() {

                jQuery("section.tabs-logos div.bloc-logos div.bloc-logo").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.tabs-logos div.bloc-txt-circle div.bloc").each(function() {
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
