import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

function fail(reason: string): never {
  console.error(`main.ts: ${reason}`);
  process.exit(1);
}

if (!existsSync(source)) {
  fail(`POST.json not found at ${source}`);
}

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch (error) {
  fail(`could not copy ${source} to ${target}: ${error instanceof Error ? error.message : String(error)}`);
}

console.log(`copied ${source} -> ${target}`);
