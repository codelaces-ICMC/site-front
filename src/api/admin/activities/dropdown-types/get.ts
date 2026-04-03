import axios from 'axios'
import { getAdminAuthHeaders } from '../../../_shared/auth'
import { mapBackendDropdownActivityTypesToFront } from '../../../_shared/mappers'
import { buildApiUrl, resolveApiBaseUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const getAdminActivityTypesDropdown = async () => {
  const baseURL = resolveApiBaseUrl()
  try {
    const response = await axios.get(
      buildApiUrl(baseURL, '/admin/activities/types'),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendDropdownActivityTypesToFront(response.data)
  } catch (error) {
    console.error('[getAdminActivityTypesDropdown] error: ', error)
    throw error
  }
}

export { getAdminActivityTypesDropdown }
