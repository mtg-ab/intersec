jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-company")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-company",
                start:"-=450",
                toggleClass: {targets: "section.hero-company", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.hero-company p.title_bg",0.75, { opacity:1,delay:0,ease: "power2.inOut" });
        tl.to("section.hero-company div.txt",0.75, { opacity:1,delay:-0.5,ease: "power2.inOut" });
        //INIT ANIM
        
    }
})
