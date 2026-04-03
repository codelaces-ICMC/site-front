import axios from 'axios'
import { buildApiUrl } from '../../_shared/url'
import { normalizeWebEvent, type WebEvent } from './normalizeWebEvent'

export type { WebEvent }

export const getWebEvents = async (search?: string): Promise<WebEvent[]> => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/web/events?searchParam=${search}`),
    )

    const list = Array.isArray(response.data)
      ? response.data
      : (response.data.events ?? [])

    return list
      .map((item: Record<string, unknown>) => normalizeWebEvent(item))
      .filter((e: WebEvent | undefined): e is WebEvent => e != null)
  } catch (error) {
    console.error('[getWebEvents] error: ', error)
    return []
  }
}
