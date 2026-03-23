import axios from 'axios'
import { buildApiUrl } from '../../_shared/url'

export const getWebEvents = async (search?: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/web/events?searchParam=${search}`),
    )

    console.log('[getWebEvents] response.data:', response.data)

    return Array.isArray(response.data)
      ? response.data
      : (response.data.events ?? [])
  } catch (error) {
    console.error('[getWebEvents] error: ', error)
    return []
  }
}
