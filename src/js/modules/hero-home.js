jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-home")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-home",
                start:"-=250",
                //toggleClass: {targets: "section.hero-home svg", className: "active"}
            }
        });
        //INIT TIMELINE

        jQuery(function() {
            var visited = sessionStorage['visited'] || false;
            if (!visited) {
                sessionStorage['visited'] = true;
                //INIT ANIM
                tl.to("div.circle",2, { opacity:1,rotation:0,delay:0,ease: "power2.inOut" });
                tl.staggerTo("div.circle p span",0.45, { opacity:1,y:0,stagger:0.055,ease: "power2.Out" });
                tl.to("div.loader svg circle",2, { strokeDashoffset:'0',delay:-1.85,ease: "power2.inOut" });
                tl.staggerTo("div.circle p span",0.55, { opacity:0,stagger:0.025,ease: "power2.Out" });
                tl.to("div.circle",1, { opacity:0,delay:-0.45,ease: "power2.Out" });
                tl.to("div.loader",0, { height:0,opacity:0,delay:0,ease: "power2.Out" });
                tl.set("section.hero-home", { className: 'active'},"+=0");
                tl.staggerTo("section.hero-home h1 span.char",0.35, { opacity:1,x:0,y:0,stagger:0.025,ease: "power2.Out" });
                tl.from("header",0.75, { top:'-50px',opacity:0,delay:0,ease: "power2.Out" });
                tl.staggerTo("section.hero-home div.bloc-imgs div.bloc",2, { opacity:1,stagger:0.25,ease: "power2.Out" });
                tl.to("section.hero-home p",1, { opacity:1,y:0,delay:-5,ease: "power2.inOut" });
                tl.to("section.hero-home a.btn",0.75, { opacity:1,y:0,delay:-5.25,ease: "power2.inOut" });
                //INIT ANIM
            }else{
                //INIT ANIM
                jQuery("div.loader").remove();
                tl.staggerTo("section.hero-home h1 span.char",0.35, { opacity:1,x:0,y:0,stagger:0.025,ease: "power2.Out" });
                tl.staggerTo("section.hero-home div.bloc-imgs div.bloc",2, { opacity:1,stagger:0.25,ease: "power2.Out" });
                tl.to("section.hero-home p",1, { opacity:1,y:0,delay:-3.5,ease: "power2.inOut" });
                tl.to("section.hero-home a.btn",0.75, { opacity:1,y:0,delay:-3.75,ease: "power2.inOut" });
                tl.set("section.hero-home", { className: 'active',delay:-4.75},"+=0");

                //INIT ANIM
            }
        });
        
    }
})
