import axios from 'axios'
import { buildApiUrl } from '../../../../_shared/url'

const getWebActivities = async (eventId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

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
