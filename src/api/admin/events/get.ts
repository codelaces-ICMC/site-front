import axios from 'axios'
import { getAdminAuthHeaders } from '../../_shared/auth'
import { mapBackendEventsListToFront } from '../../_shared/mappers'
import { buildApiUrl } from '../../_shared/url'

axios.defaults.withCredentials = true

const getAdminEvents = async (search?: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!
  const query = search?.trim()
    ? `/admin/events?searchParam=${encodeURIComponent(search.trim())}`
    : '/admin/events'

  try {
    const response = await axios.get(buildApiUrl(baseURL, query), {
      withCredentials: true,
      headers: getAdminAuthHeaders(),
    })
    return mapBackendEventsListToFront(response.data)
  } catch (error) {
    console.error('[getAdminEvents] error: ', error)
    throw error
  }
}

export { getAdminEvents }
