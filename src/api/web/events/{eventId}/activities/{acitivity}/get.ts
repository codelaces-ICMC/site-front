import axios from 'axios'
import { buildApiUrl, resolveApiBaseUrl } from '../../../../../_shared/url'

const getWebActivity = async (eventId: number, activityId: number) => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/web/events/${eventId}/activities/${activityId}`),
    )
    return response.data
  } catch (error) {
    console.error('[getWebActivity] error: ', error)
    throw error
  }
}

export { getWebActivity }
