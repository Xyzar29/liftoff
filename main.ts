// Liftoff — an entry for make.fun's "Make the AI judge excited" bounty.
//
// The whole entry is the photograph beside this file: a rocket at the
// instant of liftoff, shot from a camera lying on the pad directly beneath
// it. This program's only job is to deliver that image — it copies
// entry.png into the output directory the runner points it at
// (MAKEFUN_OUTPUT_DIR, or /output when that is not set), creating the
// directory first so a fresh output path never fails.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const imagePath = new URL("./entry.png", import.meta.url);
const destination = join(outputDir, "entry.png");
copyFileSync(imagePath, destination);
console.log(`liftoff: delivered entry.png to ${destination}`);
