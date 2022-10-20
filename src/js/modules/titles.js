jQuery( document ).ready(function() {

    const { gsap } = require("gsap/dist/gsap");
    var scrollTrigger = require('gsap/scrollTrigger');
    gsap.registerPlugin(scrollTrigger);

    jQuery( "h2" ).each(function( index ) {
        //INIT TIMELINE
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: jQuery(this),
                start:"-=650",
            }
        });
        //INIT TIMELINE
    
        //ANIM TIMELINE
        tl.staggerTo(jQuery(this).find("span.char"),0.35, { opacity:1,x:0,y:0,stagger:0.025,ease: "power2.Out" });
        //ANIM TIMELINE 
    })

    jQuery( ".figure-anim" ).each(function( index ) {
        //INIT TIMELINE
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: jQuery(this),
                start:"-=550",
            }
        });
        //INIT TIMELINE
    
        //ANIM TIMELINE
        tl.staggerTo(jQuery(this).find("span.char"),0.55, { opacity:1,x:0,y:0,stagger:0.025,ease: "power2.Out" });
        //ANIM TIMELINE 
    })

    if(!jQuery( "h1" ).hasClass('loader')){
        jQuery( "h1" ).each(function( index ) {
            //INIT TIMELINE
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: jQuery(this),
                    start:"-=650",
                }
            });
            //INIT TIMELINE
        
            //ANIM TIMELINE
            tl.staggerTo(jQuery(this).find("span.char"),0.35, { opacity:1,x:0,y:0,stagger:0.025,ease: "power2.Out" });
            //ANIM TIMELINE 
        })
    }
    
})