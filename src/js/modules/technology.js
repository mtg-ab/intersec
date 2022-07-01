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
        tl.staggerTo("section.technology .bloc",1.25, { opacity:1,x:0,stagger:0.15,ease: "power2.inOut" });
        //INIT ANIM
    }
})
