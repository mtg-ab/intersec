jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-landing")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-landing",
                start:"-=450",
                toggleClass: {targets: "section.hero-landing", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.hero-landing div.bloc-img",0.75, { opacity:1,delay:0,ease: "power2.inOut" });
        //INIT ANIM
        
    }
})
