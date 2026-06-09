// init solenoid board
pins.i2cWriteBuffer(0x20, Buffer.fromArray([0x00, 0x00]))
// init buttons
pins.setEvents(DigitalPin.P12, PinEventType.Edge)
pins.setEvents(DigitalPin.P13, PinEventType.Edge)
pins.setEvents(DigitalPin.P14, PinEventType.Edge)
pins.setEvents(DigitalPin.P15, PinEventType.Edge)
pins.setEvents(DigitalPin.P16, PinEventType.Edge)
// variables
function hit(num: number) {
    pins.i2cWriteBuffer(0x20, Buffer.fromArray([0x12, 1 << num]))
    basic.pause(120)
    pins.i2cWriteBuffer(0x20, Buffer.fromArray([0x12, 0]))
}

basic.forever(function on_forever() {
    
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P12, EventBusValue.MICROBIT_PIN_EVT_RISE, function butt_12() {
    hit(2)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_PIN_EVT_RISE, function butt_13() {
    hit(3)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_PIN_EVT_RISE, function butt_14() {
    hit(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_RISE, function butt_15() {
    hit(5)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_PIN_EVT_RISE, function butt_16() {
    hit(6)
})
