jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("tabs-toggle")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.tabs-image-hover",
                start:"-=650",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.tabs-image-hover div.bloc-tabs div.bloc",1, { opacity:0.65,x:0,delay:0,stagger:0.15,ease: "power2.inOut" });
        tl.staggerTo("section.tabs-image-hover div.bloc-columns a.row",1, { opacity:1,y:0,delay:-0.75,stagger:0.15,ease: "power2.inOut" });
        //INIT ANIM

        jQuery("section.tabs-image-hover div.bloc-tabs div.bloc").each(function() {
            jQuery(this).click(function() {
                jQuery("section.tabs-image-hover div.bloc-tabs div.bloc").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.tabs-image-hover div.bloc-columns div.blocs").each(function() {
                    var idSlider = jQuery(this).data("id");
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
            })
        })

        var maxHeight = -1;
        jQuery('section.tabs-image-hover div.bloc-columns div.blocs').each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        jQuery('section.tabs-image-hover div.bloc-columns').height(maxHeight);

        var $mouseX = 0, $mouseY = 0;
        var $xp = 0, $yp =0;
        
        jQuery("section.tabs-image-hover div.bloc-columns div.blocs").mousemove(function(e){
            $mouseX = event.pageX - jQuery(this).offset().left + 0;
            $mouseY = event.pageY - jQuery(this).offset().top + 0;   
        });
        
        var $loop = setInterval(function(){
            $xp += (($mouseX - $xp)/12);
            $yp += (($mouseY - $yp)/12);
            jQuery("section.tabs-image-hover div.bloc-columns div.blocs div.bloc-imgs-hover").css({left:$xp +'px', top:$yp +'px'});  
        }, 30);

        jQuery("section.tabs-image-hover div.bloc-columns div.blocs").mouseenter(function() {
            jQuery('section.tabs-image-hover div.bloc-columns div.bloc-imgs-hover').fadeIn()
        })
        jQuery("section.tabs-image-hover div.bloc-columns div.blocs").mouseleave(function() {
            jQuery('section.tabs-image-hover div.bloc-columns div.bloc-imgs-hover').fadeOut()
        })

        jQuery('section.tabs-image-hover div.bloc-columns div.blocs a.row').each(function() {
            var id = jQuery(this).data('id');
            jQuery(jQuery(this)).hover(function() {
                jQuery('section.tabs-image-hover div.bloc-columns div.bloc-imgs-hover div.bloc-img').each(function() {
                    if(jQuery(this).data('id') == id){
                        jQuery(this).addClass('show')
                    }else{
                        jQuery(this).removeClass('show')
                    }
                })
            })                
        })

        if (jQuery(window).width() < 768) {
            var Flickity = require('flickity');

            var flky = new Flickity( 'section.tabs-image-hover div.bloc-columns div.blocs', {
                prevNextButtons: false,
                pageDots: false,
                cellAlign: "left",
            })            
        }

    }
})
