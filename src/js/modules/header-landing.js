jQuery( document ).ready(function() {
    if(jQuery("header").hasClass("header-landing")){

        jQuery("div.switch-language ").click(function() {
            if(jQuery(this).hasClass('en')){
                jQuery("div.switch-language ").addClass('fr');
                jQuery("div.switch-language span.lang").html("FR");
                var url = jQuery('a.lang_switcher_link[data-language="fr"]').attr("href");
                window.location.href = ""+url+"";
            }else if(jQuery(this).hasClass('fr')){
                jQuery("div.switch-language ").addClass('en');
                jQuery("div.switch-language span.lang").html("EN")
                var url = jQuery('a.lang_switcher_link[data-language="en"]').attr("href");
                window.location.href = ""+url+"";
            }
        })

    }
})
