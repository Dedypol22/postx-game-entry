import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
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

let post: unknown;
try {
  post = JSON.parse(readFileSync(source, "utf8"));
} catch {
  fail(`POST.json at ${source} is not valid JSON`);
}

const url = (post as { url?: unknown } | null)?.url;
if (typeof url !== "string" || !url.startsWith("https://x.com/") || !url.includes("/status/")) {
  fail(`POST.json url must be an X post URL (https://x.com/.../status/...), got: ${String(url)}`);
}

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch (error) {
  fail(`could not copy ${source} to ${target}: ${error instanceof Error ? error.message : String(error)}`);
}

console.log(`copied ${source} -> ${target}`);
