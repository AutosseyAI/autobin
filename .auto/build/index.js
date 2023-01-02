import clee from "clee";
import { getPackageJSON } from "@bconnorwhite/package";
import { readFile } from "read-file-safe";
import { writeFile } from "write-file-safe";
import { makeExecutable } from "make-executable";
const hashbangPrefix = "#!";
function getHashbang(string) {
    return `${hashbangPrefix}${string}`;
}
function isHashbang(string) {
    return string.startsWith(hashbangPrefix);
}
function parseHashbang(string) {
    if (isHashbang(string)) {
        return string;
    }
    else {
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
    if (pkg === null || pkg === void 0 ? void 0 : pkg.bin) {
        const promises = Object.values(pkg.bin).map(async (bin) => {
            var _a;
            const buffer = await readFile(bin, { buffer: true });
            if (buffer !== undefined && !isHashbang(buffer.toString())) {
                await writeFile(bin, `${(_a = options.hashbang) !== null && _a !== void 0 ? _a : nodeHashbang}\n${buffer}`);
            }
            await makeExecutable(bin);
        });
        await Promise.all(promises);
    }
});
