jQuery( document ).ready(function() {
    if(jQuery("header").length){

        jQuery("div.switch-language ").click(function() {
            jQuery(this).toggleClass('en')
            if(jQuery(this).hasClass('en')){
                jQuery("div.switch-language span.lang").html("EN")
            }else{
                jQuery("div.switch-language span.lang").html("FR")
            }
        })

    }
})
