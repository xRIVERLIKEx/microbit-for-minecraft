/**
 * micro:bit for Minecraft — Cleverlike
 * Code a real BBC micro:bit (and the micro:bit in the world) from Code Builder.
 * Needs: the Cleverlike micro:bit Remote program (v0.4.0+) on the micro:bit and the micro:bit Link Bridge (v0.4.0+)
 * running (Minecraft: /connect 127.0.0.1:19140).
 * Icon pictures from pxt-microbit (MIT, Microsoft).
 */

enum MbButton {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="A+B"
    AB
}

enum MbGesture {
    //% block="shake"
    Shake,
    //% block="logo up"
    LogoUp,
    //% block="logo down"
    LogoDown,
    //% block="tilt left"
    TiltLeft,
    //% block="tilt right"
    TiltRight,
    //% block="screen up"
    ScreenUp,
    //% block="screen down"
    ScreenDown,
    //% block="free fall"
    FreeFall
}

enum MbDimension {
    //% block="x"
    X,
    //% block="y"
    Y,
    //% block="z"
    Z
}

enum MbRotation {
    //% block="pitch"
    Pitch,
    //% block="roll"
    Roll
}

enum MbIcon {
    //% block="heart"
    Heart,
    //% block="small heart"
    SmallHeart,
    //% block="happy"
    Happy,
    //% block="sad"
    Sad,
    //% block="confused"
    Confused,
    //% block="angry"
    Angry,
    //% block="asleep"
    Asleep,
    //% block="surprised"
    Surprised,
    //% block="silly"
    Silly,
    //% block="fabulous"
    Fabulous,
    //% block="meh"
    Meh,
    //% block="yes"
    Yes,
    //% block="no"
    No,
    //% block="triangle"
    Triangle,
    //% block="left triangle"
    LeftTriangle,
    //% block="chessboard"
    Chessboard,
    //% block="diamond"
    Diamond,
    //% block="small diamond"
    SmallDiamond,
    //% block="square"
    Square,
    //% block="small square"
    SmallSquare,
    //% block="scissors"
    Scissors,
    //% block="t-shirt"
    TShirt,
    //% block="roller skate"
    Rollerskate,
    //% block="duck"
    Duck,
    //% block="house"
    House,
    //% block="tortoise"
    Tortoise,
    //% block="butterfly"
    Butterfly,
    //% block="stick figure"
    StickFigure,
    //% block="ghost"
    Ghost,
    //% block="sword"
    Sword,
    //% block="giraffe"
    Giraffe,
    //% block="skull"
    Skull,
    //% block="umbrella"
    Umbrella,
    //% block="snake"
    Snake,
    //% block="rabbit"
    Rabbit,
    //% block="cow"
    Cow,
    //% block="quarter note"
    QuarterNote,
    //% block="eighth note"
    EighthNote,
    //% block="eighth note"
    EigthNote,
    //% block="pitchfork"
    Pitchfork,
    //% block="target"
    Target,
    //% block="arrow up"
    ArrowUp,
}

//% color=#00a4a6 icon="\uf2db" block="micro:bit" weight=200
//% groups=['Buttons and gestures', 'Sensors', 'Screen']
namespace microbit {
    let ICONS: string[] = [
        "0101011111111110111000100", // heart
        "0000001010011100010000000", // small heart
        "0000001010000001000101110", // happy
        "0000001010000000111010001", // sad
        "0000001010000000101010101", // confused
        "1000101010000001111110101", // angry
        "0000011011000000111000000", // asleep
        "0101000000001000101000100", // surprised
        "1000100000111110001100011", // silly
        "1111111011000000101001110", // fabulous
        "1101100000000100010001000", // meh
        "0000000001000101010001000", // yes
        "1000101010001000101010001", // no
        "0000000100010101111100000", // triangle
        "1000011000101001001011111", // left triangle
        "0101010101010101010101010", // chessboard
        "0010001010100010101000100", // diamond
        "0000000100010100010000000", // small diamond
        "1111110001100011000111111", // square
        "0000001110010100111000000", // small square
        "1100111010001001101011001", // scissors
        "1101111111011100111001110", // t-shirt
        "0001100011111111111101010", // roller skate
        "0110011100011110111000000", // duck
        "0010001110111110111001010", // house
        "0000001110111110101000000", // tortoise
        "1101111111001001111111011", // butterfly
        "0010011111001000101010001", // stick figure
        "0111010101111111111110101", // ghost
        "0010000100001000111000100", // sword
        "1100001000010000111001010", // giraffe
        "0111010101111110111001110", // skull
        "0111011111001001010011100", // umbrella
        "1100011011010100111000000", // snake
        "1010010100111101101011110", // rabbit
        "1000110001111110111000100", // cow
        "0010000100001001110011100", // quarter note
        "0010000110001011110011100", // eighth note
        "0010000110001011110011100", // eighth note
        "1010110101111110010000100", // pitchfork
        "0010001110110110111000100", // target
        "0010001110101010010000100", // arrow up
    ]
    export let debug = false   // set microbit.debug = true to see each step in chat
    let ready = false
    // event slots: gold block at (slot, 250, 0). 0 A, 1 B, 2 A+B, 3 logo, 4.. gestures
    let handlers: (() => void)[] = []
    let slots: number[] = []

    function note(text: string) {
        if (debug) player.say("micro:bit: " + text)
    }

