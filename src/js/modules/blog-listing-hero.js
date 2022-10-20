jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("blog-listing-hero")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.blog-listing-hero",
                start:"-=450",
                toggleClass: {targets: ".blog-listing-hero", className: "active"},
            }
        });
        //INIT TIMELINE

        tl.to("section.blog-listing-hero div.bloc-form",1, { opacity:1,y:0,ease: "power2.inOut" });

    }
})
