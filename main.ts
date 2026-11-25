// Monday, Reviewed in One Line
// make.fun bounty: u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
// Writes a one-line review of a Monday to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Woke up Monday convinced I'd been fired — only a dream, unfortunately my boss had the same dream and HR was already printing the paperwork for me.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("line must be 1-200 characters");
}
if (LINE.trim().length === 0) {
  throw new Error("line must contain more than whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
