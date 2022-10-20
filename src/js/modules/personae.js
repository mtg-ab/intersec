jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("personae")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(ScrollTrigger,scrollTrigger);
        //INIT GSAP

        //INIT PIN
        let BlocH = jQuery("section.personae div.bloc-txt div.contain-txt").height() + 700;
        let BlocC = jQuery("section.personae div.bloc-txt").height();
        let H = BlocH - BlocC;

        ScrollTrigger.create({
            trigger: "section.personae",
            pin: true,
            start: 'top 0',
            scrub:1.15,
            anticipatePin: 1,
            end: () =>  '+='+H+'',
            toggleClass: {targets: "section.personae", className: "active"},
        })

        jQuery("section.personae div.bloc-txt div.txt div").each(function() {
            let BlocTxt = jQuery(this).height();
            gsap.timeline({
                y: "-"+BlocTxt+"",
                ease: "none",
                scrollTrigger: {
                    trigger: jQuery(this),
                    start: "top 35%",
                    scrub: 1.15,
                    end: () =>  "+=" + BlocTxt +"",
                }
            })
            .to(jQuery(this), {
                y: "-"+BlocTxt+"",
                duration: 0.5, ease: "none",
                stagger: 3 // try diff options here
            })  
            .to(jQuery(this).parent(), {
                height: 0,
                duration: 0.05, ease: "none",
            })  
            .to(jQuery(this).parent(), {
                height: 0,
                duration: 0.05, ease: "none",
            })            
        })
    
        //INIT PIN

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.personae",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.personae div.bloc-img",0.75, { opacity:1,delay:0,ease: "power2.inOut" });
        tl.to("section.personae div.bloc-txt",0.75, { opacity:1,y:0,delay:-0.55,ease: "power2.inOut" });
        //INIT ANIM

    }
})
