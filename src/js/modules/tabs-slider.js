jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("tabs-slider")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.tabs-slider",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT TIMELINE
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "section.tabs-slider",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.tabs-slider div.bloc-tabs div.bloc",0.75, { opacity:1,y:0,stagger:0.15,ease: "power2.inOut" });
        tl2.staggerTo("section.tabs-slider div.slider div.bloc",1, { opacity:1,left:0,stagger:0.15,ease: "power2.inOut" });
        //INIT ANIM

        var Flickity = require('flickity');

        var flickity = new Flickity("section.tabs-slider div.bloc-slider div.slider", {
            contain: true,
            pageDots: true,
            prevNextButtons: false,
            cellAlign: 'left',
            selectedAttraction: 0.01,
            friction: 0.15
        }); 
        
        jQuery("section.tabs-slider div.bloc-tabs div.bloc").each(function() {
            jQuery(this).click(function() {
                jQuery("section.tabs-slider div.bloc-tabs div.bloc").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.tabs-slider div.bloc-slider div.slider").each(function() {
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
        jQuery('section.tabs-slider div.bloc-slider div.slider').each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        jQuery('section.tabs-slider div.bloc-slider').height(maxHeight);

    }
})
