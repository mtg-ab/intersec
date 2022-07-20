jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("tabs-toggle")){

        jQuery("section.tabs-image-hover div.bloc-tabs div.bloc").each(function() {
            jQuery(this).click(function() {
                jQuery("section.tabs-image-hover div.bloc-tabs div.bloc").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.tabs-image-hover div.bloc-columns div.blocs").each(function() {
                    var idSlider = jQuery(this).data("id");
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
            })
        })

        var maxHeight = -1;
        jQuery('section.tabs-image-hover div.bloc-columns div.blocs').each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        jQuery('section.tabs-image-hover div.bloc-columns').height(maxHeight);
        console.log(maxHeight);

        var $mouseX = 0, $mouseY = 0;
        var $xp = 0, $yp =0;
        
        jQuery("section.tabs-image-hover a.row").mousemove(function(e){
            $mouseX = event.pageX - jQuery(this).offset().left + 0;
            $mouseY = event.pageY - jQuery(this).offset().top + 0;   
        });
        
        var $loop = setInterval(function(){
            $xp += (($mouseX - $xp)/12);
            $yp += (($mouseY - $yp)/12);
            jQuery("section.tabs-image-hover a.row div.bloc-img").css({left:$xp +'px', top:$yp +'px'});  
        }, 30);

    }
})
