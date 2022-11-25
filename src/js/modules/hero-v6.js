jQuery( document ).ready(function() {
    if(jQuery("div").hasClass("hero-v6")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(ScrollTrigger,scrollTrigger);
        //INIT GSAP   

        ScrollTrigger.create({
            trigger: "a.container-btn-join",
            pin: true,
            start: 'top 50%',
            scrub:1,
            end: () =>  '+=4200',
            toggleClass: {targets: "div.btn-join", className: "active"}
        })

        ScrollTrigger.create({
            trigger: "div.hero-v6 section.hero-v6",
            start: "top top", 
            pin: true, 
            scrub: 1,
            //markers:true,
            pinSpacing: false 
        });

        let tlhero = gsap.timeline({
            scrollTrigger: {
                trigger: "div.hero-v6 section.hero-v6",
                scrub: 1.1,
                start: "top top", 
            }
        })

        tlhero.to("div.hero-v6 section.hero-v6 div.contain-hero", 5,{ yPercent:-80,ease: "power2.Out" });

        ScrollTrigger.create({
            trigger: "div.hero-v6 section.contain-technology",
            start: "top top", 
            pin: true, 
            pinSpacing: false,
        });

        let tlContent = gsap.timeline({
            scrollTrigger: {
                trigger: "div.hero-v6 section.contain-technology",
                scrub: 1.1,
                start: "top -=160",
            }
        })

        tlContent.to("div.hero-v6 section.contain-technology div.contain-infos div.contain div.bloc-contain", 5,{ yPercent:-70,ease: "power2.Out" });

        function animItems(){
            //INIT TIMELINE
            let tlTranslate = gsap.timeline();
            //INIT TIMELINE

            //INIT ANIM
            tlTranslate.staggerTo("section.contain-technology div.container-bloc-item div.bloc-item",0.75, { opacity:1,y:0,stagger:0.1,ease: "power2.inOut" });
            //gsap.to( window, { duration : 1.5, scrollTo : { y: 600 }, ease : 'power2' } )
            //INIT ANIM
        }
        
        //INIT TIMELINE
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-v6",
                start:"-=10",
                toggleClass: {targets: "section.hero-v6", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.hero-v6 div.container-bloc-item div.bloc-item",0.75, { opacity:1,y:0,stagger:0.1,ease: "power2.inOut" });
        tl.to("section.hero-v6 div.bloc-imgs",0.75, { opacity:1,y:0,stagger:0.1,delay:-0.85,ease: "power2.inOut" });
        tl.to("section.hero-v6 div.txt",0.75, { opacity:1,delay:-0.75,ease: "power2.inOut" });
        tl.to("section.hero-v6 p.title_bg",0.75, { opacity:1,y:0,stagger:0.1,delay:-1.15,ease: "power2.inOut" });
        //INIT ANIM

        

        //INIT TIMELINE
        let tlAnim = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-v6",
                start:"top top",
                end:"bottom +=600",
                onLeave:function(){
                    animItems()
                    jQuery("section.contain-technology div.contain-technology").addClass('active')
                    jQuery("section.hero-v6").addClass('desactivate')
                },
                onEnterBack:function(){
                    animItems()
                    jQuery("section.contain-technology div.contain-technology").removeClass('active')
                    jQuery("section.hero-v6").removeClass('desactivate')
                }                  
            }
        });
        //INIT TIMELINE
        
        $('.container-bloc-item').mouseleave( function(e){
            gsap.to( $(this).find('.bloc-item') , {duration: 0.3, scale:1, x: 0, y: 0} );
        });

        $('.container-bloc-item').mousemove( function(e){   
            parallaxIt(e, 80);
        });

        $('.container-btn-join').mouseleave( function(e){
            gsap.to( $(this).find('.btn-join') , {duration: 0.3, scale:1, x: 0, y: 0} );
        });

        $('.container-btn-join').mousemove( function(e){   
            parallaxItBtn(e, 80);
        });

        function parallaxItBtn(e, movement){
             
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
            jQuery(this).click(function() {
                var id = jQuery(this).data("id");
                jQuery("section.contain-technology div.bloc-items div.container-bloc-item").each(function() {
                    if(jQuery(this).data("id") == id){
                        console.log('test')
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
                jQuery("section.contain-technology div.contain-infos div.contain").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
            })
        })

        jQuery("section.contain-technology div.bloc-items div.container-bloc-item").each(function() {
            jQuery(this).click(function() {
                var id = jQuery(this).data("id");
                jQuery("section.hero-v6 div.bloc-items div.container-bloc-item").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
                jQuery("section.hero-v6 div.bloc-imgs div.bloc-img").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
                jQuery("section.contain-technology div.bloc-items div.container-bloc-item").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
                jQuery("section.contain-technology div.contain-infos div.contain").each(function() {
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                        //INIT TIMELINE
                        const tlContain = gsap.timeline();
                        //INIT TIMELINE

                        //INIT ANIM
                        tl.to("section.contain-technology div.contain-infos",0, { opacity:0,ease: "power2.inOut" });
                        tl.to("section.contain-technology div.contain-infos",0.55, { opacity:1,ease: "power2.inOut" });
                        //INIT ANIM
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
            })

        })        
        
    }
})
