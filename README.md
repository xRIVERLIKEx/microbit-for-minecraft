# micro:bit for Minecraft (Cleverlike)

Code a real **BBC micro:bit** — and the micro:bit in your Minecraft Education world — from **Code Builder**.

> Test version 0.3.0. Not an official Minecraft, Mojang, Microsoft or Micro:bit Educational Foundation product.

## What you need
1. The **Cleverlike micro:bit Remote** program on the micro:bit (put on once, from the micro:bit editor).
2. The **micro:bit Link Bridge** running on the computer, with the micro:bit connected on its page.
3. In Minecraft (cheats on): `/connect 127.0.0.1:19140`
4. Optional: the Cleverlike micro:bit add-on, to see a micro:bit in the world (`/summon cleverlike:microbit ~ ~ ~2`).

## Add the extension in Code Builder
Open **Extensions** and paste this repository's address: `https://github.com/xriverlikex/microbit-for-minecraft`

## Blocks
- **on micro:bit button A/B pressed**
- **show icon … on micro:bit**
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
- Buttons: the bridge places a gold block at 0 250 0 (A) or 1 250 0 (B); the blocks see it, clear it and run your code. A ticking area `mblink` keeps that spot loaded.

## License
MIT © Cleverlike

#### Metadata (used for search, rendering)
* for PXT/minecraft
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
