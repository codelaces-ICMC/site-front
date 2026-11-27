import axios from 'axios'
import { buildApiUrl, resolveApiBaseUrl } from '../../_shared/url'
import { normalizeWebVisit, type WebVisit } from './normalizeWebVisit'

export type { WebVisit }

export const getWebVisits = async (): Promise<WebVisit[]> => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.get(buildApiUrl(baseURL, '/web/visits'))

    const list = Array.isArray(response.data)
      ? response.data
      : (response.data?.visits ?? [])

    return list
      .map((item: Record<string, unknown>) => normalizeWebVisit(item))
      .filter((v: WebVisit | null): v is WebVisit => v != null)
  } catch (error) {
    console.error('[getWebVisits] error: ', error)
    throw error
  }
}
