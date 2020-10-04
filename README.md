# p5.tween

> With p5.tween you can create easily animations as tweens

## Usage

1. Add p5.tween.min.js to your sketch **after p5.js**
```html
<script src="p5.min.js"></script>
<script src="https://github.com/Milchreis/p5.tween/raw/master/dist/p5.tween.min.js"></script>
```
2. Add a tween to your sketch
```js
// Adding motions to the TweenManager
p5.tween.manager
    // First add a new Tween to the manager for the effected object
    .addTween(object, 'tween1')
    // First motion: change the width (means object.width) to 12 in 100ms
    .addMotion('width', 12, 100, 'easeInOutQuint')
    // Second Motion: Change x and y to mouse position in 500ms at the same time
    .addMotions([
                { key: 'x', target: mouseX },
                { key: 'y', target: mouseY }
            ], 500, 'easeInOutQuint')
    // Start the tween
    .start()
```

## Examples
todo

## API
 * [API-Doc](https://milchreis.github.io/p5.tween/)

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