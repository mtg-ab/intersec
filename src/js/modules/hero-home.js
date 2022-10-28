jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-home")){

        var Flickity = require('flickity');

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tlImgs = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-home",
                start:"-=250",
                //toggleClass: {targets: "section.hero-home svg", className: "active"}
            }
        });
        //INIT TIMELINE

        var img = jQuery( "div.bloc-squares" ).data("img");
        var width = jQuery(window).width();
        var height = jQuery("div.bloc-squares").height();
        i = 6;
        for(var n = 0; n < 18; n++) {
            if(n < 6){
                var top = 0;
                var left = (width / 6)*n;
            }
            if(n > 5 && n < 12){
                var top = (height / 3);
                var left = (width / 6) * (n - i);
            }
            if(n > 11 && n < 18){
                var top = (height / 3) * 2;
                var left = (width / 6)* (n - (i*2));
            }

            const rndInt = Math.floor(Math.random() * 10) + 1;
            const position = Math.floor(Math.random() * 9) + 1;
            position = position * 10;
            jQuery( "div.bloc-squares" ).append( "<span class='square square-"+n+"' style='top:"+position+"%;left:"+position+"%'><span class='bg-square' data-speed='0.95' style='background-image:url("+img+");background-position:-"+left+"px -"+top+"px;'>square</span></span>" );
            //tlImgs.to("section.hero-home div.bloc-squares",1, {opacity:1,delay:1.9,ease: "power2.Out" });
            tlImgs.to("section.hero-home div.bloc-squares span.square-"+n+"",1.25, {scale:1,opacity:"0."+rndInt+"",top:top+"px",left:left+"px",delay:-1.35,ease: "power2.Out" });
            tlImgs.to("section.hero-home div.bloc-squares",1.25, {scale:1,opacity:"1",delay:-1.2,ease: "power2.Out" });

        }

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-home",
                start:"-=250",
                //toggleClass: {targets: "section.hero-home svg", className: "active"}
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.staggerTo("section.hero-home h1 span.char",0.35, { opacity:1,x:0,y:0,stagger:0.025,ease: "power2.Out" });
        tl.to("section.hero-home p",1, { opacity:1,y:0,delay:0,ease: "power2.inOut" });
        tl.to("section.hero-home a.btn",0.75, { opacity:1,y:0,delay:-0.75,ease: "power2.inOut" });
        tl.set("section.hero-home", { className: 'active',delay:-0.75},"+=0");
        //INIT ANIM

        var flickity = new Flickity( 'section.hero-home div.slider-words', {
            prevNextButtons: false,
            pageDots: false,
            cellAlign: "left",
            wrapAround: true
        })
        
    }
})
