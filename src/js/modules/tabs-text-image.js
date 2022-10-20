jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("tabs-txt-img")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.tabs-txt-img",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.tabs-txt-img div.items div.bloc",1, { opacity:0.65,x:0,delay:0,stagger:0.15,ease: "power2.inOut" });
        tl.staggerTo("section.tabs-txt-img div.bloc-columns div.row",1, { opacity:1,y:0,delay:-0.75,stagger:0.15,ease: "power2.inOut" });
        //INIT ANIM

        jQuery("section.tabs-txt-img div.items div.bloc").each(function() {
            jQuery(this).click(function() {
                jQuery("section.tabs-txt-img div.items div.bloc").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.tabs-txt-img div.bloc-columns div.blocs").each(function() {
                    var idSlider = jQuery(this).data("id");
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
            })
        })

        var maxHeight = -1;
        jQuery('section.tabs-txt-img div.bloc-columns div.blocs').each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        jQuery('section.tabs-txt-img div.bloc-columns').height(maxHeight);

    }
})
