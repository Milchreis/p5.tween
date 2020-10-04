var p5;
(function (p5) {
    var tween;
    (function (tween) {
        tween.EASINGS = {
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => t * (2 - t),
            easeInOutQuad: (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            easeInCubic: (t) => t * t * t,
            easeOutCubic: (t) => (--t) * t * t + 1,
            easeInOutCubic: (t) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
            easeInQuart: (t) => t * t * t * t,
            easeOutQuart: (t) => 1 - (--t) * t * t * t,
            easeInOutQuart: (t) => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
            easeInQuint: (t) => t * t * t * t * t,
            easeOutQuint: (t) => 1 + (--t) * t * t * t * t,
            easeInOutQuint: (t) => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
        };
    })(tween = p5.tween || (p5.tween = {}));
})(p5 || (p5 = {}));
//# sourceMappingURL=Easings.js.map
var p5;
(function (p5) {
    var tween;
    (function (tween) {
        class Tween {
            constructor(objStart) {
                this.motions = [];
                this.keyChanges = [];
                this.active = false;
                this.isLoop = false;
                this.currentMotionIndex = 0;
                this.obj = objStart;
            }
            resetToStart() {
                for (let key in this.start) {
                    this.obj[key] = this.start[key];
                }
                this.motionStart = this.createStartObject(this.start);
            }
            createStartObject(objStart) {
                const changes = {};
                this.keyChanges.forEach(key => changes[key] = objStart[key]);
                return changes;
            }
            addToKeyChangeList(key) {
                if (!this.keyChanges.includes(key))
                    this.keyChanges.push(key);
            }
            interpolation(start, stop, amt, easing = 'linear') {
                let easingFunction = !(easing in tween.EASINGS) ? tween.EASINGS['linear'] : tween.EASINGS[easing];
                return easingFunction(amt) * (stop - start) + start;
            }
            addMotion(key, target, duration, easing = 'linear') {
                this.addToKeyChangeList(key);
                this.motions.push({
                    actions: [{ key, target }],
                    duration,
                    leftTime: 0,
                    easing
                });
                return this;
            }
            addMotions(actions, duration, easing = 'linear') {
                actions.flatMap(a => a.key).forEach((key) => this.addToKeyChangeList(key));
                this.motions.push({
                    actions,
                    duration,
                    leftTime: 0,
                    easing
                });
                return this;
            }
            resetMotions() {
                this.motions = [];
            }
            startLoop() {
                this.isLoop = true;
                this.startTween();
            }
            startTween() {
                this.start = this.createStartObject(this.obj);
                this.motionStart = this.createStartObject(this.obj);
                this.currentMotionIndex = 0;
                this.active = true;
            }
            update(deltaTime) {
                if (!this.active)
                    return;
                const motion = this.motions[this.currentMotionIndex];
                if (motion.leftTime >= motion.duration) {
                    motion.leftTime = 0;
                    this.motionStart = this.createStartObject(this.obj);
                    this.currentMotionIndex += 1;
                    if (this.currentMotionIndex >= this.motions.length) {
                        if (this.isLoop) {
                            this.resetToStart();
                            this.currentMotionIndex = 0;
                        }
                        else {
                            this.active = false;
                        }
                    }
                }
                motion.leftTime += deltaTime;
                if (!motion.actions)
                    return;
                for (let action of motion.actions) {
                    if (action.key && action.target) {
                        const progress = Math.min(motion.leftTime / motion.duration, 1.0);
                        this.obj[action.key] = this.interpolation(this.motionStart[action.key], action.target, progress, motion.easing);
                    }
                }
            }
        }
        tween.Tween = Tween;
    })(tween = p5.tween || (p5.tween = {}));
})(p5 || (p5 = {}));
//# sourceMappingURL=Tween.js.map
var p5;
(function (p5) {
    var tween;
    (function (tween) {
        class GeometricObjectTween extends tween.Tween {
            addMotionTo(object, duration, easing = 'linear') {
                let actions = [];
                if (object.x)
                    actions.push({ key: 'x', target: object.x });
                if (object.y)
                    actions.push({ key: 'y', target: object.y });
                if (object.width)
                    actions.push({ key: 'width', target: object.width });
                if (object.height)
                    actions.push({ key: 'height', target: object.height });
                if (object.w)
                    actions.push({ key: 'w', target: object.w });
                if (object.h)
                    actions.push({ key: 'h', target: object.h });
                if (object.angle)
                    actions.push({ key: 'angle', target: object.angle });
                if (object.rotation)
                    actions.push({ key: 'rotation', target: object.rotation });
                super.addMotions(actions, duration, easing);
            }
        }
        tween.GeometricObjectTween = GeometricObjectTween;
    })(tween = p5.tween || (p5.tween = {}));
})(p5 || (p5 = {}));
//# sourceMappingURL=GeometricObjectTween.js.map
var p5;
(function (p5) {
    var tween;
    (function (tween) {
        class TweenManager {
            constructor() {
                this.tweens = [];
            }
            getTween(name) {
                return this.tweens.find(t => t.name === name).tween;
            }
            addTween(object, name) {
                this.tweens.push({ name, tween: new tween.Tween(object) });
            }
            update(deltaTime) {
                for (let tweenItem of this.tweens) {
                    tweenItem.tween.update(deltaTime);
                }
            }
        }
        tween.manager = new TweenManager();
        p5['prototype'].registerMethod('pre', () => tween.manager.update(p5['deltaTime']));
    })(tween = p5.tween || (p5.tween = {}));
})(p5 || (p5 = {}));
//# sourceMappingURL=TweenManager.js.map