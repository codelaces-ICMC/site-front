/**
 * Rotas estáticas conhecidas (sem :params) usadas para sugerir correção de URL digitada errado.
 * Rotas dinâmicas (/events/info/123, etc.) não entram aqui — use aliases explícitos se precisar.
 */
const FUZZY_CANDIDATES: string[] = [
  '/',
  '/hackathon',
  '/events',
  '/about',
  '/admin/login',
  '/admin/events',
  '/admin/activities',
  '/admin/certificates',
  '/admin/create/event',
  '/admin/create/activity',
  '/admin/create/certificate',
  '/teste/',
]

/** Atalhos e nomes em português / erros comuns → path canônico */
const PATH_ALIASES: Record<string, string> = {
  '/eventos': '/events',
  '/evento': '/events',
  '/sobre': '/about',
  '/hackaton': '/hackathon',
  '/hakathon': '/hackathon',
  '/admin/eventos': '/admin/events',
  '/admin/atividades': '/admin/activities',
  '/admin/certificados': '/admin/certificates',
  '/admin/login/': '/admin/login',
  '/teste': '/teste/',
}

function normalizeForMatch(pathname: string): string {
  const p = pathname.trim().toLowerCase()
  if (p === '' || p === '/') return '/'
  return p.replace(/\/+$/, '')
}

function levenshtein(a: string, b: string): number {
  const m = a.length
  const n = b.length
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0),
  )
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost,
      )
    }
  }
  return dp[m][n]
}

/**
 * Se a URL não existir, tenta um alias explícito ou o path estático “mais parecido” (Levenshtein).
 * Retorna `null` se for melhor mandar para a home sem tentar adivinhar.
 */
export function suggestPathCorrection(pathname: string): string | null {
  const key = normalizeForMatch(pathname)
  const alias = PATH_ALIASES[key]
  if (alias) return alias

  let best: string | null = null
  let bestDist = Infinity
  let ties = 0

  const maxDist = key.length >= 8 ? 2 : key.length >= 4 ? 1 : 0

  if (maxDist === 0) return null

  for (const candidate of FUZZY_CANDIDATES) {
    if (candidate === '/') continue
    const d = levenshtein(key, candidate)
    if (d > maxDist) continue
    if (d < bestDist) {
      bestDist = d
      best = candidate
      ties = 1
    } else if (d === bestDist && d < Infinity) {
      ties += 1
    }
  }

  if (best && best !== key && ties === 1) return best
  return null
}
