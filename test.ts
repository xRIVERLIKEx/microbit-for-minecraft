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

// Steer the Agent by tilting the micro:bit: one forever + while loop per control works best
loops.forever(function () {
    while (microbit.isGesture(MbGesture.TiltLeft)) {
        agent.turn(LEFT_TURN)
    }
})
loops.forever(function () {
    while (microbit.isGesture(MbGesture.TiltRight)) {
        agent.turn(RIGHT_TURN)
    }
})
loops.forever(function () {
    while (microbit.isPressed(MbButton.A)) {
        agent.move(FORWARD, 1)
    }
})
