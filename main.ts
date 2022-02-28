input.onButtonPressed(Button.A, function () {
    basic.showString(String2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.Shake, function () {
    Sprite = game.createSprite(1, 4)
})
let Sprite: game.LedSprite = null
let String2 = ""
basic.showIcon(IconNames.Heart)
basic.showNumber(4)
basic.showString("Hello!")
String2 = "Hello!"
let Number2 = 4
basic.forever(function () {
	
})
