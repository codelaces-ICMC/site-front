import axios from 'axios'

import { clearAdminAuthToken, getAdminAuthToken } from './auth'

const LOGIN_PATH = '/admin/login'

function requestUsedBearer(config: { headers?: unknown } | undefined): boolean {
  if (!config?.headers) return false
  const h = config.headers as Record<string, unknown> & {
    get?: (key: string) => unknown
  }
  const auth =
    typeof h.get === 'function'
      ? (h.get('Authorization') ?? h.get('authorization'))
      : (h.Authorization ?? h.authorization)
  return typeof auth === 'string' && auth.startsWith('Bearer ')
}

/**
 * 401 em requisição autenticada (admin) → sessão inválida/expirada → login.
 * Não reage ao 401 do POST de login (sem Bearer no header).
 */
export function registerAdmin401Redirect(): void {
  axios.interceptors.response.use(
    res => res,
    error => {
      if (!axios.isAxiosError(error) || error.response?.status !== 401) {
        return Promise.reject(error)
      }

      if (!requestUsedBearer(error.config)) {
        return Promise.reject(error)
      }

      if (getAdminAuthToken()) {
        clearAdminAuthToken()
      }

      if (
        window.location.pathname !== LOGIN_PATH &&
        !window.location.pathname.startsWith(`${LOGIN_PATH}/`)
      ) {
        window.location.replace(`${window.location.origin}${LOGIN_PATH}`)
      }

      return Promise.reject(error)
    },
  )
}
