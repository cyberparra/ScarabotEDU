let ONOFF = 0
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber == 6) {
        ONOFF = 1
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
        OLED.showString("Scarabot Evo ON")
    }
    if (receivedNumber == 7) {
        ONOFF = 0
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        OLED.showString("Scarabot Evo Off")
    }
    if (ONOFF == 1) {
        if (receivedNumber == 0) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        if (receivedNumber == 1) {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        if (receivedNumber == 2) {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        if (receivedNumber == 3) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        if (receivedNumber == 5) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        // spin left
        if (receivedNumber == 8) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        // spin right
        if (receivedNumber == 9) {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        if (receivedNumber == 10) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
        }
        if (receivedNumber == 11) {
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        if (receivedNumber == 12) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
        if (receivedNumber == 13) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
        if (receivedNumber == 14) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
        if (receivedNumber == 15) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
        if (receivedNumber == 16) {
            pins.servoWritePin(AnalogPin.P1, 60)
            OLED.showString("Pen UP")
        }
        if (receivedNumber == 17) {
            pins.servoWritePin(AnalogPin.P1, 0)
            OLED.showString("Pen DOWN")
        }
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
pins.analogWritePin(AnalogPin.P1, 60)
ONOFF = 0
radio.setGroup(0)
OLED.init(64, 128)
basic.showLeds(`
    . # . # .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
OLED.showString("SCARABOT EVOLUTION")
OLED.showString("Temp: " + input.temperature() + "°C")
OLED.showString("ScaraBot Off")
OLED.showString("Pen DOWN")
