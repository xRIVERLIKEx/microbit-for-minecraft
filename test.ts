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
