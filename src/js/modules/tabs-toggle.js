jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("tabs-toggle")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.tabs-toggle",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.tabs-toggle div.items div.item",1, { opacity:1,y:0,delay:0,stagger:0.15,ease: "power2.inOut" });
        tl.to("section.tabs-toggle div.bloc-imgs",1, { opacity:1,y:0,delay:0,delay:-0.85,ease: "power2.inOut" });

        //INIT ANIM
        
        jQuery("section.tabs-toggle div.items div.item").each(function() {
            jQuery(this).click(function() {
                if(jQuery(this).hasClass("open")){
                    jQuery(this).removeClass('open')
                    jQuery(this).find("div.item-txt").css("height",0);
                }else{
                    jQuery( "section.tabs-toggle div.items div.item" ).removeClass('open')
                    jQuery( "section.tabs-toggle div.items div.item div.item-txt" ).css("height",0);
                    jQuery(this).addClass('open')
                    var h = jQuery(this).find("div.item-txt div.contain-txt").height();
                    var h = h + 20;
                    jQuery(this).find("div.item-txt").css("height",h);
                    var id = jQuery(this).data("id");
                    jQuery("section.tabs-toggle div.bloc-imgs a.bloc-img").each(function() {
                        if(jQuery(this).data("id") == id){
                            jQuery(this).addClass('selected')
                        }else{
                            jQuery(this).removeClass('selected')
                        }
                    })
                }
            })
        })

    }
})
