import axios from 'axios'

/** Mensagem amigável a partir de respostas Axios ou Error genérico. */
export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data
    if (data && typeof data === 'object') {
      const d = data as Record<string, unknown>
      const nested = d.error
      if (nested && typeof nested === 'object') {
        const msg = (nested as Record<string, unknown>).message
        if (typeof msg === 'string' && msg.trim() !== '') return msg
      }
      if (typeof nested === 'string' && nested.trim() !== '') return nested
      const m = d.message
      if (Array.isArray(m) && m[0] != null) return String(m[0])
      if (typeof m === 'string' && m.trim() !== '') return m
    }
  }
  if (error instanceof Error && error.message) return error.message
  return fallback
}

export function isApiUnauthorized(error: unknown): boolean {
  return axios.isAxiosError(error) && error.response?.status === 401
}
