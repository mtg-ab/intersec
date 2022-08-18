jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("txt-three-columns")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.txt-three-columns",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.txt-three-columns div.block",1, { opacity:1,top:0,stagger:0.15,delay:0,ease: "power2.inOut" });
        //INIT ANIM
    }
})
