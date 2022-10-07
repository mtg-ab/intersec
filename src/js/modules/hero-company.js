jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-company")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-company",
                start:"-=450",
                toggleClass: {targets: "section.hero-company", className: "active"},
            }
        });
        //INIT TIMELINE

        //INIT ANIM
        tl.to("section.hero-company p.title_bg",0.75, { opacity:1,delay:0,ease: "power2.inOut" });
        tl.to("section.hero-company div.txt",0.75, { opacity:1,delay:-0.5,ease: "power2.inOut" });
        //INIT ANIM

        var img = jQuery( "div.bloc-squares" ).data("img");
        var width = jQuery("div.bloc-squares").width();
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
            jQuery( "div.bloc-squares" ).append( "<span class='square square-"+n+"' style='top:"+position+"%;left:"+position+"%'><span class='bg-square' data-speed='0.95' style='background-image:url("+img+");background-position:-"+left+"px -"+top+"px;background-size:1225px'>square</span></span>" );
            //tlImgs.to("section.hero-home div.bloc-squares",1, {opacity:1,delay:1.9,ease: "power2.Out" });
            tl.to("section.hero-company div.bloc-squares span.square-"+n+"",1.25, {scale:1,top:top+"px",left:left+"px",delay:-1.35,ease: "power2.Out" });
            tl.to("section.hero-company div.bloc-squares span.square-"+n+" span.bg-square",1.25, {opacity:"0."+rndInt+"",delay:-1.35,ease: "power2.Out" });
            tl.to("section.hero-company div.bloc-squares",1.25, {scale:1,opacity:"1",delay:-1.2,ease: "power2.Out" });

        }
        
    }
})
