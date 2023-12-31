jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("featured")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.featured",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.featured .bloc",1.25, { opacity:1,x:0,y:0,stagger:0.15,ease: "power2.inOut" });
        //INIT ANIM
    }
})
