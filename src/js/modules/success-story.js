jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("success-story")){

        jQuery("section.success-story div.bloc-tabs div.bloc").each(function() {
            jQuery(this).click(function() {
                jQuery("section.success-story div.bloc-tabs div.bloc").removeClass('selected')
                jQuery(this).addClass('selected')
                var id = jQuery(this).data("id");
                jQuery("section.success-story div.container-slider").each(function() {
                    var idSlider = jQuery(this).data("id");
                    if(jQuery(this).data("id") == id){
                        jQuery(this).addClass('selected')
                    }else{
                        jQuery(this).removeClass('selected')
                    }
                })
            })
        })

        jQuery('section.success-story').each(function(index) {
            var i = index + 1
            jQuery(this).addClass("success-story-"+i+"")
            var Flickity = require('flickity');
            jQuery(this).find('div.container-slider').each(function(index) {
                var index = index + 1;
                jQuery(this).parent().find('span.arrow-left').on( 'click', function() {
                    flickity.previous();
                });
                
                jQuery(this).parent().find('span.arrow-right').on( 'click', function() {
                    flickity.next();
                });
                
                var flickity = new Flickity('section.success-story-'+i+' div.bloc-slider-'+index+'', {
                    prevNextButtons: false,
                    pageDots: false,
                    cellAlign: "center",
                    //wrapAround: true
                }) 
            })
    
            var maxHeight = -1;
            jQuery(this).find('div.container-slider').each(function() {
                maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            });
    
            jQuery(this).find('div.contain-slider').height(maxHeight);
        })
        

    }
})
