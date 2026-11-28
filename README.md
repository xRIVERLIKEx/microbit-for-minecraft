# micro:bit for Minecraft (Cleverlike)

Code a real **BBC micro:bit** — and the micro:bit in your Minecraft Education world — from **Code Builder**.

> Test version 0.10.0. Needs micro:bit program v0.9.0, bridge v0.12.0 and add-on v0.7.0. Not an official Minecraft, Mojang, Microsoft or Micro:bit Educational Foundation product.

## What you need
1. The **micro:bit Link Bridge** running on the computer. It puts the Cleverlike program on the micro:bit (the right one for a V1 or a V2).
2. A micro:bit connected on the bridge's page, **or** the bridge's **pretend micro:bit** if you have none: pictures, numbers and text show on the micro:bit in the world, sounds play in the bridge window, and the bridge has buttons, tilt and sensor sliders.
3. In Minecraft (cheats on): `/connect 127.0.0.1:19140`
4. The Cleverlike micro:bit add-on in the world (the bridge has a download button), to see the micro:bit in the world. Hit its **A**, **B** or gold **logo** to press them; right-click it to remove it.

## Add the extension in Code Builder
Open **Extensions** and paste this repository's address: `https://github.com/xriverlikex/microbit-for-minecraft`

## Blocks
**Buttons and gestures**
- **on micro:bit button A / B / A+B pressed**
- **on micro:bit logo pressed (V2 only)** — the touch logo only exists on micro:bit V2. A V1 has no touch logo, so this block never runs there.
- **on micro:bit shake / logo up / logo down / tilt left / tilt right / screen up / screen down / free fall**
- **micro:bit button A / B / A+B is pressed** (true or false — use in *if* and *while*)
- **micro:bit is shake / logo up / tilt left / …** (true or false — use in *if* and *while*)
- **micro:bit logo is pressed (V2 only)** (true or false)

> **micro:bit V1 or V2?** Everything works on both, except the touch logo and the sound level (V2 only: V1 has no microphone). The V2 plays sounds on its speaker; a V1 needs a speaker or headphones on pin 0 and GND. A V2 has a small microphone hole next to the gold logo on the front. The logo on the micro:bit in the world works with both.

**Sensors**
- **micro:bit light level** (0–255)
- **micro:bit temperature (°C)**
- **micro:bit acceleration (mg) x / y / z** (steps of 16)
- **micro:bit rotation (°) pitch / roll** (steps of 2)

**Getting started tutorial:** open https://minecraft.makecode.com/#tutorial:github:xRIVERLIKEx/microbit-for-minecraft/start (the Micro:bit Playground world opens it when you press C). It adds this extension and walks through spawning a micro:bit and showing "Hello!".

**Data** (needs bridge v0.16.0 or newer)
- **start recording data**: starts a new recording. Nothing is saved on the computer until you choose to: the micro:bit Link window keeps the last 5 recordings, each with **Save…** (pick where the spreadsheet file goes) and **Delete**.
- **record micro:bit light level / temperature / acceleration / pitch / roll / sound level every … seconds**: the micro:bit Link window reads the micro:bit itself at exactly that pace (0, 1, 2, 3… seconds), until **stop recording data**. Run it once for each sensor you want.
- **log *name* = *value*** (click **+** for a 2nd and 3rd value): adds one row with up to 3 values, each in a column with its name (up to 16 letters, 32 columns). Use it for values your program works out, like a count. The time is when the block ran. Code Builder runs blocks one at a time, so a loop with *pause 1000 ms* logs about every 1.3–1.5 seconds.
- **stop recording data**: finishes the recording (and any *record … every …*). Save it from the micro:bit Link window as a CSV file, which opens in Excel or Google Sheets. Unsaved recordings are deleted when the bridge closes.

