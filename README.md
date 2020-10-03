# p5.tween

> With p5.tween you can create easily animations as tweens

## Usage

1. Add p5.tween.min.js to your sketch after p5.js
2. Add a simple tween to your sketch


## Easing functions
You can use different easing functions for your tween to change the acceleration:
```js
tween.addMotion('width', 12, 100, 'easeOutQuad')
```
 * linear: no easing, no acceleration
 * easeInQuad: accelerating from zero velocity
 * easeOutQuad: decelerating to zero velocity
 * easeInOutQuad: acceleration until halfway, then deceleration 
 * easeInCubic: accelerating from zero velocity 
 * easeOutCubic: decelerating to zero velocity 
 * easeInOutCubic: acceleration until halfway, then deceleration 
 * easeInQuart: accelerating from zero velocity 
 * easeOutQuart: decelerating to zero velocity
 * easeInOutQuart: acceleration until halfway, then deceleration
 * easeInQuint: accelerating from zero velocity
 * easeOutQuint: decelerating to zero velocity 
 * easeInOutQuint: acceleration until halfway, then deceleration