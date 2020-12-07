let dobbelsteen1 = 0
let dobbelsteen2 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(dobbelsteen1 + dobbelsteen2)
})
input.onGesture(Gesture.Shake, function () {
    dobbelsteen1 = randint(1, 6)
    dobbelsteen2 = randint(1, 6)
    basic.showNumber(dobbelsteen1 + dobbelsteen2)
})
input.onButtonPressed(Button.B, function () {
    dobbelsteen1 = randint(4, 6)
    dobbelsteen2 = randint(4, 6)
    basic.showNumber(dobbelsteen1 + dobbelsteen2)
})
