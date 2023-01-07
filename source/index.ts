import { resolve } from "node:path";
import clee from "clee";
import { root, packageJSONFile } from "file-structure";
import { readFile } from "read-file-safe";
import { writeFile } from "write-file-safe";
import { makeExecutable } from "make-executable";

const hashbangPrefix = "#!";

type Hashbang = `${typeof hashbangPrefix}${string}`;

function getHashbang(string: string): Hashbang {
  return `${hashbangPrefix}${string}`;
}

function isHashbang(string: string): string is Hashbang {
  return string.startsWith(hashbangPrefix);
}

function parseHashbang(string: string): Hashbang | undefined {
  if(isHashbang(string)) {
    return string;
  } else {
    return undefined;
  }
}

const nodeHashbang = getHashbang("/usr/bin/env node");

export const autobin = clee("autobin")
  .title({ font: "Slant" })
  .description("Add a hashbang and make each bin file executable.")
  .option("--hashbang", "[hashbang]", "The hashbang to use.", parseHashbang)
  .action(async (options) => {
    const pkg = await root({
      pkgJSON: packageJSONFile("package.json")
    }).files().pkgJSON.read();
    if(pkg?.bin) {
      // Use resolve to ensure that equivalent paths are the same.
      const paths = Object.values(pkg.bin).map((bin) => resolve(bin));
      // Use a set to remove duplicates.
      const set = new Set(paths);
      // Process each bin file.
      const promises = [...set].map(async (bin) => {
        const buffer = await readFile(bin, { buffer: true });
        if(buffer !== undefined && !isHashbang(buffer.toString())) {
          await writeFile(bin, `${options.hashbang ?? nodeHashbang}\n${buffer}`);
        }
        await makeExecutable(bin);
      });
      await Promise.all(promises);
    }
  });
