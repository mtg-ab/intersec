jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("video")){

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
