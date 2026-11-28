# Say hello with the micro:bit

## Introduction @showdialog

Code a real micro:bit from Minecraft!

First, open **micro:bit Link** on this computer and finish its steps, with your micro:bit plugged in (or the pretend micro:bit turned on).

Then come back here. You'll put a micro:bit in the world and make it say "Hello!".

## Spawn a micro:bit

Open the ``||microbit:micro:bit||`` category and drag ``||microbit:spawn a micro:bit in the world next to me||`` into ``||loops:on start||``.

```blocks
microbit.spawnWorldMicrobit()
```

## Show a message

From ``||microbit:micro:bit||``, drag ``||microbit:show string "Hello!" on micro:bit||`` under the spawn block.

```blocks
microbit.spawnWorldMicrobit()
microbit.showString("Hello!")
```

## Run it

Press the green **Play** button.

A micro:bit appears next to you in the world, and **Hello!** scrolls across its screen. Look at your real micro:bit too: it says Hello! at the same time.

Click **Done** to keep coding. All the micro:bit blocks are in the ``||microbit:micro:bit||`` category.

```package
microbit-for-minecraft=github:xRIVERLIKEx/microbit-for-minecraft
```
