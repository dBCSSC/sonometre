basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
    if (input.soundLevel() > 30) {
        pins.digitalWritePin(DigitalPin.P6, 1)
    } else {
    	
    }
    if (input.soundLevel() > 60) {
        pins.digitalWritePin(DigitalPin.P9, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
    if (input.soundLevel() > 120) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
