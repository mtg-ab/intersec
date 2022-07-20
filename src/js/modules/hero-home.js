jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-home")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-home",
                start:"-=250",
                toggleClass: {targets: "section.hero-home svg", className: "active"}
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        //INIT ANIM
    }
})
