import axios from 'axios'
import { buildApiUrl, resolveApiBaseUrl } from '../../../../_shared/url'

const getWebActivities = async (eventId: number) => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/web/events/${eventId}/activities`),
    )
    return response.data
  } catch (error) {
    console.error('[getWebActivities] error: ', error)
    throw error
  }
}

export { getWebActivities }
