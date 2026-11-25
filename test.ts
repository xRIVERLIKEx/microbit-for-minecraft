// tests go here; this will not be compiled when this package is used as an extension.
microbit.onButtonPressed(MbButton.A, function () {
    microbit.showIcon(MbIcon.Happy)
})
microbit.onButtonPressed(MbButton.B, function () {
    microbit.showNumber(microbit.temperature())
})
microbit.onGesture(MbGesture.Shake, function () {
    microbit.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
microbit.onLogoPressed(function () {
    microbit.showNumber(microbit.lightLevel())
})

// Steer the Agent by tilting the micro:bit
loops.forever(function () {
    if (microbit.isGesture(MbGesture.TiltLeft)) {
        agent.turn(LEFT_TURN)
    } else if (microbit.isGesture(MbGesture.TiltRight)) {
        agent.turn(RIGHT_TURN)
    } else if (microbit.isPressed(MbButton.A)) {
        agent.move(FORWARD, 1)
    }
})
