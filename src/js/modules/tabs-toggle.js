jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("tabs-toggle")){
        
        jQuery("section.tabs-toggle div.items div.item").each(function() {
            jQuery(this).click(function() {
                if(jQuery(this).hasClass("open")){
                    jQuery(this).removeClass('open')
                    jQuery(this).find("div.item-txt").css("height",0);
                }else{
                    jQuery( "section.tabs-toggle div.items div.item" ).removeClass('open')
                    jQuery( "section.tabs-toggle div.items div.item div.item-txt" ).css("height",0);
                    jQuery(this).addClass('open')
                    var h = jQuery(this).find("div.item-txt div.contain-txt").height();
                    var h = h + 20;
                    jQuery(this).find("div.item-txt").css("height",h);
                    var id = jQuery(this).data("id");
                    jQuery("section.tabs-toggle div.bloc-imgs a.bloc-img").each(function() {
                        if(jQuery(this).data("id") == id){
                            jQuery(this).addClass('selected')
                        }else{
                            jQuery(this).removeClass('selected')
                        }
                    })
                }
            })
        })

    }
})
