/**
 * micro:bit for Minecraft — Cleverlike
 * Code a real BBC micro:bit (and the micro:bit in the world) from Code Builder.
 * Needs: the Cleverlike micro:bit Remote program (v0.9.0+) on the micro:bit and the micro:bit Link Bridge (v0.10.0+)
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

enum MbRedstoneWhile {
    //% block="button A is pressed"
    ButtonA = 1,
    //% block="button B is pressed"
    ButtonB = 2,
    //% block="buttons A+B are pressed"
    ButtonsAB = 3,
    //% block="the logo is pressed"
    Logo = 4,
    //% block="pin P0 is on"
    P0 = 5,
    //% block="pin P1 is on"
    P1 = 6,
    //% block="pin P2 is on"
    P2 = 7,
    //% block="it is shaken"
    Shake = 8,
    //% block="logo up"
    LogoUp = 9,
    //% block="logo down"
    LogoDown = 10,
    //% block="tilted left"
    TiltLeft = 11,
    //% block="tilted right"
    TiltRight = 12,
    //% block="screen up"
    ScreenUp = 13,
    //% block="screen down"
    ScreenDown = 14,
    //% block="in free fall"
    FreeFall = 15,
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

enum MbNote {
    //% block="low C"
    LowC = 131,
    //% block="low D"
    LowD = 147,
    //% block="low E"
    LowE = 165,
    //% block="low F"
    LowF = 175,
    //% block="low G"
    LowG = 196,
    //% block="low A"
    LowA = 220,
    //% block="low B"
    LowB = 247,
    //% block="middle C"
    C = 262,
    //% block="D"
    D = 294,
    //% block="E"
    E = 330,
    //% block="F"
    F = 349,
    //% block="G"
    G = 392,
    //% block="A"
    A = 440,
    //% block="B"
    B = 494,
    //% block="high C"
    HighC = 523,
    //% block="high D"
    HighD = 587,
    //% block="high E"
    HighE = 659,
    //% block="high F"
    HighF = 698,
    //% block="high G"
    HighG = 784,
}

enum MbBeat {
    //% block="1 beat"
    One = 500,
    //% block="1/2 beat"
    Half = 250,
    //% block="1/4 beat"
    Quarter = 125,
    //% block="2 beats"
    Two = 1000,
    //% block="4 beats"
    Four = 2000,
}

enum MbMelody {
    //% block="dadadadum"
    Dadadadum = 1,
    //% block="entertainer"
    Entertainer = 2,
    //% block="prelude"
    Prelude = 3,
    //% block="ode"
    Ode = 4,
    //% block="nyan"
    Nyan = 5,
    //% block="ringtone"
    Ringtone = 6,
    //% block="funk"
    Funk = 7,
    //% block="blues"
    Blues = 8,
    //% block="birthday"
    Birthday = 9,
    //% block="wedding"
    Wedding = 10,
    //% block="funeral"
    Funeral = 11,
    //% block="punchline"
    Punchline = 12,
    //% block="baddy"
    Baddy = 13,
    //% block="chase"
    Chase = 14,
    //% block="ba ding"
    BaDing = 15,
    //% block="wawawawaa"
    Wawawawaa = 16,
    //% block="jump up"
    JumpUp = 17,
    //% block="jump down"
    JumpDown = 18,
    //% block="power up"
    PowerUp = 19,
    //% block="power down"
    PowerDown = 20,
}

enum MbSensor {
    //% block="light level"
    Light = 0,
    //% block="temperature (°C)"
    Temperature = 1,
    //% block="acceleration x (mg)"
    AccelX = 2,
    //% block="acceleration y (mg)"
    AccelY = 3,
    //% block="acceleration z (mg)"
    AccelZ = 4,
    //% block="pitch (°)"
    Pitch = 5,
    //% block="roll (°)"
    Roll = 6,
    //% block="sound level (V2 only)"
    Sound = 9
}

//% color=#00a4a6 icon="\uf2db" block="micro:bit" weight=200
//% groups=['Buttons and gestures', 'Sensors', 'Data', 'Screen', 'Sound', 'Radio', 'Pins and redstone', 'micro:bit in the world']
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
    const EXT_VERSION = 1102   // v0.11.2 (major * 10000 + minor * 100 + patch)
    let ready = false
    // event slots: gold block at (slot, 250, 0). 0 A, 1 B, 2 A+B, 3 logo, 4.. gestures, 12 radio number
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
    let h12: (receivedNumber: number) => void = null
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
        else if (slot == 12) { if (h12) h12(readRadioNumber()) }
    }

    function setup() {
        if (ready) return
        ready = true
        player.execute("gamerule sendcommandfeedback false")
        player.execute("scoreboard objectives add mb dummy")
        player.execute("tickingarea remove mblink5")
        player.execute("tickingarea add 0 250 0 15 254 15 mblink6")
        // tell the bridge which extension version Code Builder is using (it warns when the copy is old)
        player.execute("scoreboard players set extv mb " + EXT_VERSION)
        note("ready")
        // The bridge puts a gold block at (15, 250, 0) whenever anything happens, so each round needs
        // one check however many "on ..." blocks there are. Code Builder runs one command at a time,
        // so the loop rests 100 ms between checks: without the rest it took half of all commands
        // and made students' own loops (like steering the Agent) slow.
        loops.forever(function () {
            if (slots.length == 0) {
                loops.pause(200)
                return
            }
            loops.pause(100)
            if (!blocks.testForBlock(GOLD_BLOCK, world(15, 250, 0))) return
            blocks.place(AIR, world(15, 250, 0))
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

    // Sound and radio settings: TWO commands. The value carries its own counter (so the bridge sees every new one),
    // then seq tells the bridge to look.
    function sendCounted(name: string, value: number) {
        setup()
        player.execute("scoreboard players set " + name + " mb " + value)
        player.execute("scoreboard players add seq mb 1")
        note("sent " + name + " " + value)
    }
    let soundCount = 0

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
        if ((k <= 6 || k == 9) && nbits == 8 && blocks.testForBlock(GOLD_BLOCK, world(15, 253, k))) {
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
     * True while the micro:bit's gold logo is touched. Use it in "if" and "while".
     * micro:bit V2 only: on a V1 it is always false.
     */
    //% block="micro:bit logo is pressed (V2 only)"
    //% group="Buttons and gestures" weight=97
    export function logoIsPressed(): boolean {
        setup()
        // The bridge keeps a gold block at (2, 252, 0) while the logo is touched.
        return blocks.testForBlock(GOLD_BLOCK, world(2, 252, 0))
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
    // World coordinates of a position. A relative position like pos(2, 0, 0) prints as "~2 ~0 ~0":
    // each "~" number is added to the player's world position, so the link stays at that spot.
    // (toWorld() alone left relative numbers as they were, so links went to the wrong place.)
    function worldXYZ(position: Position): number[] {
        // keep only the numbers and "~" signs, whether it prints as "~2 ~0 ~0" or "(~2, ~0, ~0)"
        const text = position.toString()
        let clean = ""
        for (let i = 0; i < text.length; i++) {
            const c = text.charAt(i)
            clean += c == "(" || c == ")" || c == "," ? " " : c
        }
        const parts: string[] = []
        for (const t of clean.split(" ")) if (t.length > 0) parts.push(t)
        const here = player.position()
        const w = position.toWorld()
        const axes = [Axis.X, Axis.Y, Axis.Z]
        const out = [0, 0, 0]
        for (let i = 0; i < 3; i++) {
            const t = parts.length == 3 ? parts[i] : ""
            if (t.charAt(0) == "~") {
                out[i] = here.getValue(axes[i]) + (t.length > 1 ? parseInt(t.substr(1)) : 0)
            } else {
                out[i] = w.getValue(axes[i])
            }
        }
        return out
    }

    function sendLink(pin: MbPin, position: Position, kind: number) {
        setup()
        const xyz = worldXYZ(position)
        player.execute("scoreboard players set lx mb " + xyz[0])
        player.execute("scoreboard players set ly mb " + xyz[1])
        player.execute("scoreboard players set lz mb " + xyz[2])
        linkCount = linkCount % 1000 + 1
        // link = counter * 8 + pin * 2 + kind (0 = pin powers redstone, 1 = redstone lamp sets pin)
        player.execute("scoreboard players set link mb " + (linkCount * 8 + pin * 2 + kind))
        note("link pin " + pin + " kind " + kind)
    }

    // ---------- Redstone from the micro:bit in the world ----------
    // rsm = counter * 32 + code: 0 off, 1-15 "while ..." (MbRedstoneWhile), 31 on. The add-on puts a redstone
    // torch at each world micro:bit's feet while it's on, and puts back what was there after.
    let redstoneCount = 0
    function sendRedstone(code: number) {
        redstoneCount = redstoneCount % 1000 + 1
        sendCounted("rsm", redstoneCount * 32 + code)
    }

    /**
     * Turn the redstone power of the micro:bit in the world on or off. While it's on, a redstone torch stands
     * at the micro:bit's feet: run redstone dust from right next to the micro:bit to lamps, doors, pistons and more.
     */
    //% block="set micro:bit in the world redstone $state"
    //% group="Pins and redstone" weight=60
    export function setRedstone(state: MbOnOff) {
        sendRedstone(state == MbOnOff.On ? 31 : 0)
    }

    /**
     * The micro:bit in the world gives redstone power while this is true: a button or the logo is pressed,
     * a pin is on, or the micro:bit is tilted, shaken... Run it once (for example in "on start");
     * the bridge keeps it going, with no loop needed. "set micro:bit in the world redstone" stops it.
     */
    //% block="micro:bit in the world gives redstone while $source"
    //% group="Pins and redstone" weight=58
    export function redstoneWhile(source: MbRedstoneWhile) {
        sendRedstone(source)
    }

    /**
     * Old block, kept so older programs still run: use "micro:bit in the world gives redstone while pin ... is on"
     * and wire redstone dust from the micro:bit in the world instead.
     */
    //% block="when micro:bit pin $pin is on, power redstone at $position"
    //% position.shadow=minecraftCreatePosition
    //% deprecated=true
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

    // ---------- Sound ----------

    /**
     * Play a tone on the micro:bit, then wait until it has finished.
     * micro:bit V2: the built-in speaker. micro:bit V1: connect a speaker or headphones to pin 0 and GND.
     */
    //% block="play micro:bit tone $hz Hz for $ms ms"
    //% hz.min=0 hz.max=4000 hz.defl=262 ms.min=0 ms.max=5000 ms.defl=500
    //% group="Sound" weight=100
    export function playTone(hz: number, ms: number) {
        hz = Math.max(0, Math.min(4095, Math.round(hz)))
        ms = Math.max(0, Math.min(5110, Math.round(ms)))
        soundCount = soundCount % 31 + 1
        sendCounted("tone", soundCount * 2097152 + Math.floor(ms / 10) * 4096 + hz)
        loops.pause(ms)
    }

    /**
     * Play a note on the micro:bit, then wait until it has finished (1 beat = half a second).
     * micro:bit V2: the built-in speaker. micro:bit V1: connect a speaker or headphones to pin 0 and GND.
     */
    //% block="play micro:bit note $note for $beat"
    //% group="Sound" weight=98
    export function playNote(note: MbNote, beat: MbBeat) {
        playTone(note, beat)
    }

    /**
     * Start one of the micro:bit's tunes. Your code keeps going while it plays.
     * micro:bit V2: the built-in speaker. micro:bit V1: connect a speaker or headphones to pin 0 and GND.
     */
    //% block="play micro:bit melody $melody"
    //% group="Sound" weight=96
    export function playMelody(melody: MbMelody) {
        soundCount = soundCount % 31 + 1
        sendCounted("mel", soundCount * 64 + melody)
    }

    /**
     * Stop any tone or melody that is playing.
     */
    //% block="stop micro:bit sound"
    //% group="Sound" weight=94
    export function stopSound() {
        soundCount = soundCount % 31 + 1
        sendCounted("mel", soundCount * 64)
    }

    /**
     * How loud it is around the micro:bit, from 0 (quiet) to 255 (loud).
     * micro:bit V2 only: the V1 has no microphone and always gives 0.
     */
    //% block="micro:bit sound level (V2 only)"
    //% group="Sound" weight=90
    export function soundLevel(): number {
        return readSensor(9)
    }

    // ---------- Radio ----------
    let radioCount = 0

    /**
     * Pick the radio group (0 to 255). micro:bits only hear each other when they use the same group.
     */
    //% block="set micro:bit radio group $group"
    //% group.min=0 group.max=255 group.defl=1
    //% group="Radio" weight=100
    export function setRadioGroup(group: number) {
        group = Math.max(0, Math.min(255, Math.round(group)))
        radioCount = radioCount % 31 + 1
        sendCounted("rgrp", radioCount * 256 + group)
    }

    /**
     * Send a number by radio to other micro:bits nearby in the same group.
     */
    //% block="micro:bit radio send number $n"
    //% group="Radio" weight=98
    export function radioSendNumber(n: number) {
        send("rtx", Math.round(n), "rtxs")
    }

    /**
     * Run code when a number arrives by radio from another micro:bit (-32768 to 32767).
     */
    //% block="on micro:bit radio received $receivedNumber"
    //% draggableParameters="reporter"
    //% group="Radio" weight=96
    export function onRadioReceivedNumber(handler: (receivedNumber: number) => void) {
        h12 = handler
        if (slots.indexOf(12) < 0) slots.push(12)
        setup()
    }

    // The bridge writes the number + 32768 as 16 gold/air blocks at x 0-15, y 254, z 0 before raising slot 12.
    function readRadioNumber(): number {
        let v = 0
        let p = 1
        for (let i = 0; i < 16; i++) {
            if (blocks.testForBlock(GOLD_BLOCK, world(i, 254, 0))) v += p
            p *= 2
        }
        return v - 32768
    }

    // ---------- Data ----------
    // The bridge keeps what the program records (the last 5 recordings, in memory); the student saves a recording
    // from the micro:bit Link window as a spreadsheet file (CSV).
    // "rec" = counter * 4 + 1 (start) or + 2 (stop).
    // A "log" block is one row: lg<row % 8 * 3 + i> = round(value * 100) * 32 + column for its 1-3 values, then
    // lr<row % 8> = Minecraft game time (ticks) * 4 + how many values, then lgs = run * 2^20 + rows so far this run.
    // A column's name goes once per run, 4 letters per score in ln<column>_0..3, ending with a 0.
    // "record ... every ... seconds": rs<n % 4> = tenths of a second * 16 + sensor, then rss = run * 2^20 + n; the bridge
    // then reads the micro:bit itself at exactly that pace (Code Builder isn't fast or steady enough for it).
    // lgs and rss start with a random number for this run (run * 2^20), so a rerun that logs exactly as much as the
    // last run is still seen as new.
    let recordCount = 0
    let rowCount = 0
    let logNames: string[] = []
    let sampleCount = 0
    const runId = Math.randomRange(1, 2000)

    /**
     * Start a new recording. Save it from the micro:bit Link window as a spreadsheet file.
     */
    //% block="start recording data"
    //% group="Data" weight=100
    export function startRecording() {
        recordCount = recordCount % 1000 + 1
        rowCount = 0
        logNames = []
        sendCounted("rec", recordCount * 4 + 1)
    }

    /**
     * Record a micro:bit sensor at a steady pace (for example every 1 second) until "stop recording data".
     * The micro:bit Link window takes the readings itself, so the times are exact. Starts a recording if none is running.
     */
    //% block="record micro:bit $sensor every $seconds seconds"
    //% seconds.defl=1 seconds.min=0.2 seconds.max=60
    //% group="Data" weight=97
    export function recordEvery(sensor: MbSensor, seconds: number) {
        let tenths = Math.round(seconds * 10)
        if (tenths < 2) tenths = 2
        if (tenths > 600) tenths = 600
        setup()
        sampleCount++
        player.execute("scoreboard players set rs" + (sampleCount % 4) + " mb " + (tenths * 16 + sensor))
        player.execute("scoreboard players set rss mb " + (runId * 1048576 + sampleCount))
        player.execute("scoreboard players add seq mb 1")
    }

    function logColumn(name: string): number {
        let col = logNames.indexOf(name)
        if (col >= 0) return col
        if (logNames.length >= 32) return -1
        col = logNames.length
        logNames.push(name)
        let clean = ""
        for (let i = 0; i < name.length && clean.length < 16; i++) {
            const c = name.charCodeAt(i)
            if (c >= 32 && c <= 126 && c != 44) clean += name.charAt(i)   // no commas: they split columns
        }
        if (clean.length == 0) clean = "value"
        for (let w = 0; w < 4; w++) {
            let v = 0
            let p = 1
            for (let j = 0; j < 4; j++) {
                const k = w * 4 + j
                if (k < clean.length) v += clean.charCodeAt(k) * p
                p *= 128
            }
            player.execute("scoreboard players set ln" + col + "_" + w + " mb " + v)
            if (w * 4 + 4 > clean.length) break   // this word holds the end (a 0)
        }
        return col
    }

    /**
     * Add one row to the recording: up to 3 values, each in a column with its name (click + for more).
     * Logging starts a recording if none is running.
     */
    //% block="log $name1 = $value1||$name2 = $value2|$name3 = $value3"
    //% name1.defl="light" value1.shadow="microbit_lightLevel"
    //% name2.defl="temperature" value2.shadow="microbit_temperature"
    //% name3.defl="value"
    //% expandableArgumentMode="enabled" inlineInputMode=inline
    //% group="Data" weight=95
    export function logData(name1: string, value1: number, name2?: string, value2?: number, name3?: string, value3?: number) {
        setup()
        rowCount++
        const names = [name1, name2, name3]
        const values = [value1, value2, value3]
        let n = 0
        for (let i = 0; i < 3; i++) {
            if (i > 0 && (names[i] === undefined || names[i] === null)) break
            const col = logColumn(names[i])
            if (col < 0) continue
            let v = values[i] === undefined || values[i] === null ? 0 : Math.round(values[i] * 100)
            if (v > 6000000) v = 6000000
            if (v < -6000000) v = -6000000
            player.execute("scoreboard players set lg" + ((rowCount % 8) * 3 + n) + " mb " + (v * 32 + col))
            n++
        }
        const ticks = gameplay.timeQuery(GAME_TIME)
        player.execute("scoreboard players set lr" + (rowCount % 8) + " mb " + ((ticks % 500000000) * 4 + n))
        player.execute("scoreboard players set lgs mb " + (runId * 1048576 + rowCount))
        player.execute("scoreboard players add seq mb 1")
    }

    /**
     * Finish the recording (and any "record … every …"). Save it from the micro:bit Link window.
     */
    //% block="stop recording data"
    //% group="Data" weight=90
    export function stopRecording() {
        recordCount = recordCount % 1000 + 1
        sendCounted("rec", recordCount * 4 + 2)
    }

    // ---------- micro:bit in the world ----------

    /**
     * Put a micro:bit in the world 2 blocks in front of you (needs the Cleverlike micro:bit add-on in the world).
     */
    //% block="spawn a micro:bit in the world in front of me"
    //% group="micro:bit in the world" weight=100
    export function spawnWorldMicrobit() {
        player.execute("summon cleverlike:microbit ^ ^ ^2")
    }

    /**
     * Bring the micro:bit in the world to stand 2 blocks in front of you, facing you.
     */
    //% block="bring the micro:bit in the world to me"
    //% group="micro:bit in the world" weight=98
    export function bringWorldMicrobit() {
        player.execute("scriptevent cleverlike:mb BRING")
    }
}