    function setup() {
        if (ready) return
        ready = true
        player.execute("gamerule sendcommandfeedback false")
        player.execute("scoreboard objectives add mb dummy")
        player.execute("tickingarea add 0 250 0 15 251 7 mblink2")
        note("ready")
        loops.forever(function () {
            for (let i = 0; i < slots.length; i++) {
                const spot = world(slots[i], 250, 0)
                if (blocks.testForBlock(GOLD_BLOCK, spot)) {
                    blocks.place(AIR, spot)
                    note("event " + slots[i] + ": running your blocks")
                    const h = handlers[i]
                    h()
                    note("event " + slots[i] + ": done")
                }
            }
            if (slots.length == 0) loops.pause(200)
        })
    }

    function onSlot(slot: number, handler: () => void) {
        for (let i = 0; i < slots.length; i++) {
            if (slots[i] == slot) { handlers[i] = handler; setup(); return }
        }
        slots.push(slot)
        handlers.push(handler)
        setup()
    }

    // Messages to the bridge: <name> holds the value, <channel> counts messages, seq counts all
    function send(name: string, value: number, channel: string) {
        setup()
        note("sending " + name)
        player.execute("scoreboard players set " + name + " mb " + value)
        player.execute("scoreboard players add " + channel + " mb 1")
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
        send("led", v, "lseq")
    }

    // Ask the bridge for a sensor; it writes 8 bits at (0..7, 251, k) and a gold block at (15, 251, k) when done
    function readSensor(k: number): number {
        setup()
        const done = world(15, 251, k)
        blocks.place(AIR, done)
        send("req", k, "rseq")
        let tries = 0
        while (!blocks.testForBlock(GOLD_BLOCK, done)) {
            tries++
            if (tries > 40) { note("no answer for sensor " + k); return -1 }
            loops.pause(25)
        }
        let v = 0
        let p = 1
        for (let i = 0; i < 8; i++) {
            if (blocks.testForBlock(GOLD_BLOCK, world(i, 251, k))) v += p
            p *= 2
        }
        return v
    }

    // ---------- Buttons and gestures ----------

    /**
     * Run code when a button on the micro:bit is pressed
     */
    //% block="on micro:bit button $button pressed"
    //% group="Buttons and gestures" weight=110
    export function onButtonPressed(button: MbButton, handler: () => void) {
        onSlot(button == MbButton.A ? 0 : button == MbButton.B ? 1 : 2, handler)
    }

    /**
     * Run code when the micro:bit's gold logo is touched (micro:bit V2)
     */
    //% block="on micro:bit logo pressed"
    //% group="Buttons and gestures" weight=105
    export function onLogoPressed(handler: () => void) {
        onSlot(3, handler)
    }

    /**
     * Run code when the micro:bit is shaken, tilted or turned
     */
    //% block="on micro:bit $gesture"
    //% group="Buttons and gestures" weight=100
    export function onGesture(gesture: MbGesture, handler: () => void) {
        onSlot(4 + gesture, handler)
    }

    // ---------- Sensors ----------

    /**
     * The micro:bit's light level, from 0 (dark) to 255 (bright)
     */
    //% block="micro:bit light level"
    //% group="Sensors" weight=90
    export function lightLevel(): number {
        return readSensor(0)
    }

    /**
     * The micro:bit's temperature in °C
     */
    //% block="micro:bit temperature (°C)"
    //% group="Sensors" weight=85
    export function temperature(): number {
        return readSensor(1) - 128
    }

    /**
     * How hard the micro:bit is moving or tilting along x, y or z, in milli-g (about -2000 to 2000)
     */
    //% block="micro:bit acceleration (mg) $dimension"
    //% group="Sensors" weight=80
    export function acceleration(dimension: MbDimension): number {
        return (readSensor(2 + dimension) - 128) * 16
    }

    /**
     * How far the micro:bit is tipped, in degrees (-180 to 180)
     */
    //% block="micro:bit rotation (°) $kind"
    //% group="Sensors" weight=75
    export function rotation(kind: MbRotation): number {
        return (readSensor(5 + kind) - 128) * 2
    }

    // ---------- Screen ----------

    /**
     * Draw a picture on the micro:bit's screen
     */
    //% block="show leds on micro:bit"
    //% blockId=mbmc_show_leds
    //% imageLiteral=1
    //% group="Screen" weight=70
    export function showLeds(leds: string) {
        const text = "" + leds
        note("show leds (" + text.length + " characters)")
        let bits = ""
        for (let i = 0; i < text.length; i++) {
            const c = text.charAt(i)
            if (c == "#") bits += "1"
            else if (c == ".") bits += "0"
        }
        while (bits.length < 25) bits += "0"
        sendLeds(bits)
    }

    /**
     * Show a picture on the micro:bit
     */
    //% block="show icon $icon on micro:bit"
    //% group="Screen" weight=65
    export function showIcon(icon: MbIcon) {
        note("show icon " + icon)
        sendLeds(ICONS[icon])
    }

    /**
     * Show a number on the micro:bit
     */
    //% block="show number $n on micro:bit"
    //% group="Screen" weight=60
    export function showNumber(n: number) {
        send("num", Math.round(n), "nseq")
    }

    /**
     * Turn off all the micro:bit's lights
     */
    //% block="clear micro:bit screen"
    //% group="Screen" weight=55
    export function clearScreen() {
        sendLeds("0000000000000000000000000")
    }
}
