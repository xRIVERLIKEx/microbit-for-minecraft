# micro:bit for Minecraft (Cleverlike)

Code a real **BBC micro:bit** — and the micro:bit in your Minecraft Education world — from **Code Builder**.

> Test version 0.4.0. Not an official Minecraft, Mojang, Microsoft or Micro:bit Educational Foundation product.

## What you need
1. The **Cleverlike micro:bit Remote** program on the micro:bit (put on once, from the micro:bit editor).
2. The **micro:bit Link Bridge** running on the computer, with the micro:bit connected on its page.
3. In Minecraft (cheats on): `/connect 127.0.0.1:19140`
4. Optional: the Cleverlike micro:bit add-on, to see a micro:bit in the world (`/summon cleverlike:microbit ~ ~ ~2`).

## Add the extension in Code Builder
Open **Extensions** and paste this repository's address: `https://github.com/xriverlikex/microbit-for-minecraft`

## Blocks
**Buttons and gestures**
- **on micro:bit button A / B / A+B pressed**
- **on micro:bit logo pressed (V2 only)** — the touch logo only exists on micro:bit V2. A V1 has no touch logo, so this block never runs there.
- **on micro:bit shake / logo up / logo down / tilt left / tilt right / screen up / screen down / free fall**

> **micro:bit V1 or V2?** Everything works on both, except the touch logo (V2 only). A V2 has a small microphone hole next to the gold logo on the front.

**Sensors**
- **micro:bit light level** (0–255)
- **micro:bit temperature (°C)**
- **micro:bit acceleration (mg) x / y / z** (steps of 16)
- **micro:bit rotation (°) pitch / roll** (steps of 2)

**Screen**
- **show leds on micro:bit** (click the 5×5 grid to draw)
- **show icon … on micro:bit** (the micro:bit's 40 icons)
- **show number … on micro:bit**
- **clear micro:bit screen**

```ts
microbit.onButtonPressed(MbButton.A, function () {
    microbit.showIcon(MbIcon.Heart)
})
microbit.onButtonPressed(MbButton.B, function () {
    microbit.showNumber(42)
})
```

To see each step in chat while testing: `microbit.debug = true`

## How it works
- Pictures and numbers: the blocks write to the scoreboard objective `mb`; the bridge reads it and sends it to the micro:bit.
- Buttons and gestures: the bridge places a gold block at x 0–11, y 250, z 0; the blocks see it, clear it and run your code.
- Sensors: the blocks ask the bridge, which writes the value as 8 gold/air blocks at x 0–7, y 251 (z = sensor) and a gold block at x 15 when done. Each reading takes a moment.
- A ticking area `mblink2` keeps those spots loaded.

Icon pictures come from [pxt-microbit](https://github.com/microsoft/pxt-microbit) (MIT, Microsoft).

## License
MIT © Cleverlike

#### Metadata (used for search, rendering)
* for PXT/minecraft
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
