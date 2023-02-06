input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopAllMotor()
})
radio.onReceivedValue(function (name, value) {
    if (name == "rychlost") {
        wuKong.setAllMotor(value, value)
    } else if (name == "smer") {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, value)
    }
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P15) < 30) {
        wuKong.stopAllMotor()
    }
})
radio.setGroup(16)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
wuKong.setAllMotor(0, 0)
basic.forever(function () {
	
})
