jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("personae")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.personae",
                start:"-=250",
                toggleClass: {targets: "section.personae", className: "active"}
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        //tl.staggerTo("section.banner-cta div.bloc",0.75, { opacity:1,y:0,stagger:0.2,ease: "power2.inOut" });
        //INIT ANIM
    }
})
