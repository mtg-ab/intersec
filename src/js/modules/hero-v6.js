jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-v6")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-v6",
                start:"-=450",
                toggleClass: {targets: "section.hero-v6", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.hero-v6 div.container-bloc-item div.bloc-item",0.75, { opacity:1,y:0,stagger:0.1,ease: "power2.inOut" });
        tl.to("section.hero-v6 div.txt",0.75, { opacity:1,delay:-0.75,ease: "power2.inOut" });
        tl.to("section.hero-v6 div.bloc-imgs",0.75, { opacity:1,y:0,stagger:0.1,delay:-0.55,ease: "power2.inOut" });
        tl.to("section.hero-v6 p.title_bg",0.75, { opacity:1,y:0,stagger:0.1,delay:0.55,ease: "power2.inOut" });

        //INIT ANIM

        $('.container-bloc-item').mouseleave( function(e){
            gsap.to( $(this).find('.bloc-item') , {duration: 0.3, scale:1, x: 0, y: 0} );
        });

        $('.container-bloc-item').mousemove( function(e){   
            parallaxIt(e, 80);
        });
                    
        function parallaxIt(e, movement){
             
            var $this = $(e.target);            
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;
            
            gsap.to( $this.find('.bloc-item'), { 
                duration: 0.3,
                x: (relX - $this.width()/2) / $this.width() * movement,
                y: (relY - $this.height()/2) / $this.height() * movement,
                ease: "power2.easeOut"
            });
            
        }

        jQuery("section.hero-v6 div.bloc-items div.container-bloc-item").each(function() {
            jQuery(this).hover(function() {
                jQuery("section.hero-v6 div.bloc-items div.container-bloc-item").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).find("div.bloc-item").data("id");
                jQuery("section.hero-v6 div.bloc-imgs div.bloc-img").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })

            })
        })
        
    }
})
