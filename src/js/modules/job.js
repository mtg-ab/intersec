jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("job")){

        //INIT GSAP
        const { gsap } = require("gsap/dist/gsap");
        var scrollTrigger = require('gsap/scrollTrigger');
        gsap.registerPlugin(scrollTrigger);
        //INIT GSAP

        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://www.workable.com/api/accounts/intersec-group/',
            method: 'GET',
            dataType: "jsonp",
            /*
            headers: {
                Accept: 'application/json',
                Authorization: '9b103ea17c955cdea2c42e8459d9f68f2263f82003f741f7231f92e4c7bdf33f'
            }
            */
        };
          
        $.ajax(settings).done(function (response) {
            jQuery("section.hero-career p.figure").html(response.jobs.length)
            var my_categories = { };
            var counterList = [];
            $.each(response.jobs, function(i, obj) {
                jQuery("section.job div.bloc-offers").append('<a href="'+obj.shortlink+'" target="_blank" rel="noopener" data-type="'+obj.department+'" class="bloc bloc-liquid-menu"><div class="circles"><svg width="25" class="line-outline" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="13" r="11" stroke="#2F2F2F" stroke-linecap="round" stroke-dasharray="1 0"></circle></svg><svg width="137" class="line-dashed" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.15" numOctaves="3" result="warp"></feTurbulence><feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp"></feDisplacementMap></filter></defs><circle cx="66" cy="66" r="61" stroke="#f1762c" class="cursor__inner" fill="transparent" style="filter:url("#filter-1")" stroke-width="1.5px" stroke-linecap="round" stroke-dasharray="1 5"></circle></svg> </div><p class="name">'+obj.title+'</p><div class="tags"><p class="city">'+obj.city+'</p></div></a>')
                my_categories[this.department] = true;
                counterList.push(obj.department);
            })

            $.extend({
                distinct : function(anArray) {
                   var result = [];
                   $.each(anArray, function(i,v){
                       if ($.inArray(v, result) == -1) result.push(v);
                   });
                   return result;
                }
            });

            var uniqueCounterList= $.distinct(counterList);
            var html = "";
            $.each(uniqueCounterList,function(j,itemUnique){
                if(itemUnique == 'No job matching your profile : send us your resume'){
                    html += "";
                }else{
                    if(itemUnique == 'R&D'){
                        html += "<p class='title rd selected' data-type='"+itemUnique+"'>"+itemUnique+"<span>"+(response.jobs.filter(function(o) { return o.department == itemUnique }).length)+"</span></p>";
                    }else{
                        html += "<p class='title' data-type='"+itemUnique+"'>"+itemUnique+"<span>"+(response.jobs.filter(function(o) { return o.department == itemUnique }).length)+"</span></p>";
                    }
                }
            });
            jQuery("div.bloc-tags").html(html);

            jQuery( "section.job div.bloc-offers a.bloc" ).each(function( index ) {
                if(jQuery(this).data("type") == "R&D"){
                    jQuery(this).addClass('selected')
                }else{
                    jQuery(this).removeClass('selected')
                }
            })

            jQuery( "section.job div.bloc-tags p.title" ).each(function( index ) {
                jQuery(this).click(function( index ) {
                    jQuery( "section.job div.bloc-tags p.title" ).removeClass("selected");
                    jQuery(this).addClass("selected");
                    var type = jQuery(this).data("type");
                    jQuery( "section.job div.bloc-offers a.bloc" ).each(function( index ) {
                        if(jQuery(this).data('type') == type){
                            jQuery(this).addClass('selected')
                        }else{
                            jQuery(this).removeClass('selected')
                        }
                    })
                    
                })
            })

            //INIT TIMELINE
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "section.job",
                    start:"-=650",
                    toggleClass: {targets: "section.job", className: "active"},
                }
            });
            //INIT TIMELINE

            //INIT ANIM
            tl.staggerTo("section.job div.bloc-tags p.title",0.45, { opacity:1,y:0,stagger:0.1,ease: "power2.inOut" });
            tl.staggerTo("section.job div.bloc-offers a.bloc",0.55, { opacity:1,y:0,stagger:0.1,ease: "power2.inOut" });
            //INIT ANIM

        });

    }
})
