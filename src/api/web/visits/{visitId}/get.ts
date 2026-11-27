import axios from 'axios'
import { buildApiUrl, resolveApiBaseUrl } from '../../../_shared/url'
import { normalizeWebVisit, type WebVisit } from '../normalizeWebVisit'

const getWebVisit = async (visitId: number | string): Promise<WebVisit> => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/web/visits/${visitId}`),
    )
    const data = response.data as Record<string, unknown>
    const visit = normalizeWebVisit(
      (data?.visit as Record<string, unknown> | undefined) ?? data,
    )
    if (!visit) {
      throw new Error('Resposta de visita inválida')
    }
    return visit
  } catch (error) {
    console.error('[getWebVisit] error: ', error)
    throw error
  }
}

export { getWebVisit }
