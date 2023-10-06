jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("txt-img")){


        let videos = document.querySelectorAll(".txt-img .bloc-video")

            videos.forEach((video,index)=>{
                video.addEventListener("click", () =>{
                    
                    videos.forEach((video,index)=>{
                        let cleanedUrl = "";
                        if (window.matchMedia("(min-width: 768px)").matches) {
                            if (videos[index].classList.contains('iframe')) {
                                video.parentElement.classList.remove("play")
                                videos[index].querySelector('iframe').setAttribute("src", cleanedUrl);
                            }
                        }
                        if (videos[index].classList.contains('video')) {
                            video.parentElement.classList.remove("play")
                            videos[index].querySelector('video').pause();
                        }
                    })
                    //IFRAME
                    if (video.querySelector('iframe')) {
                        if (window.matchMedia("(min-width: 768px)").matches) {
                            if (videos[index].classList.contains('play')) {
                                videos[index].parentElement.classList.remove("play")
                                videos[index].classList.remove("play")
                                videos[index].querySelector('iframe').setAttribute("src", cleanedUrl);
                            }else{
                                videos.forEach((video) => {
                                    videos[index].parentElement.classList.remove("play")
                                    video.classList.remove("play")
                                    if(video.querySelector('iframe')){
                                        let src = video.querySelector('iframe').getAttribute("data-src");
                                        let srcString = src.toString();
                                        let srcSplit = srcString;
                                        let cleanedUrl = srcSplit + "?showinfo=0&rel=0&autoplay=true";
                                        videos[index].querySelector('iframe').setAttribute("src", cleanedUrl);
                                    }
                                })
                                videos[index].parentElement.classList.add("play")
                                videos[index].classList.add("play")
                            }
                        }

                    }else{
                        //VIDEO HTML
                        if (videos[index].classList.contains('play')) {
                            videos[index].parentElement.classList.remove("play")
                            videos[index].classList.remove("play")
                            if(video.querySelector('video')){
                                videos[index].querySelector('video').pause();
                            }
                        }else{
                            videos.forEach((video) => {
                                video.parentElement.classList.remove("play")
                                video.classList.remove("play")
                                if(video.querySelector('video')){
                                    videos[index].querySelector('video').play();
                                }
                                
                            })
                            videos[index].parentElement.classList.add("play")
                            videos[index].classList.add("play")
                        }
                       
                    }
                    video.addEventListener('ended', function() {
                        videos[index].classList.remove('play');
                    });

                    
                })

                
                
                //RESPONSIVE MOBILE
                if (window.matchMedia("(max-width: 768px)").matches) {
                    videos.forEach((video) => {
                        if(video.querySelector('iframe')){
                            let src = video.querySelector('iframe').getAttribute("data-src");
                            let srcString = src.toString();
                            let srcSplit = srcString;
                            let cleanedUrl = srcSplit + "?showinfo=0&rel=0&autoplay=true";
                            video.querySelector('iframe').setAttribute("src", cleanedUrl);
                        }
                    })
                    
                }
                //RESPONSIVE MOBILE
                
            })

        /*

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

        jQuery("section.txt-img div.btn-play").click(function( index ) {        
            jQuery(this).toggleClass('play');
            jQuery(this).parent().find("img").fadeOut();
        })

        jQuery("section.txt-img div.btn-play-youtube").click(function( index ) { 
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
                    jQuery('section.txt-img video').trigger('play');
                }, 50
            );
            
        }else{
            jQuery("section.txt-img div.bloc-video video").click(function() {
                this.paused ? this.play() : this.pause();
            })
        }
        */
        
    }
})
