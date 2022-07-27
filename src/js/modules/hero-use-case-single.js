jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-use-case-single")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-use-case-single",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.hero-use-case-single div.bloc-img",0.75, { opacity:1,y:0,delay:0,ease: "power2.inOut" });
        tl.to("section.hero-use-case-single a.btn",0.75, { opacity:1,y:0,delay:-0.5,ease: "power2.inOut" });
        //INIT ANIM
        

    }
})
