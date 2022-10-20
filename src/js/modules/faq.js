jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("faq")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.faq",
                start:"-=850",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.faq div.items div.item",0, { opacity:1,y:0,stagger:0.15,ease: "power2.inOut" });
        tl.to("section.faq p.title_bg",0.65, { opacity:1,y:0,delay:-1,ease: "power2.inOut" });
        //INIT ANIM
        
        jQuery("section.faq div.items div.item").each(function() {
            jQuery(this).click(function() {
                if(jQuery(this).hasClass("open")){
                    jQuery(this).removeClass('open')
                    jQuery(this).find("div.item-txt").css("height",0);
                }else{
                    jQuery( "section.faq div.items div.item" ).removeClass('open')
                    jQuery( "section.faq div.items div.item div.item-txt" ).css("height",0);
                    jQuery(this).addClass('open')
                    var h = jQuery(this).find("div.item-txt div.contain-txt").height();
                    jQuery(this).find("div.item-txt").css("height",h);
                    var id = jQuery(this).data("id");
                }
            })
        })

    }
})
