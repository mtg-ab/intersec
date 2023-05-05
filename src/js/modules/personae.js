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
            start: 'top +=0',
            scrub: 1,
            invalidateOnRefresh: true,
            end: () =>  '+='+BlocH+'',
            toggleClass: {targets: "section.personae", className: "active"},
        })

        jQuery("section.personae div.bloc").each(function() {
            var id = jQuery(this).data('id');
            gsap.timeline({
                ease: "none",
                scrollTrigger: {
                    trigger: jQuery(this).find('div.txt div'),
                    start:'top +=20%',
                    end:'top -=0%',
                    scrub: 1.15,
                    onEnter:function(){
                        jQuery("section.personae figure").each(function() {
                            if(jQuery(this).data("id") == id){
                                jQuery(this).addClass('selected')
                            }else{
                                jQuery(this).removeClass('selected')
                            }
                        })
                    },
                    onEnterBack:function(){
                        jQuery("section.personae figure").each(function() {
                            if(jQuery(this).data("id") == id){
                                jQuery(this).addClass('selected')
                            }else{
                                jQuery(this).removeClass('selected')
                            }
                        })
                    }                  
                }
            })
            .to(jQuery(this).find("div.txt div"), {
                yPercent: "-100",
                ease: "none",
            })  
            .to(jQuery(this).find("div.txt"), {
                height: 0,
                delay:-0.2,
                duration: 0.35, 
                ease: "none",
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
        tl.to("section.personae div.bloc-img",0.75, { opacity:1,top:0,delay:0,ease: "power2.inOut" });
        tl.to("section.personae div.bloc-txt",0.75, { opacity:1,y:0,delay:-0.55,ease: "power2.inOut" });
        //INIT ANIM

    }
})
