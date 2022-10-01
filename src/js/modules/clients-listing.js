jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("clients-listing")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.clients-listing",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.clients-listing div.txt",0.75, { opacity:1,className: 'txt active',ease: "power2.inOut" });
        tl.staggerTo("section.clients-listing figure",0.75, { opacity:1,y:0,delay:0,stagger:0.125,ease: "power2.inOut" });
        //INIT ANIM

    }
})
