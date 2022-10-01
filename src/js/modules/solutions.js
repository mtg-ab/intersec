jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("solutions")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.solutions",
                start:"-=650",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.solutions div.bloc-tabs div.bloc",1, { opacity:0.65,x:0,delay:0,stagger:0.15,ease: "power2.inOut" });
        tl.staggerTo("section.solutions div.bloc-right div.selected div.bloc",1, { opacity:1,y:0,delay:-0.75,stagger:0.15,ease: "power2.inOut" });
        //INIT ANIM

        jQuery("section.solutions div.bloc-tabs div.bloc").each(function() {
            jQuery(this).click(function() {
                jQuery("section.solutions div.bloc-tabs div.bloc").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.solutions div.bloc-right div.blocs").each(function() {
                    var idSlider = jQuery(this).data("id");
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
            })
        })

        if (jQuery(window).width() < 768) {
            var maxHeight = -1;
            jQuery('section.solutions div.bloc-right div.blocs').each(function() {
                maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            });

            jQuery('section.solutions div.bloc-right').height(maxHeight);
        }

    }
})
