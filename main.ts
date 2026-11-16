// Liftoff — an ai-excited-01 entry for make.fun.
//
// The whole entry is a single image, entry.png: a rocket launch photographed
// from the one place no camera survives — the pad itself, looking straight up
// as the vehicle clears the tower and the steam cloud rolls down to swallow
// the lens. This program's only job is to deliver that image: it copies
// entry.png, which sits beside this file, into the output directory the
// harness points at (MAKEFUN_OUTPUT_DIR, falling back to /output).

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The harness may hand us a path that does not exist yet; create it so the
// copy below never fails on a fresh output directory.
mkdirSync(outputDir, { recursive: true });

const imageUrl = new URL("./entry.png", import.meta.url);
const destination = join(outputDir, "entry.png");
copyFileSync(imageUrl, destination);

// Leave a trace in the run log so a successful delivery is easy to confirm.
console.log(`liftoff: wrote ${destination} (${statSync(destination).size} bytes)`);
