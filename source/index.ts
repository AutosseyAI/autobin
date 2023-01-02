import clee from "clee";
import { getPackageJSON } from "@bconnorwhite/package";
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
    const pkg = await getPackageJSON().read();
    if(pkg?.bin) {
      const promises = Object.values(pkg.bin).map(async (bin) => {
        const buffer = await readFile(bin, { buffer: true });
        if(buffer !== undefined && !isHashbang(buffer.toString())) {
          await writeFile(bin, `${options.hashbang ?? nodeHashbang}\n${buffer}`);
        }
        await makeExecutable(bin);
      });
      await Promise.all(promises);
    }
  });
