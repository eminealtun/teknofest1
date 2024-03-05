let miktar = 0
let engel = 0
let sayı = randint(0, 5)
basic.forever(function () {
    engel = pins.digitalReadPin(DigitalPin.P1)
    if (engel == 0) {
        basic.pause(2000)
        robotbit.Servo(robotbit.Servos.S2, 0)
        basic.pause(2000)
        robotbit.Servo(robotbit.Servos.S2, 180)
        basic.pause(1000)
        miktar += 1
        basic.showNumber(miktar)
        basic.pause(2000)
        basic.clearScreen()
        if (engel == 0 && sayı == miktar) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
            basic.pause(2000)
            robotbit.Servo(robotbit.Servos.S1, 0)
            basic.showIcon(IconNames.Happy)
            basic.pause(4000)
            robotbit.Servo(robotbit.Servos.S1, 180)
            basic.pause(2000)
        }
    }
    music.stopAllSounds()
})
