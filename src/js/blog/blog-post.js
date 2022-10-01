jQuery(document).ready(function() {

    jQuery('div.bloc-contain h2').each(function(index) {
        index += 1
        jQuery(this).attr('data-id', index);
        jQuery('div.bloc-anchor ul').append($('<li/>', {html: "<span class='step' data-id='"+index +"'>0"+index+"</span><span>"+$(this).text()+"</span>"}));
    });
    
    if(jQuery('div.bloc-anchor ul li').length < 1){
        jQuery('div.bloc-anchor').remove();
    }

    jQuery('div.bloc-anchor ul li').each(function(index) {
        jQuery(this).click(function(index) {
            var id = jQuery(this).find('span').data('id');
            jQuery("div.bloc-anchor ul li").removeClass('selected')
            jQuery(this).addClass('selected')
            jQuery('div.bloc-contain h2').each(function(index) {
                var idTitle = jQuery(this).data('id');
                if(id == idTitle){
                    jQuery('html, body').animate({
                        scrollTop: jQuery(this).offset().top - 150
                    }, 500);
                }
            })
            
        })
    })

    if(jQuery("div").hasClass("blog-post-cta")){

        
        if(jQuery("div#bloc-cta").length > 0){
            var el = document.querySelector('#cta');
            el.innerHTML = el.innerHTML.replace(/&nbsp;/g, '');
            let elem = document.querySelector('#bloc-cta');
            elem.append(document.querySelector('#cta'));
        }else{
            jQuery("div.blog-post-cta").remove()
        }
        
    }

    if(jQuery("div").hasClass("blog-post-testimonial")){

        if(jQuery("div#bloc-testimonial").length > 0){
            var el = document.querySelector('#testimonial');
            el.innerHTML = el.innerHTML.replace(/&nbsp;/g, '');
            let elem = document.querySelector('#bloc-testimonial');
            elem.append(document.querySelector('#testimonial'));
        }else{
            jQuery("div.blog-post-testimonial").remove()
        }
        
    }



})