const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')

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
