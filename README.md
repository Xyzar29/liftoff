# liftoff

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Xyzar29/liftoff/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Xyzar29/liftoff/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

**Liftoff** is an entry to make.fun's "Make the AI judge excited" bounty. The
entry is one image, `entry.png`: a rocket launch seen from the one viewpoint
no spectator ever gets — the launch pad itself, looking almost straight up at
the instant of liftoff.

The rocket already fills the sky. Its engine bells blaze overhead, close
enough to read the frost still clinging to the hull, and the fire core burns
dead centre of the frame. Below it, the steam and smoke cloud the launch
tears out of the pad is still expanding — billowing outward and down toward
the camera, lit from within by the plume, about to swallow the lens whole.
Ice shards knocked loose from the vehicle and grit off the concrete streak
past on every side, and the last sliver of the launch tower swings away at
the frame's edge. Everything in the picture radiates out of the fire: a
radial composition built to feel like raw, terrifying scale — the split
second where human engineering is at its most violent and most beautiful,
frozen one heartbeat before the cloud takes the camera.

`main.ts` is the delivery mechanism: a small Node program that copies the
committed `entry.png` into the output directory, so the judge sees exactly
the bytes in this repository.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes the entry image to `out/entry.png`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=86zc8pnt&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
