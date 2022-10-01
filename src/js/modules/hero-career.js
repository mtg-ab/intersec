jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-career")){

        ///INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        var wh = jQuery("body").height();

        ScrollTrigger.create({
            trigger: "a.container-btn-join",
            pin: true,
            start: 'top 50%',
            scrub:1,
            end: () =>  '+='+wh+'',
            toggleClass: {targets: "div.btn-join", className: "active"}
        })

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-career",
                start:"-=450",
                toggleClass: {targets: "section.hero-career", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.hero-career div.bloc-imgs div.bloc",0, { opacity:1,y:0,stagger:0.15,ease: "power2.inOut" });
        tl.to("section.hero-career a.btn",0.75, { opacity:1,y:0,delay:-0.5,ease: "power2.inOut" });
        tl.to("section.hero-career div.btn-join",0.75, { opacity:1,delay:-0.5,ease: "power2.inOut" });
        //INIT ANIM
        
        jQuery("section.hero-career div.bloc").each(function() {
            jQuery(this).click(function() {
                jQuery("section.hero-career div.bloc-imgs").addClass("videoPlay");
                jQuery("section.hero-career div.bloc").removeClass('selected');
                jQuery(this).addClass('selected');
            })
        })

        jQuery(document).mouseup(function(e) {
            var container = jQuery("section.hero-career div.bloc");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.removeClass('selected')
                jQuery("section.hero-career div.bloc-imgs").removeClass("videoPlay");
            }
        });

        $('.container-btn-join').mouseleave( function(e){
            gsap.to( $(this).find('.btn-join') , {duration: 0.3, scale:1, x: 0, y: 0} );
        });

        $('.container-btn-join').mousemove( function(e){   
            parallaxIt(e, 80);
        });
                    
        function parallaxIt(e, movement){
             
            var $this = $(e.target);            
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;
            
            gsap.to( $this.find('.btn-join'), { 
                duration: 0.3,
                x: (relX - $this.width()/2) / $this.width() * movement,
                y: (relY - $this.height()/2) / $this.height() * movement,
                ease: "power2.easeOut"
            });
            
        }

        
    }
})
