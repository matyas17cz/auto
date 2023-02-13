input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopAllMotor()
})
radio.onReceivedValue(function (name, value) {
    if (name == "rychlost") {
        if (value > 0 && zastaveno == 1) {
            wuKong.stopAllMotor()
        } else {
            wuKong.setAllMotor(value, value)
            zastaveno = 0
        }
    } else if (name == "smer") {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, value)
    }
})
let vzdalenost = 0
let zastaveno = 0
radio.setGroup(16)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
wuKong.setAllMotor(0, 0)
zastaveno = 0
basic.forever(function () {
    vzdalenost = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P2)
    serial.writeValue("x", sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P2))
    if (vzdalenost > 0 && vzdalenost < 300) {
        wuKong.stopAllMotor()
        zastaveno = 1
    }
})
