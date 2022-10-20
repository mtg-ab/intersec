jQuery( document ).ready(function() {
    if(jQuery("div").hasClass("blog-post-testimonial")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
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
