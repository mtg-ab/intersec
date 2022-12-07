jQuery( document ).ready(function() {
    if(jQuery("div").hasClass("cursor-circle")){

        //CURSOR
    var mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;

    var circle = { 
        el:jQuery('#contain-cursor'),
        x:window.innerWidth/2, 
        y:window.innerHeight/2, 
        w:40, 
        h:40, 
        update:function(){
            var l = this.x-this.w/2; 
            var t = this.y-this.h/2; 
            this.el.css({ 'transform':'translate3d('+l+'px,'+t+'px, 0)' }); 
        }
    }

    jQuery(window).mousemove (function(e){
        mouseX = e.clientX;
        mouseY = e.clientY;
    })

    setInterval (move,1000/60)
    function move(){
        circle.x = lerp (circle.x, mouseX, 0.1);
        circle.y = lerp (circle.y, mouseY, 0.1);
        circle.update() 
    }

    function lerp (start, end, amt){
        return (1-amt)*start+amt*end
    }

    jQuery("a.btn").mouseenter(function(){
        jQuery("#contain-cursor").addClass("ui-state-hide");
    })
    jQuery("a.btn").mouseleave(function(){
        jQuery("#contain-cursor").removeClass("ui-state-hide");
    });

    jQuery(".link-hover").mouseenter(function(){
        jQuery("#contain-cursor").addClass("ui-link-hovered");
    })
    jQuery(".link-hover").mouseleave(function(){
        jQuery("#contain-cursor").removeClass("ui-link-hovered");
    });

    jQuery(".grab-hover").mouseenter(function(){
        jQuery("#contain-cursor").addClass("ui-grab-hovered");
    })
    jQuery(".grab-hover").mouseleave(function(){
        jQuery("#contain-cursor").removeClass("ui-grab-hovered");
    });

    jQuery(".left-hover").mouseenter(function(){
        jQuery("#contain-cursor").addClass("ui-left-hovered");
    })
    jQuery(".left-hover").mouseleave(function(){
        jQuery("#contain-cursor").removeClass("ui-left-hovered");
    });

    jQuery(".right-hover").mouseenter(function(){
        jQuery("#contain-cursor").addClass("ui-right-hovered");
    })
    jQuery(".right-hover").mouseleave(function(){
        jQuery("#contain-cursor").removeClass("ui-right-hovered");
    });
    //CURSOR

    }
})
