jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-use-case-single")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-use-case-single",
                start:"-=450",
                toggleClass: {targets: "section.hero-use-case-single", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.hero-use-case-single div.bloc-img img",1.5, { opacity:1,scale:'1',delay:0,ease: "power2.inOut" });
        tl.to("section.hero-use-case-single a.btn",0.75, { opacity:1,y:0,delay:-1.25,ease: "power2.inOut" });
        //INIT ANIM
        
    }
})
