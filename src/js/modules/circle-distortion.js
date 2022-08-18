import { gsap } from 'gsap';
import { EventEmitter } from 'events';

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

export { map, lerp };

export default class Cursor extends EventEmitter {
    constructor(el) {
        super();
        this.DOM = {el: el};
        this.DOM.circleInner = this.DOM.el.querySelector('.cursor__inner');
        
        this.filterId = '#filter-1';
        this.DOM.feDisplacementMap = document.querySelector(`${this.filterId} > feDisplacementMap`);
        
        this.primitiveValues = {scale: 0};

        this.createTimeline();

        this.bounds = this.DOM.el.getBoundingClientRect();
        
        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.14},
            ty: {previous: 0, current: 0, amt: 0.14},
            radius: {previous: 50, current: 50, amt: 0.14}
        };

        this.listen();

    }

    createTimeline() {
        // init timeline
        this.tl = gsap.timeline({
            paused: true,
            onStart: () => {
                this.DOM.circleInner.style.filter = `url(${this.filterId}`;
            },
            onUpdate: () => {
                this.DOM.feDisplacementMap.scale.baseVal = this.primitiveValues.scale;
            },
            onComplete: () => {
                this.DOM.circleInner.style.filter = 'none';
            }
        })
        .to(this.primitiveValues, { 
            duration: 0.1,
            ease: 'Power2.easeInOut',
            startAt: {scale: 0},
            scale: 60
        })
        .to(this.primitiveValues, { 
            duration: 0.6,
            ease: 'Power2.easeInOut',
            scale: 0
        });
    }
    enter() {
        this.tl.restart();
    }
    leave() {
        this.tl.progress(1).kill();
    }
    listen() {
        this.on('enter', () => this.enter());
        this.on('leave', () => this.leave());
    }
}

const cursor = new Cursor(document.querySelector('.cursor-circle'));

[...document.querySelectorAll('div.bloc-liquid')].forEach(el => {
    el.addEventListener('click', () => cursor.emit('enter'));
});

[...document.querySelectorAll('a.bloc-liquid-menu')].forEach(el => {
    el.addEventListener('mouseenter', () => cursor.emit('enter'));
    el.addEventListener('mouseleave', () => cursor.emit('leave'));
});