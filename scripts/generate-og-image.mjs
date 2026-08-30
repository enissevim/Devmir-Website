import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT = join(ROOT, 'public', 'og-default.jpg')

const WIDTH = 1200
const HEIGHT = 630

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#FFFFFF"/>
  <rect x="80" y="80" width="4" height="470" fill="#1A56A0"/>
  <text x="120" y="240" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700" fill="#0B1424" letter-spacing="-1">Devmir</text>
  <text x="120" y="310" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600" fill="#1A56A0" letter-spacing="2">DEVMIR LEGWEAR INC.</text>
  <text x="120" y="390" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="400" fill="#1B2330">Connecting Quality Manufacturing</text>
  <text x="120" y="435" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="400" fill="#1B2330">with the U.S. Market</text>
  <line x1="120" y1="490" x2="420" y2="490" stroke="#E2E5EA" stroke-width="2"/>
  <text x="120" y="530" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="#5A6578">devmir.com</text>
</svg>
`

await sharp(Buffer.from(svg)).jpeg({ quality: 92, mozjpeg: true }).toFile(OUTPUT)

const meta = await sharp(OUTPUT).metadata()
console.log(`Generated ${OUTPUT} (${meta.width}x${meta.height})`)
