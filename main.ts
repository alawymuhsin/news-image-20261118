// World news in one image — Wednesday 18 November 2026.
//
// The entry is a single finished picture, entry.png: a newspaper front page
// covering thirty stories from that one day, six continents, lead story plus
// six featured cards plus twenty-three briefs. Nothing here is generated at
// run time. This script only hands the exact finished bytes to the grader.
//
// It runs with Node 22, standard library only, and touches no network.
// The grader invokes it the same way as the local check below:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The picture sits next to this script, wherever the repository is checked out.
const scriptDir = resolve(fileURLToPath(new URL('.', import.meta.url)));
const pictureName = 'entry.png';
const picturePath = join(scriptDir, pictureName);

// The grader hands us its output folder through MAKEFUN_OUTPUT_DIR;
// /output is the documented default when the variable is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, pictureName);

if (!existsSync(picturePath)) {
  throw new Error(`missing ${pictureName} next to main.ts (${picturePath})`);
}

// Read the picture once and keep its fingerprint, so the copy can be
// proven whole afterwards instead of merely assumed whole.
const picture = readFileSync(picturePath);
const fingerprint = createHash('sha256').update(picture).digest('hex');

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, picture);

// The output must be byte-for-byte the picture in the repository:
// same length and same sha256. Anything else is a failed run.
const written = readFileSync(outputPath);
if (written.length !== picture.length) {
  throw new Error(
    `entry.png copy is incomplete: ${written.length} of ${picture.length} bytes`,
  );
}
if (createHash('sha256').update(written).digest('hex') !== fingerprint) {
  throw new Error('entry.png copy does not match the source (sha256 mismatch)');
}
