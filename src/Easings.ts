namespace p5.tween {
    // Thanks to https://gist.github.com/gre/1650294
    export const EASINGS = {
        // no easing, no acceleration
        linear: (t: number) => t,
        // accelerating from zero velocity
        easeInQuad: (t: number) => t * t,
        // decelerating to zero velocity
        easeOutQuad: (t: number) => t * (2 - t),
        // acceleration until halfway, then deceleration
        easeInOutQuad: (t: number) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        // accelerating from zero velocity 
        easeInCubic: (t: number) => t * t * t,
        // decelerating to zero velocity 
        easeOutCubic: (t: number) => (--t) * t * t + 1,
        // acceleration until halfway, then deceleration 
        easeInOutCubic: (t: number) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        // accelerating from zero velocity 
        easeInQuart: (t: number) => t * t * t * t,
        // decelerating to zero velocity 
        easeOutQuart: (t: number) => 1 - (--t) * t * t * t,
        // acceleration until halfway, then deceleration
        easeInOutQuart: (t: number) => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
        // accelerating from zero velocity
        easeInQuint: (t: number) => t * t * t * t * t,
        // decelerating to zero velocity
        easeOutQuint: (t: number) => 1 + (--t) * t * t * t * t,
        // acceleration until halfway, then deceleration 
        easeInOutQuint: (t: number) => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
        // elastic bounce effect at the beginning
        easeInElastic: (t: number) => (.04 - .04 / t) * Math.sin(25 * t) + 1 ,
        // elastic bounce effect at the end
        easeOutElastic: (t: number) => .04 * t / (--t) * Math.sin(25 * t),
        // elastic bounce effect at the beginning and end
        easeInOutElastic: (t: number) => (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1,
        easeInSin: (t: number) => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2) ,
        easeOutSin: (t: number) => Math.sin(Math.PI / 2 * t),
        easeInOutSin: (t: number) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2 
    }
}