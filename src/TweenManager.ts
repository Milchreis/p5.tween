namespace p5.tween {

    class TweenManager {

        private tweens: Tween[] = [];

        update(deltaTime: any) {
            for (let tween of this.tweens) {
                tween.update(deltaTime)
            }
        }
    }

    export const manager = new TweenManager()

    p5['prototype'].registerMethod('pre', () => manager.update(p5['deltaTime']));
}