radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 9) {
        r = images.createBigImage(`
            . . # # . . . # . #
            . . # . # . # . # #
            . . # # . # . # # #
            . . # . . # # # . .
            . . . . . # . # . #
            `)
        r.showImage(30)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
let r: Image = null
radio.setGroup(105)
