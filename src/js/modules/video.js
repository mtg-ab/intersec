jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("video")){

        var mrUtil = function ($) {
            var Util = {
                activateIframeSrc: function activateIframeSrc(iframe) {
                    var $iframe = $(iframe);
                    if ($iframe.attr('data-src')) {
                        $iframe.attr('src', $iframe.attr('data-src'));
                    }
                },
                idleIframeSrc: function idleIframeSrc(iframe) {
                    var $iframe = $(iframe);
                    $iframe.attr('data-src', $iframe.attr('src')).attr('src', '');
                }
            };
            return Util;
        }(jQuery);

        jQuery("section.video div.btn-play").click(function( index ) {        
            jQuery(this).toggleClass('play');
            jQuery(this).parent().find("img").fadeOut();
            jQuery(this).parent().find("video").trigger('play');
            
            var $iframe = jQuery(this).parent().find('iframe');
            mrUtil.activateIframeSrc($iframe);
            var symbol = jQuery(this).parent().find("iframe")[0].src.indexOf("?") > -1 ? "&" : "?";
            //modify source to autoplay and start video
            jQuery(this).parent().find("iframe")[0].src += symbol + "autoplay=1";

        })

        if(!jQuery("video").hasClass("btn-play")){
            setTimeout(
                function() 
                {
                    jQuery('section.video video').trigger('play');
                }, 50
            );
            
        }else{
            jQuery("section.video div.bloc-video video").click(function() {
                jQuery(this).parent().toggleClass('play');
                this.paused ? this.play() : this.pause();
            })
        }
        
    }
})
