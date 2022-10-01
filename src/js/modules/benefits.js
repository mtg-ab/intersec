jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("benefits")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.benefits",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.benefits div.blocs div.bloc",1, { opacity:1,y:0,delay:0,stagger:'0.15',ease: "power2.inOut" });
        //INIT ANIM

    }
})
