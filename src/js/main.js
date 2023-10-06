/**
 * Main.js
 *
 * @since 1.0.0
 */

/*Import Plugin
var Isotope = require('isotope-layout');
var Flickity = require('flickity');
var InfiniteScroll = require('infinite-scroll');
var Sticky = require('sticky-js');
*/

var Flickity = require('flickity');
var Flickity = require('flickity-fade');
import Splitting from "splitting";
import { gsap } from "gsap";

//import * as THREE from 'three';



Splitting({
    target: "h2, [data-splitting], h1, div.testimonial p,.figure-anim",
    by: "chars",
    key: null
}); 


const { ScrollSmoother } = require('gsap/dist/ScrollSmoother.js');
const { ScrollTrigger } = require('gsap/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

jQuery( document ).ready(function() {

    let smoother = ScrollSmoother.create({
        wrapper: "div#smooth-wrapper",
        content: "div#smooth-content",
        smooth: 0.5,
        effects: true
    });

    setTimeout(() => {
        smoother.refresh();
        ScrollTrigger.update( ) ;
    }, 1000)

    jQuery('a').each(function (index) {
        jQuery(this).click(function (index) {
            var href = $(this).attr('href');
            if (href.indexOf("#") > -1) {
                href = href.replace('#', '');
                console.log(href)
                jQuery('section').each(function (index) {
                    var idTitle = jQuery(this).attr('id');
                    if (href == idTitle) {
                        jQuery('html, body').animate({
                            scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset(jQuery(this), 'top +=120px')),
                        }, 750);
                    }
                })
            }
        })
    })

    jQuery('.btn').each(function (index) {
        jQuery(this).click(function (index) {
            var href = $(this).attr('data-href');
            if (href.indexOf("#") > -1) {
                var indexHash = href.indexOf("#");
                href = href.substring(indexHash + 1);  
                if(href == "meeting"){
                    jQuery('html, body').animate({
                        scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset(jQuery(".meetings-iframe-container"), 'top +=120px')),
                    }, 750);
                }else{
                    jQuery('section').each(function (index) {
                        var idTitle = jQuery(this).attr('id');
                        if (href == idTitle) {
                            jQuery('html, body').animate({
                                scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset(jQuery(this), 'top +=120px')),
                            }, 750);
                        }
                    })
                }           
                
            }
        })
    })
    
    jQuery("section.hero-v6 div.bloc-items div.container-bloc-item").each(function() {
        jQuery(this).click(function() {
            gsap.to(smoother, {
                scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset('body', 'top -700px')),
                duration: 0.55,
                ease : 'power2'
            });
        })
    })

    jQuery("section.faq div.items div.item").each(function() {
        jQuery(this).click(function() {
            smoother.refresh();
        })
    })

    if (window.matchMedia("(max-width: 768px)").matches) {
        jQuery("section.contain-technology div.bloc-items div.container-bloc-item").each(function() {
            jQuery(this).click(function() {
                gsap.to(smoother, {
                    scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset('body', 'top -1000px')),
                    duration: 0.55,
                    ease : 'power2'
                });
            })
        })
    }else{
        jQuery("section.contain-technology div.bloc-items div.container-bloc-item").each(function() {
            jQuery(this).click(function() {
                gsap.to(smoother, {
                    scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset('body', 'top -700px')),
                    duration: 0.55,
                    ease : 'power2'
                });
            })
        })
    }

})



















