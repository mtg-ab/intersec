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
                start:"-=450",
                toggleClass: {targets: "section.banner-cta", className: "active"}
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.banner-cta div.bloc-img figure",0.75, { opacity:1,y:0,ease: "power2.inOut" });
        tl.to("section.banner-cta div.bloc-txt",0.75, { opacity:1,y:0,delay:-0.5,ease: "power2.inOut" });
        //INIT ANIM
    }
})