**Screen**
- **show leds on micro:bit** (click the 5×5 grid to draw)
- **show icon … on micro:bit** (the micro:bit's 40 icons)
- **show number … on micro:bit**
- **show string … on micro:bit** (scrolls up to 30 letters, numbers and symbols)
- **clear micro:bit screen**

**Sound**
- **play micro:bit tone … Hz for … ms** and **play micro:bit note … for … beat** (wait until the sound has finished, so a list of notes plays as a tune)
- **play micro:bit melody …** (the micro:bit's 20 tunes; your code keeps going)
- **stop micro:bit sound**
- **micro:bit sound level (V2 only)** (0–255)

**Radio** (real micro:bits only)
- **set micro:bit radio group …** (0–255; micro:bits only hear each other in the same group)
- **micro:bit radio send number …**
- **on micro:bit radio received *receivedNumber*** (−32768 to 32767)

**Pins and redstone**
- **set micro:bit pin P0 / P1 / P2 on / off** (turns the pin on or off, e.g. an LED wired to it)
- **micro:bit pin P0 / P1 / P2 is on** (true or false; the pin becomes an input)
- **set micro:bit in the world redstone on / off**: while it's on, a redstone torch stands at the feet of the micro:bit in the world. Run redstone dust from right next to it to lamps, doors, pistons…
- **micro:bit in the world gives redstone while button A is pressed / pin P0 is on / tilted left / …**: run it once; the bridge keeps the redstone following the micro:bit, no loop needed.
- **when redstone lamp at … is lit, turn on micro:bit pin …** turns the pin on while that lamp is lit.
- (The old **when micro:bit pin … is on, power redstone at …** block is hidden but still works in older programs.)

**micro:bit in the world**
- **spawn a micro:bit in the world next to me**
- **bring the micro:bit in the world to me**

Positions can be world positions (`world(10, 64, 10)`) or relative ones (`pos(2, 0, 0)`): a relative position is fixed at the spot it pointed to when the block ran. Run the two *when …* blocks once (for example in *on start*). The bridge keeps them going until Minecraft reconnects. Touch a wire between a pin and 3V to turn an input pin on.

```ts
microbit.onButtonPressed(MbButton.A, function () {
    microbit.showIcon(MbIcon.Heart)
})
microbit.onButtonPressed(MbButton.B, function () {
    microbit.showNumber(42)
})
```

Steer the Agent by tilting the micro:bit. Use **while** loops for controls: each loop keeps going as long as you hold the tilt or button, which feels much smoother than an *if* that checks everything every round.

```ts
loops.forever(function () {
    while (microbit.isGesture(MbGesture.TiltLeft)) {
        agent.turn(LEFT_TURN)
    }
})
loops.forever(function () {
    while (microbit.isGesture(MbGesture.TiltRight)) {
        agent.turn(RIGHT_TURN)
    }
})
loops.forever(function () {
    while (microbit.isPressed(MbButton.A)) {
        agent.move(FORWARD, 1)
    }
})
```

Record the light level and temperature every second for a minute:

```ts
microbit.recordEvery(MbSensor.Light, 1)
microbit.recordEvery(MbSensor.Temperature, 1)
loops.pause(60000)
microbit.stopRecording()
```

Log how many times button A was pressed, with the light level, each time it's pressed:

```ts
let presses = 0
microbit.onButtonPressed(MbButton.A, function () {
    presses += 1
    microbit.logData("presses", presses, "light", microbit.lightLevel())
})
```

Light a redstone lamp from the micro:bit:

```ts
microbit.linkPinToRedstone(MbPin.P0, pos(0, 0, 2))
```

To see each step in chat while testing: `microbit.debug = true`

## How it works
- Pictures and numbers: the blocks write to the scoreboard objective `mb`; the bridge reads it and sends it to the micro:bit.
- Buttons and gestures: the bridge places a gold block at x 0–11, y 250, z 0; the blocks see it, clear it and run your code.
- Sensors: the first reading of a sensor asks the bridge (answer at y 251). After that the bridge keeps that sensor ready as 8 gold/air blocks at x 0–7, y 253 (z = sensor) with a gold block at x 15, so later readings are quick. Sensors nobody reads cost nothing.
- Text, pins and redstone links go through the same `mb` scoreboard. Pin states are kept at y 252, z 2.
- Sound and radio settings are two commands each (`tone`, `mel`, `rgrp` carry their own counter, then `seq`). A radio number arrives as 16 gold/air blocks at x 0–15, y 254, z 0 (number + 32768) and event slot 12.
- Data: `rec` (start / stop, with a counter); `rs0`–`rs3` + `rss` (sensor and pace for *record … every …*; the bridge window does the reading). Each *log* block is one row: `lg<row % 8 × 3 + i>` (value × 100 × 32 + column), `lr<row % 8>` (Minecraft game time × 4 + how many values) and `lgs` (a random number for this run × 2^20 + rows so far), so the bridge catches up to 8 rows it missed. Column names go once per run in `ln<column>_0`–`_3`.
- A ticking area `mblink6` keeps those spots loaded. "is pressed" and "is …" read state blocks the bridge keeps up to date at y 252 (one check each). Pictures are one command, and the same picture twice is skipped.

Icon pictures come from [pxt-microbit](https://github.com/microsoft/pxt-microbit) (MIT, Microsoft).

## License
MIT © Cleverlike

#### Metadata (used for search, rendering)
* for PXT/minecraft
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
