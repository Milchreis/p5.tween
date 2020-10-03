namespace p5.tween {

    export class GeometricObjectTween extends Tween {

        addMotionTo(object: {
            x?: number, y?: number, width?: number, height?: number,
            w?: number, h?: number, angle?: number, rotation?: number
        },
            duration: number, easing: string = 'linear') {

            let actions = []

            if (object.x)
                actions.push({ key: 'x', target: object.x })

            if (object.y)
                actions.push({ key: 'y', target: object.y })

            if (object.width)
                actions.push({ key: 'width', target: object.width })

            if (object.height)
                actions.push({ key: 'height', target: object.height })

            if (object.w)
                actions.push({ key: 'w', target: object.w })

            if (object.h)
                actions.push({ key: 'h', target: object.h })

            if (object.angle)
                actions.push({ key: 'angle', target: object.angle })

            if (object.rotation)
                actions.push({ key: 'rotation', target: object.rotation })

            super.addMotions(actions, duration, easing)
        }
    }
}