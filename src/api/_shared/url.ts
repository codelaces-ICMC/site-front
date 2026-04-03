const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')

/** Base da API; falha cedo se `.env` não estiver configurado. */
export function resolveApiBaseUrl(): string {
  const v = process.env.REACT_APP_BASE_URL_BACK_API
  if (v == null || typeof v !== 'string' || v.trim() === '') {
    throw new Error(
      'REACT_APP_BASE_URL_BACK_API não está definido ou está vazio. Configure o .env do front.',
    )
  }
  return v.trim()
}

export const buildApiUrl = (baseURL: string, path: string) => {
  const normalizedBase = trimTrailingSlash(baseURL)
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  const baseAlreadyHasApi = /\/api$/i.test(normalizedBase)
  const pathAlreadyHasApi = normalizedPath.startsWith('/api/')

  if (baseAlreadyHasApi || pathAlreadyHasApi) {
    return `${normalizedBase}${normalizedPath}`
  }

  return `${normalizedBase}/api${normalizedPath}`
}
