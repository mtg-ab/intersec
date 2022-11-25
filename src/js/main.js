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
    }, 1000)
    
    jQuery("section.hero-v6 div.bloc-items div.container-bloc-item").each(function() {
        jQuery(this).click(function() {
            gsap.to(smoother, {
                // don't let it go beyond the maximum scrollable area
                scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset('body', 'top 0px')),
                duration: 0.75,
                ease: "power2.inOut"
            });
        })
    })

    
    if(jQuery("div").hasClass("hero-v6")){
        var hV6 = jQuery("section.hero-v6").height() + 1900 + 50;
        jQuery("div.hero-v6").css("height",hV6);
        smoother.refresh();
    }
    

    
    jQuery("section.hero-v6 div.bloc-items div.container-bloc-item").each(function() {
        jQuery(this).click(function() {
            gsap.to(smoother, {
                scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset('section.hero-v6', 'top -=200px')),
                duration: 1.35,
                ease : 'power2'
            });
            gsap.to(smoother, {
                scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset('section.contain-technology', 'top +=0px')),
                duration: 1.35,
                ease : 'power2'
            });
        })
    })

    jQuery("section.faq div.items div.item").each(function() {
        jQuery(this).click(function() {
            smoother.refresh();
        })
    })

    jQuery("section.contain-technology div.bloc-items div.container-bloc-item").each(function() {
        jQuery(this).click(function() {
            gsap.to(smoother, {
                scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset('section.contain-technology', 'top +=0px')),
                duration: 1.35,
                ease : 'power2'
            });
        })
    })

})



















