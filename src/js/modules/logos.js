jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("logos-row")){
        

        if (window.matchMedia("(max-width: 768px)").matches) {

            var Flickity = require('flickity');

            let tickerSpeed = 0;
            
            let flickity = null;
            const slideshowEl = document.querySelector('section.logos-row div.container');

            const update = () => {
            if (flickity.slides) {
                flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
                flickity.selectedIndex = flickity.dragEndRestingSelect();
                flickity.updateSelectedSlide();
                flickity.settle(flickity.x);
            }
            window.requestAnimationFrame(update);
            };
    
            flickity = new Flickity(slideshowEl, {
                autoPlay: false,
                prevNextButtons: true,
                pageDots: false,
                draggable: true,
                wrapAround: true,
                selectedAttraction: 0.015,
                friction: 0.45,
                prevNextButtons: false,
            });
            flickity.x = 0;
    
            //
            //   Start Ticker
            //
            //////////////////////////////////////////////////////////////////////
    
            update();
            console.log('ok')
        } else {
            var Flickity = require('flickity');
            let flickity = null;
            const slideshowEl = document.querySelector('section.logos-row div.container');

            flickity = new Flickity(slideshowEl, {
                autoPlay: false,
                prevNextButtons: [ '<b>prev</b>', '<em>next</em>' ],
                pageDots: false,
                wrapAround: true,
                selectedAttraction: 0.01,
                friction: 0.15,
                prevNextButtons: false,
                draggable:true,
            });
            flickity.x = 0;
            $('span.btn-left').on( 'click', function() {
                flickity.previous();
            });
            
            $('span.btn-right').on( 'click', function() {
                flickity.next();
            });
        }

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.logos-row",
                start:"-=650",
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.logos-row figure",1, { opacity:1,y:0,delay:0,ease: "power2.inOut" });
        //INIT ANIM
        
    }
})
