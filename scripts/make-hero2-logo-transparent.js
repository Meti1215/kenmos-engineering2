const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
(async () => {
  try {
    const basePath = path.join(__dirname, '..', 'public', 'images');
    const inputPath = path.join(basePath, 'hero2-logo.png');
    const outputPath = path.join(basePath, 'hero2-logo.png');
    const maskPath = path.join(basePath, 'hero2-logo-mask.png');

    const image = sharp(inputPath);
    const meta = await image.metadata();
    const {width, height} = meta;
    const bgColor = {r: 251, g: 251, b: 251};
    const threshold = 16;
    const raw = await image.ensureAlpha().raw().toBuffer();
    const idx = (x, y) => (y * width + x) * 4;
    const getColor = (x, y) => {
      const i = idx(x, y);
      return {r: raw[i], g: raw[i+1], b: raw[i+2], a: raw[i+3]};
    };
    const dist = (c1, c2) => {
      const dr = c1.r - c2.r;
      const dg = c1.g - c2.g;
      const db = c1.b - c2.b;
      return Math.sqrt(dr*dr + dg*dg + db*db);
    };
    const background = new Uint8Array(width * height);
    const visited = new Uint8Array(width * height);
    const queue = [];

    const push = (x, y) => {
      const pos = y * width + x;
      if (visited[pos]) return;
      visited[pos] = 1;
      queue.push({x, y, pos});
    };

    for (let x = 0; x < width; x++) {
      push(x, 0);
      push(x, height - 1);
    }
    for (let y = 0; y < height; y++) {
      push(0, y);
      push(width - 1, y);
    }

    while (queue.length) {
      const {x, y, pos} = queue.shift();
      const color = getColor(x,y);
      if (dist(color, bgColor) <= threshold) {
        background[pos] = 1;
        const neighbors = [
          [x - 1, y],
          [x + 1, y],
          [x, y - 1],
          [x, y + 1],
        ];
        for (const [nx, ny] of neighbors) {
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const npos = ny * width + nx;
            if (!visited[npos]) push(nx, ny);
          }
        }
      }
    }

    const alpha = Buffer.alloc(width * height);
    const maskPixels = Buffer.alloc(width * height * 4);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pos = y * width + x;
        const bg = background[pos];
        const i = idx(x, y);
        const c = getColor(x, y);
        let a = bg ? 0 : 255;
        if (!bg) {
          if (dist(c, bgColor) < 12 && c.a === 255) {
            a = 200;
          }
        }
        alpha[pos] = a;
        const maskIdx = i;
        const mval = bg ? 255 : 0;
        maskPixels[maskIdx] = mval;
        maskPixels[maskIdx + 1] = mval;
        maskPixels[maskIdx + 2] = mval;
        maskPixels[maskIdx + 3] = 255;
      }
    }

    await sharp(maskPixels, {raw: {width, height, channels: 4}})
      .png()
      .toFile(maskPath);

    const outputBuffer = Buffer.alloc(raw.length);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pos = y * width + x;
        const i = idx(x, y);
        outputBuffer[i] = raw[i];
        outputBuffer[i+1] = raw[i+1];
        outputBuffer[i+2] = raw[i+2];
        outputBuffer[i+3] = alpha[pos];
      }
    }

    await sharp(outputBuffer, {raw: {width, height, channels: 4}})
      .png({compressionLevel: 9, quality: 100})
      .toFile(outputPath);

    console.log('saved transparent image at', outputPath);
    console.log('saved mask preview at', maskPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
