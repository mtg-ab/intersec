jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("key-figures")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.key-figures",
                start:"-=650",
                toggleClass: {targets: "section.key-figures", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.key-figures div.bloc",1.25, { opacity:1,stagger:0.15,delay:0.15,ease: "power2.inOut" });
        //INIT ANIM

    }
})
