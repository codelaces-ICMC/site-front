import axios from 'axios'
import { getAdminAuthHeaders } from '../../../_shared/auth'
import { mapBackendDropdownEventsToFront } from '../../../_shared/mappers'
import { buildApiUrl, resolveApiBaseUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const getAdminActivitiesDropdown = async () => {
  const baseURL = resolveApiBaseUrl()
  try {
    const response = await axios.get(
      buildApiUrl(baseURL, '/admin/activities/dropdown'),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendDropdownEventsToFront(response.data)
  } catch (error) {
    console.error('[getAdminActivitiesDropdown] error: ', error)
    throw error
  }
}

export { getAdminActivitiesDropdown }
