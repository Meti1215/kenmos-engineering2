const sharp = require('sharp');
const path = require('path');
(async () => {
  try {
    const imagePath = path.join(__dirname, '..', 'public', 'images', 'hero2-logo.png');
    const image = sharp(imagePath);
    const meta = await image.metadata();
    console.log('meta', JSON.stringify(meta));
    const {width, height} = meta;
    const raw = await image.ensureAlpha().raw().toBuffer();
    const sample = (x, y) => {
      const idx = (y * width + x) * 4;
      return [raw[idx], raw[idx + 1], raw[idx + 2], raw[idx + 3]];
    };
    const stepX = Math.max(1, Math.floor(width / 10));
    const stepY = Math.max(1, Math.floor(height / 10));
    const points = [];
    for (let x = 0; x < width; x += stepX) {
      points.push(['top', x, 0, JSON.stringify(sample(x, 0))]);
      points.push(['bottom', x, height - 1, JSON.stringify(sample(x, height - 1))]);
    }
    for (let y = 0; y < height; y += stepY) {
      points.push(['left', 0, y, JSON.stringify(sample(0, y))]);
      points.push(['right', width - 1, y, JSON.stringify(sample(width - 1, y))]);
    }
    points.forEach((p) => console.log(p.join(' ')));
    const corners = [
      sample(0, 0),
      sample(width - 1, 0),
      sample(0, height - 1),
      sample(width - 1, height - 1),
    ];
    console.log('corners', JSON.stringify(corners));
    const textSamples = [
      ['redK', 110, 150],
      ['redKenmos', 210, 130],
      ['darkO', 360, 140],
      ['whiteEngineering', 250, 240],
      ['nearBg', 20, 20],
      ['nearBg2', 645, 20],
    ];
    textSamples.forEach(([label, x, y]) => console.log(label, x, y, JSON.stringify(sample(x, y))));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
