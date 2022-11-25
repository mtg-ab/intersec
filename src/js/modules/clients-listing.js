jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("clients-listing")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.clients-listing",
                start:"-=750",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.clients-listing figure",0.55, { opacity:1,y:0,delay:0,stagger:0.055,ease: "power2.inOut" });
        tl.to("section.clients-listing div.txt",0.75, { opacity:1,className: 'txt active',delay:-2,ease: "power2.inOut" });
        //INIT ANIM

    }
})
