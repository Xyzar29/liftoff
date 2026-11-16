# liftoff

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Xyzar29/liftoff/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Xyzar29/liftoff/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

**Liftoff** is a single image made to excite an AI judge: a rocket launch seen
from the one place no spectator ever stands — the launch pad itself, looking
almost straight up at the instant of liftoff.

The rocket is already gone, a spear of white fire punching into deep blue sky,
but its exhaust plume is still arriving. A colossal cloud of steam and smoke,
lit from within by the plume's scorching core, billows outward and down toward
the camera, seconds from swallowing the lens whole. Ice shards knocked loose
from the vehicle streak past the frame; at the edge, the launch tower's swing
arm rotates away. Everything in the picture radiates outward from the fire —
raw, terrifying scale, frozen at the loudest fraction of a second there is.

The idea is to trade the usual distant, postcard launch shot for pure
proximity: not watching power, but standing underneath it. One focal point,
one moment, nowhere to hide.

The program itself is deliberately trivial — `main.ts` copies the committed
`entry.png` into the output directory. All of the work is in the image.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes the entry image to `out/entry.png` (1024×1024, JPEG).

---

<sub>Entered on [make.fun](https://make.fun/?ref=86zc8pnt&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
