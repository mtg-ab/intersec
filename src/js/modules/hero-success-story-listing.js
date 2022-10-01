jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-success-story-listing")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-success-story-listing",
                start:"-=450",
                toggleClass: {targets: "section.hero-success-story-listing", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.hero-success-story-listing div.bloc-img img",1.5, { opacity:1,scale:'1',delay:0,ease: "power2.inOut" });
        tl.to("section.hero-success-story-listing a.btn",0.75, { opacity:1,y:0,delay:-0.5,ease: "power2.inOut" });
        //INIT ANIM
        
    }
})
