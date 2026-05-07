// One-shot script to chroma-key the white background out of the Letacom JPG logo
// and produce two PNGs: the brand-color version for light surfaces, and a white-out
// version for navy surfaces.

import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const SOURCE = process.argv[2];
if (!SOURCE) {
  console.error("Usage: node scripts/process-logo.mjs <input.jpg>");
  process.exit(1);
}

const OUT_DIR = resolve("public/brand");
mkdirSync(OUT_DIR, { recursive: true });

// Pixel-level chroma key: turn near-white pixels transparent, soft-edge antialias
// the boundary, and (for the white variant) recolor dark-navy pixels white while
// preserving the LETACOM bright blue.
async function run() {
  const { data, info } = await sharp(SOURCE)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const colorBuf = Buffer.from(data);
  const whiteBuf = Buffer.from(data);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];

    // White / near-white background → transparent (with feathered edge)
    const lightness = (r + g + b) / 3;
    if (r > 240 && g > 240 && b > 240) {
      colorBuf[i + 3] = 0;
      whiteBuf[i + 3] = 0;
    } else if (lightness > 220) {
      // Edge antialias: scale alpha from 255→0 across lightness 220→245
      const alpha = Math.max(0, Math.round((245 - lightness) * (255 / 25)));
      colorBuf[i + 3] = alpha;
      whiteBuf[i + 3] = alpha;
    }

    // White variant: recolor LETA navy pixels to pure white, keep COM blue as-is.
    // LETA is roughly: R<60, G<60, B 60–110 (dark navy)
    // COM is roughly:  R<60, G 100-150, B 230+ (bright blue)
    const isNavy = r < 70 && g < 70 && b > 40 && b < 130;
    if (isNavy) {
      whiteBuf[i] = 255;
      whiteBuf[i + 1] = 255;
      whiteBuf[i + 2] = 255;
    }
  }

  await sharp(colorBuf, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT_DIR, "letacom-logo.png"));

  await sharp(whiteBuf, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT_DIR, "letacom-logo-white.png"));

  // Also write a smaller header-sized version (h=80px @ 2x = 160px) for next/image priority loads
  await sharp(colorBuf, { raw: { width, height, channels } })
    .resize({ height: 160 })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT_DIR, "letacom-logo@2x.png"));

  await sharp(whiteBuf, { raw: { width, height, channels } })
    .resize({ height: 160 })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT_DIR, "letacom-logo-white@2x.png"));

  console.log(`Wrote 4 logos (source ${width}×${height}) to ${OUT_DIR}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
