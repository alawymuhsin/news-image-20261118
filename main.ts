// One-day world news image entry (Node 22, standard library only, no network).
//
// The finished picture lives in this repository as entry.png: a front page
// summing up Wednesday 18 November 2026 in six stories. This program copies
// it to the grader's output directory, so the judge sees exactly those bytes.
//
// Run it locally the same way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// The judge sees exactly these bytes: fail loudly if the copy is not whole.
if (statSync(dst).size !== statSync(src).size) {
  throw new Error('entry.png copy is incomplete');
}
