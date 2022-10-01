jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("split-images")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.split-images",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.split-images div.bloc",0, { opacity:1,x:0,delay:0,stagger:0.15,ease: "power2.inOut" });
        //INIT ANIM

    }
})
