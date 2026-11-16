// Liftoff — an ai-excited-01 entry for make.fun's "Make the AI judge excited" bounty.
//
// The whole entry is one image, entry.png, sitting beside this file: a rocket
// launch photographed from the pad, looking straight up as the plume and steam
// cloud come down to swallow the camera. This program's only job is to deliver
// that image — it copies entry.png into the output directory, creating the
// directory first so a fresh output path never fails.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const destination = join(outputDir, "entry.png");
copyFileSync(new URL("./entry.png", import.meta.url), destination);
console.log(`liftoff: entry image written to ${destination}`);
