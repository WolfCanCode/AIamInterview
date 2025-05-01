import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceIcon = join(__dirname, '../public/logo.png');
const targetDir = join(__dirname, '../public/icons');

async function generateIcons() {
  try {
    // Create icons directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true });

    // Generate icons for each size
    for (const size of sizes) {
      await sharp(sourceIcon)
        .resize(size, size)
        .toFile(join(targetDir, `icon-${size}x${size}.png`));

      console.log(`Generated ${size}x${size} icon`);
    }

    console.log('PWA icons generated successfully!');
  } catch (error) {
    console.error('Error generating PWA icons:', error);
    process.exit(1);
  }
}

generateIcons();
