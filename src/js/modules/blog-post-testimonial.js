jQuery( document ).ready(function() {
    if(jQuery("div").hasClass("blog-post-testimonial")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "div.blog-post-testimonial",
                start:"-=650",
                toggleClass: {targets: "div.blog-post-testimonial div.bloc-circles", className: "active"}
            }
        });
        //INIT TIMELINE

    }
})
