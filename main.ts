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

enum MbPin {
    //% block="P0"
    P0,
    //% block="P1"
    P1,
    //% block="P2"
    P2
}

enum MbOnOff {
    //% block="on"
    On,
    //% block="off"
    Off
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
//% groups=['Buttons and gestures', 'Sensors', 'Screen', 'Pins and redstone']
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
    // Handlers are kept in plain variables (not a list): Code Builder didn't run handlers stored in a list.
    let h0: () => void = null
    let h1: () => void = null
    let h2: () => void = null
    let h3: () => void = null
    let h4: () => void = null
    let h5: () => void = null
    let h6: () => void = null
    let h7: () => void = null
    let h8: () => void = null
    let h9: () => void = null
    let h10: () => void = null
    let h11: () => void = null
    let slots: number[] = []

    function note(text: string) {
        if (debug) player.say("micro:bit: " + text)
    }

    function runSlot(slot: number) {
        if (slot == 0) { if (h0) h0() }
        else if (slot == 1) { if (h1) h1() }
        else if (slot == 2) { if (h2) h2() }
        else if (slot == 3) { if (h3) h3() }
        else if (slot == 4) { if (h4) h4() }
        else if (slot == 5) { if (h5) h5() }
        else if (slot == 6) { if (h6) h6() }
        else if (slot == 7) { if (h7) h7() }
        else if (slot == 8) { if (h8) h8() }
        else if (slot == 9) { if (h9) h9() }
        else if (slot == 10) { if (h10) h10() }
        else if (slot == 11) { if (h11) h11() }
    }

    function setup() {
        if (ready) return
        ready = true
        player.execute("gamerule sendcommandfeedback false")
        player.execute("scoreboard objectives add mb dummy")
        player.execute("tickingarea add 0 250 0 15 253 15 mblink5")
        note("ready")
        // The bridge also puts a gold block at (15, 250, 0) whenever anything happens, so each round
        // needs one check however many "on ..." blocks there are. A full check every 10th round
        // keeps it working with older bridges that don't set it.
        let rounds = 0
        loops.forever(function () {
            if (slots.length == 0) {
                loops.pause(200)
                return
            }
            rounds++
            let check = rounds % 10 == 0
            if (!check && blocks.testForBlock(GOLD_BLOCK, world(15, 250, 0))) {
                blocks.place(AIR, world(15, 250, 0))
                check = true
            }
            if (!check) return
            for (let i = 0; i < slots.length; i++) {
                const slot = slots[i]
                if (blocks.testForBlock(GOLD_BLOCK, world(slot, 250, 0))) {
                    blocks.place(AIR, world(slot, 250, 0))
                    note("event " + slot + ": running your blocks")
                    runSlot(slot)
                    note("event " + slot + ": done")
                }
            }
        })
    }

