import axios from 'axios'
import { getAdminAuthHeaders } from '../../_shared/auth'
import { mapBackendEventsListToFront } from '../../_shared/mappers'
import { buildApiUrl, resolveApiBaseUrl } from '../../_shared/url'

axios.defaults.withCredentials = true

const getAdminEvents = async (search?: string) => {
  const baseURL = resolveApiBaseUrl()
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
