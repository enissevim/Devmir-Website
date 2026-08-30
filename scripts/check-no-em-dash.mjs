import { readFileSync, readdirSync, statSync } from 'fs'
import { join, extname, dirname } from 'path'
import { fileURLToPath } from 'url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const EM_DASH = '\u2014'
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git'])
const EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.md', '.toml', '.mjs', '.svg',
])

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      walk(full, files)
    } else if (EXTENSIONS.has(extname(entry))) {
      files.push(full)
    }
  }
  return files
}

const violations = []
for (const file of walk(ROOT)) {
  const content = readFileSync(file, 'utf8')
  if (content.includes(EM_DASH)) {
    const lines = content.split('\n')
    lines.forEach((line, i) => {
      if (line.includes(EM_DASH)) {
        violations.push(`${file}:${i + 1}`)
      }
    })
  }
}

if (violations.length > 0) {
  console.error('Em dash character found in:')
  violations.forEach((v) => console.error(`  ${v}`))
  process.exit(1)
}

console.log('No em dash characters found.')
