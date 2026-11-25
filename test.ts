// tests go here; this will not be compiled when this package is used as an extension.
microbit.onButtonPressed(MbButton.A, function () {
    microbit.showIcon(MbIcon.Happy)
})
microbit.onButtonPressed(MbButton.B, function () {
    microbit.showNumber(42)
})
player.onChat("heart", function () {
    microbit.showIcon(MbIcon.Heart)
})
