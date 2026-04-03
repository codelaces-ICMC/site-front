/**
 * One-off: converte imports relativos e baseUrl para aliases @api, @components, etc.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '..', 'src')
const FOLDERS = ['assets', 'components', 'styles', 'api', 'pages', 'utils']
const exts = new Set(['.ts', '.tsx', '.js', '.jsx'])

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) walk(p, files)
    else if (exts.has(path.extname(name))) files.push(p)
  }
  return files
}

function migrate(content) {
  let s = content

  // from '../../../assets/...' -> '@assets/...'
  const relFrom = new RegExp(
    `from\\s+(["'])((?:\\.\\./)+)(${FOLDERS.join('|')})/`,
    'g',
  )
  s = s.replace(relFrom, (_, q, _rel, folder) => `from ${q}@${folder}/`)

  // import('...') dinâmico
  const dynImport = new RegExp(
    `import\\s*\\(\\s*(["'])((?:\\.\\./)+)(${FOLDERS.join('|')})/`,
    'g',
  )
  s = s.replace(dynImport, (_, q, _rel, folder) => `import(${q}@${folder}/`)

  // Imports já sem ./ (baseUrl): 'api/...' -> '@api/...'
  for (const folder of FOLDERS) {
    const bare = new RegExp(`from\\s+(["'])(${folder})/`, 'g')
    s = s.replace(bare, (_, q) => `from ${q}@${folder}/`)
  }

  return s
}

const files = walk(SRC)
let changed = 0
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8')
  const after = migrate(before)
  if (after !== before) {
    fs.writeFileSync(file, after)
    changed++
    console.log('updated:', path.relative(SRC, file))
  }
}
console.log(`Done. ${changed} files updated.`)
