let ONOFF = 0
let pen = 0
input.onButtonPressed(Button.A, () => {
    if (ONOFF == 0) {
        ONOFF = 1
        radio.sendNumber(6)
    } else {
        ONOFF = 0
        radio.sendNumber(7)
    }
})
input.onButtonPressed(Button.B, () => {
    if (pen == 0) {
        pen = 1
        radio.sendNumber(17)
    } else {
        pen = 0
        radio.sendNumber(16)
    }
})
pen = 0
ONOFF = 0
radio.setGroup(0)
basic.showLeds(`
    . # . # .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(() => {
    if (ONOFF == 1) {
        if (input.rotation(Rotation.Pitch) < -25) {
            radio.sendNumber(2)
            basic.clearScreen()
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (input.rotation(Rotation.Roll) < -25) {
            radio.sendNumber(0)
            basic.clearScreen()
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else if (input.rotation(Rotation.Roll) > 25) {
            radio.sendNumber(1)
            basic.clearScreen()
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (input.rotation(Rotation.Pitch) > 25) {
            radio.sendNumber(3)
            basic.clearScreen()
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else {
            radio.sendNumber(5)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
    } else {
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
