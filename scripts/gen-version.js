import { writeFileSync, mkdirSync } from "fs";
import { execSync } from "child_process";

let sha = "dev";
try {
  sha = execSync("git rev-parse --short HEAD").toString().trim();
} catch {
  // no git metadata available at build time, fall back to timestamp only
}

const version = `${Date.now()}-${sha}`;

mkdirSync("public", { recursive: true });
writeFileSync("public/version.json", JSON.stringify({ version }));

console.log("Generated public/version.json:", version);
