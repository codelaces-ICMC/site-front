import axios from 'axios'
import { getAdminAuthHeaders } from '../../../_shared/auth'
import { mapBackendEventToFront } from '../../../_shared/mappers'
import { buildApiUrl, resolveApiBaseUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const getAdminEventById = async (eventId: number) => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/admin/events/${eventId}`),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendEventToFront(response.data)
  } catch (error) {
    console.error('[getAdminEventById] error: ', error)
    throw error
  }
}

export { getAdminEventById }
