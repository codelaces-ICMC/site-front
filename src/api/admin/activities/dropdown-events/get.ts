import axios from 'axios'
import { mapBackendDropdownEventsToFront } from '../../../_shared/mappers'
import { buildApiUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const getAdminActivitiesDropdown = async () => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!
  try {
    const response = await axios.get(
      buildApiUrl(baseURL, '/admin/activities/dropdown'),
    )
    return mapBackendDropdownEventsToFront(response.data)
  } catch (error) {
    console.error('[getAdminActivitiesDropdown] error: ', error)
    throw error
  }
}

export { getAdminActivitiesDropdown }