    function onSlot(slot: number, handler: () => void) {
        if (slot == 0) h0 = handler
        else if (slot == 1) h1 = handler
        else if (slot == 2) h2 = handler
        else if (slot == 3) h3 = handler
        else if (slot == 4) h4 = handler
        else if (slot == 5) h5 = handler
        else if (slot == 6) h6 = handler
        else if (slot == 7) h7 = handler
        else if (slot == 8) h8 = handler
        else if (slot == 9) h9 = handler
        else if (slot == 10) h10 = handler
        else if (slot == 11) h11 = handler
        if (slots.indexOf(slot) < 0) slots.push(slot)
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

    // Pictures: ONE command. "pic" = the 25 LED bits + a counter in the bits above (so the bridge sees every new
    // picture). The same picture again is skipped, so "show leds" inside a loop costs nothing after the first time.
    let lastPicture = -1
    let pictureCount = 0
    function sendLeds(bits: string) {
        setup()
        let v = 0
        let p = 1
        for (let i = 0; i < 25; i++) {
            if (bits.charAt(i) == "1") v += p
            p *= 2
        }
        if (v == lastPicture) return
        lastPicture = v
        pictureCount = pictureCount % 31 + 1
        player.execute("scoreboard players set pic mb " + (v + pictureCount * 33554432))
        note("sent picture " + v)
    }

    // Ask the bridge for a sensor; it writes 8 bits at (0..7, 251, k) and a gold block at (15, 251, k) when done
    // Two loops asking for the same sensor at the same time share one answer instead of getting in each other's way.
    let reading: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    let lastReading: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    function readSensor(k: number, nbits: number = 8): number {
        setup()
        if (reading[k]) {
            let waits = 0
            while (reading[k] && waits < 60) { loops.pause(20); waits++ }
            return lastReading[k]
        }
        // Bridge v0.9.2+ keeps each sensor that has been asked for once ready at y 253
        // (8 bits at x 0-7, z = sensor) with a gold "ready" block at (15, 253, sensor): just read it, no asking.
        // The first reading of a sensor asks the bridge (below), which then keeps that sensor ready.
        if (k <= 6 && nbits == 8 && blocks.testForBlock(GOLD_BLOCK, world(15, 253, k))) {
            let pv = 0
            let pp = 1
            for (let i = 0; i < 8; i++) {
                if (blocks.testForBlock(GOLD_BLOCK, world(i, 253, k))) pv += pp
                pp *= 2
            }
            lastReading[k] = pv
            return pv
        }
        reading[k] = true
        const done = world(15, 251, k)
        blocks.place(AIR, done)
        send("req", k, "rseq")
        let tries = 0
        let ok = true
        while (!blocks.testForBlock(GOLD_BLOCK, done)) {
            tries++
            if (tries > 40) { note("no answer for sensor " + k); ok = false; break }
            loops.pause(25)
        }
        let v = -1
        if (ok) {
            v = 0
            let p = 1
            for (let i = 0; i < nbits; i++) {
                if (blocks.testForBlock(GOLD_BLOCK, world(i, 251, k))) v += p
                p *= 2
            }
        }
        lastReading[k] = v
        reading[k] = false
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
     * Run code when the micro:bit's gold logo is touched.
     * micro:bit V2 only: the V1 has no touch logo (look for the small microphone hole next to the logo on the front).
     */
    //% block="on micro:bit logo pressed (V2 only)"
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

    /**
     * True while the button is held down. Use it in "if" and "while".
     */
    //% block="micro:bit button $button is pressed"
    //% group="Buttons and gestures" weight=98
    export function isPressed(button: MbButton): boolean {
        setup()
        // The bridge keeps a gold block at (0, 252, 0) while A is held and at (1, 252, 0) while B is held.
        if (button == MbButton.A) return blocks.testForBlock(GOLD_BLOCK, world(0, 252, 0))
        if (button == MbButton.B) return blocks.testForBlock(GOLD_BLOCK, world(1, 252, 0))
        return blocks.testForBlock(GOLD_BLOCK, world(0, 252, 0)) && blocks.testForBlock(GOLD_BLOCK, world(1, 252, 0))
    }

    /**
     * True while the micro:bit is in this position or movement (for example tilted left).
     * Use it in "if" and "while", e.g. to steer the Agent by tilting the micro:bit.
     */
    //% block="micro:bit is $gesture"
    //% group="Buttons and gestures" weight=96
    export function isGesture(gesture: MbGesture): boolean {
        setup()
        // The bridge keeps a gold block at (gesture + 1, 252, 1) for the micro:bit's current position.
        return blocks.testForBlock(GOLD_BLOCK, world(gesture + 1, 252, 1))
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
    //% gridLiteral=1 gridLiteralOnColor="#ff3b3b" gridLiteralOffColor="#3a1010"
    // (not imageLiteral: the compiler turns that into a micro:bit-only image object, which Code Builder can't run)
    //% group="Screen" weight=70
    export function showLeds(leds: string) {
        const text = "" + leds
        note("show leds (" + text.length + " characters)")
        let bits = ""
        for (let i = 0; i < text.length; i++) {
            const c = text.charAt(i)
            if (c == "#" || (c >= "1" && c <= "9")) bits += "1"
            else if (c == "." || c == "0") bits += "0"
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
        lastPicture = -1   // the number replaces the picture, so the next picture must be sent again
        send("num", Math.round(n), "nseq")
    }

    /**
     * Scroll text across the micro:bit's screen (up to 30 letters, numbers and symbols)
     */
    //% block="show string $text on micro:bit"
    //% text.defl="Hello!"
    //% group="Screen" weight=58
    export function showString(text: string) {
        setup()
        lastPicture = -1
        // 4 characters per score (7 bits each), then tseq = counter * 64 + length: the bridge reads it when tseq changes
        let clean = ""
        for (let i = 0; i < text.length && clean.length < 30; i++) {
            const c = text.charCodeAt(i)
            if (c >= 32 && c <= 126) clean += text.charAt(i)
        }
        const n = clean.length
        for (let w = 0; w * 4 < n; w++) {
            let v = 0
            let p = 1
            for (let j = 0; j < 4; j++) {
                const i = w * 4 + j
                if (i < n) v += clean.charCodeAt(i) * p
                p *= 128
            }
            player.execute("scoreboard players set t" + w + " mb " + v)
        }
        textCount = textCount % 1000 + 1
        player.execute("scoreboard players set tseq mb " + (textCount * 64 + n))
        note("sent text " + clean)
    }
    let textCount = 0

    /**
     * Turn off all the micro:bit's lights
     */
    //% block="clear micro:bit screen"
    //% group="Screen" weight=55
    export function clearScreen() {
        sendLeds("0000000000000000000000000")
    }

    // ---------- Pins and redstone ----------

    let pinCount = 0
    let pinIsInput: boolean[] = [false, false, false]

    /**
     * Turn a micro:bit pin on or off (for example an LED or a buzzer wired to it)
     */
    //% block="set micro:bit pin $pin $state"
    //% group="Pins and redstone" weight=50
    export function setPin(pin: MbPin, state: MbOnOff) {
        setup()
        pinIsInput[pin] = false
        pinCount = pinCount % 1000 + 1
        // pinw = counter * 8 + pin * 2 + on
        player.execute("scoreboard players set pinw mb " + (pinCount * 8 + pin * 2 + (state == MbOnOff.On ? 1 : 0)))
    }

    /**
     * True while something wired to the pin turns it on (for example a switch or button)
     */
    //% block="micro:bit pin $pin is on"
    //% group="Pins and redstone" weight=48
    export function pinIsOn(pin: MbPin): boolean {
        setup()
        if (!pinIsInput[pin]) {
            pinIsInput[pin] = true
            pinCount = pinCount % 1000 + 1
            // pinm = counter * 4 + pin: tells the micro:bit to read this pin
            player.execute("scoreboard players set pinm mb " + (pinCount * 4 + pin))
        }
        // The bridge keeps a gold block at (pin, 252, 2) while the pin is on
        return blocks.testForBlock(GOLD_BLOCK, world(pin, 252, 2))
    }

    let linkCount = 0
    function sendLink(pin: MbPin, position: Position, kind: number) {
        setup()
        const p = position.toWorld()
        player.execute("scoreboard players set lx mb " + p.getValue(Axis.X))
        player.execute("scoreboard players set ly mb " + p.getValue(Axis.Y))
        player.execute("scoreboard players set lz mb " + p.getValue(Axis.Z))
        linkCount = linkCount % 1000 + 1
        // link = counter * 8 + pin * 2 + kind (0 = pin powers redstone, 1 = redstone lamp sets pin)
        player.execute("scoreboard players set link mb " + (linkCount * 8 + pin * 2 + kind))
        note("link pin " + pin + " kind " + kind)
    }

    /**
     * From now on, whenever the micro:bit pin is on, a redstone block appears at this position
     * (and disappears when it's off). Wire a switch or button to the pin on the real micro:bit.
     */
    //% block="when micro:bit pin $pin is on, power redstone at $position"
    //% position.shadow=minecraftCreatePosition
    //% group="Pins and redstone" weight=46
    export function linkPinToRedstone(pin: MbPin, position: Position) {
        pinIsInput[pin] = true
        sendLink(pin, position, 0)
    }

    /**
     * From now on, whenever the redstone lamp at this position is lit, the micro:bit pin turns on
     * (and off when the lamp goes out). Put a redstone lamp at the end of your circuit.
     */
    //% block="when redstone lamp at $position is lit, turn on micro:bit pin $pin"
    //% position.shadow=minecraftCreatePosition
    //% group="Pins and redstone" weight=44
    export function linkLampToPin(position: Position, pin: MbPin) {
        pinIsInput[pin] = false
        sendLink(pin, position, 1)
    }
}
