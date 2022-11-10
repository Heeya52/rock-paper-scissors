let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(0, 10)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.showLeds(`
        # # . # #
        # # . # .
        . . # # .
        # # . # .
        # # . . #
        `)
})
basic.forever(function () {
	
})
