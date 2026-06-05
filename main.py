#init solenoid board
pins.i2c_write_buffer(0x20,Buffer.from_array([0x00, 0x00]))
#init buttons
pins.set_events(DigitalPin.P12, PinEventType.EDGE)
pins.set_events(DigitalPin.P13, PinEventType.EDGE)
pins.set_events(DigitalPin.P14, PinEventType.EDGE)
pins.set_events(DigitalPin.P15, PinEventType.EDGE)
pins.set_events(DigitalPin.P16, PinEventType.EDGE)

#variables

def hit(num):
    pins.i2c_write_buffer(0x20,Buffer.from_array([0x12, 1 << num]))
    basic.pause(80)
    pins.i2c_write_buffer(0x20,Buffer.from_array([0x12, 0]))

def butt_12():
    hit(1)


def butt_13():
    hit(2)


def butt_14():
    hit(3)


def butt_15():
    hit(4)


def butt_16():
    hit(5)


control.on_event(EventBusSource.MICROBIT_ID_IO_P12,EventBusValue.MICROBIT_PIN_EVT_RISE,butt_12)
control.on_event(EventBusSource.MICROBIT_ID_IO_P13,EventBusValue.MICROBIT_PIN_EVT_RISE,butt_14)
control.on_event(EventBusSource.MICROBIT_ID_IO_P14,EventBusValue.MICROBIT_PIN_EVT_RISE,butt_14)
control.on_event(EventBusSource.MICROBIT_ID_IO_P15,EventBusValue.MICROBIT_PIN_EVT_RISE,butt_15)
control.on_event(EventBusSource.MICROBIT_ID_IO_P16,EventBusValue.MICROBIT_PIN_EVT_RISE,butt_16)
