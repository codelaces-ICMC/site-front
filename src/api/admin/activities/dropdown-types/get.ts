import axios from 'axios'
import { getAdminAuthHeaders } from '../../../_shared/auth'
import { mapBackendDropdownActivityTypesToFront } from '../../../_shared/mappers'
import { buildApiUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const getAdminActivityTypesDropdown = async () => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!
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
