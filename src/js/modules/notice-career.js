jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("notice-career")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.notice-career",
                start:"-=650",
                toggleClass: {targets: "section.notice-career div.pie", className: "animate"},
            }
        });
        //INIT TIMELINE

        var note = jQuery("section.notice-career div.stars span").data('note');
        note = (Math.round(note*2)/2)*39.5;
        jQuery("section.notice-career div.stars span").css("width",""+note+"px")
    }
})
