jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-section")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        //INIT TIMELINE
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.hero-section",
                start:"-=250",
                //toggleClass: {targets: "section.hero-section svg", className: "active"}
            }
        });
        //INIT TIMELINE

        jQuery(function() {
            var visited = sessionStorage['visited'] || false;
            if (!visited) {
                sessionStorage['visited'] = true;
                //INIT ANIM
                tl.from("header",0.75, { top:'-50px',opacity:0,delay:0,ease: "power2.Out" });
                tl.set("section.hero-section", { className: 'active'},"+=0");
                tl.staggerTo("section.hero-section h1 span.char",0.35, { opacity:1,x:0,y:0,stagger:0.025,ease: "power2.Out" });
                tl.staggerTo("section.hero-section div.bloc-imgs div.bloc",2, { opacity:1,stagger:0.25,ease: "power2.Out" });
                tl.to("section.hero-section p",1, { opacity:1,y:0,delay:-5,ease: "power2.inOut" });
                tl.to("section.hero-section a.btn",0.75, { opacity:1,y:0,delay:-5.25,ease: "power2.inOut" });
                //INIT ANIM
            }else{
                //INIT ANIM
                tl.staggerTo("section.hero-section h1 span.char",0.35, { opacity:1,x:0,y:0,stagger:0.025,ease: "power2.Out" });
                tl.staggerTo("section.hero-section div.bloc-imgs div.bloc",2, { opacity:1,stagger:0.25,ease: "power2.Out" });
                tl.to("section.hero-section p",1, { opacity:1,y:0,delay:-3.5,ease: "power2.inOut" });
                tl.to("section.hero-section a.btn",0.75, { opacity:1,y:0,delay:-3.75,ease: "power2.inOut" });
                tl.set("section.hero-section", { className: 'active',delay:-4.75},"+=0");

                //INIT ANIM
            }
        });
        
    }
})
