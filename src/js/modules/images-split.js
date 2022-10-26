jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("split-images")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.split-images",
                start:"-=850",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.split-images div.bloc ",0, { opacity:1,x:0,stagger:0.1,ease: "power2.inOut" });
        tl.to("section.split-images p.title_bg",0.75, { opacity:1,y:0,delay:-1,ease: "power2.inOut" });
        //INIT ANIM

        jQuery("section.split-images div.bloc").each(function() {
            jQuery(this).mouseenter(function() {
                jQuery("section.split-images div.bloc").removeClass('selected')
                jQuery(this).addClass('selected')
            })
        })
        
    }
})
