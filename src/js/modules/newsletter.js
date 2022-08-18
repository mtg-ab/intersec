jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("newsletter")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.newsletter",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.newsletter div.bloc-form",1, { opacity:1,y:0,delay:0,ease: "power2.inOut" });
        //INIT ANIM
    }
})
