const Jimp = require('jimp');
const path = require('path');

const [, , input, output, thresholdArg] = process.argv;

if (!input || !output) {
  console.error('Usage: node remove_bg.cjs <input> <output> [threshold=65]');
  process.exit(1);
}

const threshold = Number(thresholdArg) || 65;

async function processImage() {
  const image = await Jimp.read(input);
  const bg = Jimp.intToRGBA(image.getPixelColor(10, 10));
  console.log('Background sample:', bg);

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, (_x, _y, idx) => {
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx + 1];
    const b = image.bitmap.data[idx + 2];
    const a = image.bitmap.data[idx + 3];

    const dist = Math.sqrt((r - bg.r) ** 2 + (g - bg.g) ** 2 + (b - bg.b) ** 2);

    if (dist < threshold) {
      image.bitmap.data[idx + 3] = 0;
    } else if (dist < threshold + 40) {
      image.bitmap.data[idx + 3] = a * ((dist - threshold) / 40);
    }
  });

  await image.writeAsync(path.resolve(output));
  console.log('Wrote', output);
}

processImage().catch((e) => {
  console.error(e);
  process.exit(1);
});
