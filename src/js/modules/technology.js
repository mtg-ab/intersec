jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("technology")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.technology",
                start:"-=450",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.technology div.blocs .bloc",1, { opacity:1,x:0,stagger:0.05,ease: "power2.inOut" });
        //INIT ANIM

        jQuery("section.technology div.row-1 div.bloc-circle").each(function() {
            jQuery(this).hover(function() {
                jQuery("section.technology div.row-1 div.bloc-circle").removeClass('selected')
                jQuery("section.technology div.row-2 div.bloc-circle").removeClass('selected')
                jQuery("section.technology div.row-2 div.bloc div.bloc-txt").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.technology div.row-1 div.bloc div.bloc-txt").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })

            })
        })

        jQuery("section.technology div.row-2 div.bloc-circle").each(function() {
            jQuery(this).hover(function() {
                jQuery("section.technology div.row-1 div.bloc-circle").removeClass('selected')
                jQuery("section.technology div.row-1 div.bloc div.bloc-txt").removeClass('selected')
                jQuery("section.technology div.row-2 div.bloc-circle").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.technology div.row-2 div.bloc div.bloc-txt").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })

            })
        })

        if (jQuery(window).width() < 768) {
            var Flickity = require('flickity');

            var flky = new Flickity( 'section.technology div.blocs-mobile', {
                prevNextButtons: false,
                pageDots: false,
                cellAlign: "left",
                on:{
                    change: function( index ) {
                        var id = index + 1;
                        jQuery( "section.technology div.blocs-txt-mobile div.bloc-txt" ).each(function( index ) {
                            var idBlocImg = jQuery(this).data('id'); 
                            if(id == idBlocImg){
                                jQuery(this).addClass('is-selected')
                            }else{
                                jQuery(this).removeClass('is-selected')
                            }
                        })
                    } 
                }
            })
            
            var maxHeight = -1;
            jQuery('section.technology div.blocs-txt-mobile div.bloc-txt').each(function() {
                maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            });

            jQuery('section.technology div.blocs-txt-mobile').height(maxHeight);

        }

    }
})
