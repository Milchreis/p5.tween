# p5.tween

> With p5.tween you can create easily animations as tweens

## Usage

1. Add p5.tween.min.js to your sketch **after p5.js**
```html
<script src="p5.min.js"></script>
<script src="https://unpkg.com/p5.tween@1.0.0/dist/p5.tween.min.js"></script>
```
2. Add a tween to your sketch
```js
// Adding motions to the TweenManager
p5.tween.manager
    // First add a new Tween to the manager for the effected object
    .addTween(object, 'tween1')
    // First motion: change the width (means object.width) to 12 in 100ms
    .addMotion('width', 12, 100, 'easeInOutQuint')
    // Second motion: Change x and y to mouse position in 500ms at the same time
    .addMotions([
                { key: 'x', target: mouseX },
                { key: 'y', target: mouseY }
            ], 500, 'easeInOutQuint')
    // Start the tween
    .start()
```

## Examples
All examples are saved in the p5.tween collection: https://editor.p5js.org/Milchreis/collections/oHxcCR17k

### Create a tween with step by step motions
```js
p5.tween.manager.addTween(myShape)
    .addMotion('x', 10, 1000)
    .addMotion('y', 10, 1000)
    .addMotion('x', width - 10, 1000)
    .addMotion('y', height - 10, 1000)
    .addMotion('x', 200, 500)
    .addMotion('y', 200, 500)
    .startLoop()
```
[Example-Code](https://editor.p5js.org/Milchreis/present/u1IL1Tqzm)

### Create a tween with simultanious motions
```js
  p5.tween.manager.addTween(myShape)
    .addMotions([
        { key: 'x', target: 10 },
        { key: 'y', target: 10 },
      ], 1000)
    .addMotions([
        { key: 'x', target: width - 10 },
        { key: 'y', target: height - 10 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 200 },
        { key: 'y', target: 200 },
      ], 500)
    .startLoop()
```
[Example-Code](https://editor.p5js.org/Milchreis/present/VZVfZiFvL)

## API
 * [API-Doc](https://milchreis.github.io/p5.tween/docs)
  * [TweenManager methods](https://milchreis.github.io/p5.tween/docs/classes/_tweenmanager_.p5.tween.tweenmanager.html)
  * [Tween methods](https://milchreis.github.io/p5.tween/docs/classes/_tween_.p5.tween.tween.html)

### Most used methods
```js
// Add tween to manager and return the instance
let tween = p5.tween.manager.addTween(yourObject, 'name for your tween')

// Returns your previous added tween by name
let tween = p5.tween.manager.getTween('name for your tween')

// Adds a motion for the 'key' of 'yourObject' (means yourObject.key) 
// to the target value in the given time
tween.addMotion('key', targetValue, timeInMillis)

// Adds multiple motions to the tween, which will be played in the same time
tween.addMotions([{ key, target }])

// Removes all motions from tween
tween.resetMotions()

// Starts the tween as loop (will repeat with first motion when the last ends)
tween.startLoop()

// Starts the tween and plays all motions one time
tween.startTween()
```

### Easing functions
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
