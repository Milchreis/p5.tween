namespace p5.tween {

    class TweenManager {

        private tweens: { name: string, tween: Tween }[] = [];

        /**
         * Returns the Tween with the given name. 
         * Expects a previous call of addTween(name)
         * @param name the name for the wanted Tween
         */
        getTween(name: string): Tween {
            return this.tweens.find(t => t.name === name).tween
        }

        /**
         * Adds a new Tween to the TweenManager
         * 
         * @param object The effected object of this tween
         * @param name The name for this Tween, to get is later back from TweenManager
         */
        addTween(object, name: string) {
            this.tweens.push({ name, tween: new Tween(object) })
        }

        /**
         * Updates all Tweens
         * @param deltaTime expects the passed time since the last call in milliseconds 
         */
        update(deltaTime: number) {
            for (let tweenItem of this.tweens) {
                tweenItem.tween.update(deltaTime)
            }
        }
    }

    export const manager = new TweenManager()

    // Register the manager.update() method to call it before each draw loop 
    p5['prototype'].registerMethod('pre', () => manager.update(p5['deltaTime']));
}