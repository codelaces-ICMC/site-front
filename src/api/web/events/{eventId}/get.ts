import axios from 'axios'
import { buildApiUrl, resolveApiBaseUrl } from '../../../_shared/url'
import { normalizeWebEvent, type WebEvent } from '../normalizeWebEvent'

const getWebEvent = async (eventId: number): Promise<WebEvent> => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/web/events/${eventId}`),
    )
    const event = normalizeWebEvent(response.data as Record<string, unknown>)
    if (!event) {
      throw new Error('Resposta de evento inválida')
    }
    return event
  } catch (error) {
    console.error('[getWebEvent] error: ', error)
    throw error
  }
}

export { getWebEvent }
