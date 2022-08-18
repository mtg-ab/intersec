jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("video")){

        setTimeout(
            function() 
            {
                jQuery('section.video video').trigger('play');
            }, 50
        );
        
    }
})
