import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const LOGO = join(ROOT, 'src', 'assets', 'images', 'devmir-logo.png')
const PUBLIC = join(ROOT, 'public')

const WIDTH = 1200
const HEIGHT = 630

const GREEN = '#00441B'
const NAVY = '#0B1424'
const CHARCOAL = '#1B2330'
const MUTED = '#5A6578'

function buildOgSvg({ eyebrow, headline, subcopy }) {
  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#FFFFFF"/>
  <rect x="80" y="80" width="4" height="470" fill="${GREEN}"/>
  <text x="120" y="180" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600" fill="${GREEN}" letter-spacing="3">${eyebrow}</text>
  <text x="120" y="280" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="700" fill="${NAVY}" letter-spacing="-1">${headline}</text>
  <text x="120" y="360" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="400" fill="${CHARCOAL}">${subcopy}</text>
  <line x1="120" y1="490" x2="420" y2="490" stroke="#E2E5EA" stroke-width="2"/>
  <text x="120" y="530" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="${MUTED}">devmir.com</text>
</svg>
`
}

const ogPages = [
  {
    output: 'og-default.jpg',
    eyebrow: 'DEVMIR LEGWEAR INC.',
    headline: 'Devmir',
    subcopy: 'Connecting Quality Manufacturing with the U.S. Market',
  },
  {
    output: 'og-market-entry.jpg',
    eyebrow: 'U.S. MARKET ENTRY',
    headline: 'Enter the U.S. Market',
    subcopy: 'Infrastructure, fulfillment, and marketplace access',
  },
  {
    output: 'og-retailers.jpg',
    eyebrow: 'RETAILERS AND PARTNERS',
    headline: 'Reliable Supply and Support',
    subcopy: 'Sourcing, private label, and operational partnership',
  },
  {
    output: 'og-about.jpg',
    eyebrow: 'ABOUT DEVMIR',
    headline: 'Established Since 2002',
    subcopy: 'U.S. retail, e-commerce, sourcing, and fulfillment',
  },
  {
    output: 'og-contact.jpg',
    eyebrow: 'CONTACT DEVMIR',
    headline: 'Start a Conversation',
    subcopy: 'Pittsboro, North Carolina | devmir.com',
  },
]

for (const page of ogPages) {
  const output = join(PUBLIC, page.output)
  const base = await sharp(Buffer.from(buildOgSvg(page))).jpeg({ quality: 92, mozjpeg: true }).toBuffer()

  const logoMeta = await sharp(LOGO).metadata()
  const logoWidth = 280
  const logoHeight = Math.round((logoMeta.height / logoMeta.width) * logoWidth)
  const logo = await sharp(LOGO).resize(logoWidth, logoHeight, { fit: 'inside' }).png().toBuffer()

  await sharp(base)
    .composite([{ input: logo, top: 80, left: WIDTH - logoWidth - 80 }])
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(output)

  const meta = await sharp(output).metadata()
  console.log(`Generated ${output} (${meta.width}x${meta.height})`)
}

const faviconLogo = await sharp(LOGO).resize(22, null, { fit: 'inside' }).png().toBuffer()

await sharp({
  create: {
    width: 32,
    height: 32,
    channels: 4,
    background: { r: 0, g: 68, b: 27, alpha: 1 },
  },
})
  .composite([{ input: faviconLogo, gravity: 'centre' }])
  .png()
  .toFile(join(PUBLIC, 'favicon.png'))

console.log(`Generated ${join(PUBLIC, 'favicon.png')} (32x32)`)
