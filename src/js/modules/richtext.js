jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("richtext")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.richtext",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.richtext div.bloc-txt",0.75, { opacity:1,y:0,delay:0,ease: "power2.inOut" });
        //INIT ANIM
    }
})
