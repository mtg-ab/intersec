jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("banner-cta")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.banner-cta",
                start:"-=250",
                toggleClass: {targets: "section.banner-cta", className: "active"}
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        //tl.staggerTo("section.banner-cta div.bloc",0.75, { opacity:1,y:0,stagger:0.2,ease: "power2.inOut" });
        //INIT ANIM
    }
})
