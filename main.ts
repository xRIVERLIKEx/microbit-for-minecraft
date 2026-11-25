/**
 * micro:bit for Minecraft — Cleverlike
 * Code a real BBC micro:bit (and the micro:bit in the world) from Code Builder.
 * Needs: the Cleverlike micro:bit Remote program on the micro:bit and the micro:bit Link Bridge running
 * (Minecraft: /connect 127.0.0.1:19140).
 */

enum MbButton {
    //% block="A"
    A,
    //% block="B"
    B
}

enum MbIcon {
    //% block="heart"
    Heart,
    //% block="small heart"
    SmallHeart,
    //% block="yes"
    Yes,
    //% block="no"
    No,
    //% block="happy"
    Happy,
    //% block="sad"
    Sad,
    //% block="diamond"
    Diamond,
    //% block="square"
    Square,
    //% block="arrow up"
    ArrowUp,
    //% block="skull"
    Skull,
    //% block="sword"
    Sword
}

//% color=#00a4a6 icon="" block="micro:bit" weight=200
namespace microbit {
    let ICONS: string[] = [
        "0101011111111110111000100", // heart
        "0000001010011100010000000", // small heart
        "0000000001000101010001000", // yes
        "1000101010001000101010001", // no
        "0000001010000001000101110", // happy
        "0000001010000000111010001", // sad
        "0010001010100010101000100", // diamond
        "1111110001100011000111111", // square
        "0010001110101010010000100", // arrow up
        "0111010101111110111001110", // skull
        "0010000100001000111000100"  // sword
    ]
    export let debug = false   // set microbit.debug = true to see each step in chat
    let ready = false
    let handlerA: () => void = null
    let handlerB: () => void = null

    function note(text: string) {
        if (debug) player.say("micro:bit: " + text)
    }

    function setup() {
        if (ready) return
        ready = true
        player.execute("gamerule sendcommandfeedback false")
        player.execute("scoreboard objectives add mb dummy")
        player.execute("tickingarea add 0 250 0 1 250 0 mblink")
        note("ready")
        // Button mailbox: the bridge puts a gold block at 0 250 0 (A) or 1 250 0 (B)
        loops.forever(function () {
            if (blocks.testForBlock(GOLD_BLOCK, world(0, 250, 0))) {
                blocks.place(AIR, world(0, 250, 0))
                note("button A")
                if (handlerA) handlerA()
            }
            if (blocks.testForBlock(GOLD_BLOCK, world(1, 250, 0))) {
                blocks.place(AIR, world(1, 250, 0))
                note("button B")
                if (handlerB) handlerB()
            }
        })
    }

    // what: 1 = picture (in led), 2 = number (in num). seq goes up by one for every message.
    function send(what: number, name: string, value: number) {
        setup()
        player.execute("scoreboard players set " + name + " mb " + value)
        player.execute("scoreboard players set what mb " + what)
        player.execute("scoreboard players add seq mb 1")
        note("sent " + name + " " + value)
    }

    function sendLeds(bits: string) {
        let v = 0
        let p = 1
        for (let i = 0; i < 25; i++) {
            if (bits.charAt(i) == "1") v += p
            p *= 2
        }
        send(1, "led", v)
    }

    /**
     * Show a picture on the micro:bit
     */
    //% block="show icon $icon on micro:bit"
    //% weight=100
    export function showIcon(icon: MbIcon) {
        sendLeds(ICONS[icon])
    }

    /**
     * Show a number on the micro:bit
     */
    //% block="show number $n on micro:bit"
    //% weight=90
    export function showNumber(n: number) {
        send(2, "num", Math.round(n))
    }

    /**
     * Turn off all the micro:bit's lights
     */
    //% block="clear micro:bit screen"
    //% weight=80
    export function clearScreen() {
        sendLeds("0000000000000000000000000")
    }

    /**
     * Run code when a button on the micro:bit is pressed
     */
    //% block="on micro:bit button $button pressed"
    //% weight=110
    export function onButtonPressed(button: MbButton, handler: () => void) {
        if (button == MbButton.A) handlerA = handler
        else handlerB = handler
        setup()
    }
}
