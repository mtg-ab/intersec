jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("steps")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.steps",
                start:"-=650",
                toggleClass: {targets: "section.steps", className: "active"}
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.steps div.bloc-step",0.55, { opacity:1,left:0,stagger:0.1,ease: "power2.inOut" });
        tl.to("section.steps div.bloc-img",0.75, { opacity:1,y:0,delay:-0.75,ease: "power2.inOut" });
        //INIT ANIM

        var Flickity = require('flickity');

        let tickerSpeed = 0;
        
        let flickity = null;
        const slideshowEl = document.querySelector('section.steps div.steps');
        
        flickity = new Flickity(slideshowEl, {
            autoPlay: false,
            pageDots: false,
            prevNextButtons: false,
            cellAlign: 'left',
            on:{
                change: function( index ) {
                    var id = index + 1;
                    jQuery( "section.steps div.bloc-img figure" ).each(function( index ) {
                        var idBlocImg = jQuery(this).data('id'); 
                        if(id == idBlocImg){
                            jQuery(this).addClass('selected')
                        }else{
                            jQuery(this).removeClass('selected')
                        }
                    })
                } 
            }
        });

        $("section.steps div.steps").on('mousemove', function(e) {
            if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
                jQuery("section.steps div.steps").mouseover(function(){
                    jQuery("#contain-cursor").addClass("ui-left-hovered");
                    jQuery("#contain-cursor").removeClass("ui-right-hovered");
                })
            } else {
                jQuery("section.steps div.steps").mouseover(function(){
                    jQuery("#contain-cursor").removeClass("ui-left-hovered");
                    jQuery("#contain-cursor").addClass("ui-right-hovered");
                })
            }
        });

        $("section.steps div.steps").mouseleave(function(){
            jQuery("#contain-cursor").removeClass("ui-left-hovered");
            jQuery("#contain-cursor").removeClass("ui-right-hovered");
        })

        $("section.steps div.flickity-viewport").on('click', function(e) {
            if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
                flickity.previous();
            } else {
                flickity.next();
            }
        });

        
        
    }
})
