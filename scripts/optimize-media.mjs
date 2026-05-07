// One-shot script: resize and re-encode every JPG in public/media to a sane web max.
// In-place: overwrites originals. Originals remain in the user's Downloads folder.
//
// Targets:
//   - max 1920px wide (preserves aspect ratio, never enlarges)
//   - quality 78 mozjpeg (perceptually indistinguishable, ~5–8× smaller)
//   - progressive baseline so first paint is partial rather than all-or-nothing

import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { resolve } from "node:path";

const ROOT = resolve("public/media");

async function main() {
  const entries = await readdir(ROOT);
  const jpgs = entries.filter((f) => /\.jpe?g$/i.test(f));

  for (const file of jpgs) {
    const path = resolve(ROOT, file);
    const tmp = path + ".tmp";
    const before = (await stat(path)).size;

    await sharp(path)
      .rotate() // honor EXIF
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true, progressive: true })
      .toFile(tmp);

    await unlink(path);
    await rename(tmp, path);
    const after = (await stat(path)).size;

    const dropPct = ((1 - after / before) * 100).toFixed(0);
    console.log(
      `${file.padEnd(40)} ${(before / 1024).toFixed(0).padStart(5)}kb → ${(
        after / 1024
      )
        .toFixed(0)
        .padStart(5)}kb  (-${dropPct}%)`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
