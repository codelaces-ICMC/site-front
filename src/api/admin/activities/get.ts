import axios from 'axios'
import { getAdminAuthHeaders } from '../../_shared/auth'
import { mapBackendActivitiesListToFront } from '../../_shared/mappers'
import { buildApiUrl } from '../../_shared/url'

axios.defaults.withCredentials = true

const getAdminActivities = async (search?: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!
  const query = search?.trim()
    ? `/admin/activities?searchParam=${encodeURIComponent(search.trim())}`
    : '/admin/activities'
  try {
    const response = await axios.get(buildApiUrl(baseURL, query), {
      headers: getAdminAuthHeaders(),
    })
    return mapBackendActivitiesListToFront(response.data)
  } catch (error) {
    console.error('[getAdminActivities] error: ', error)
    throw error
  }
}

export { getAdminActivities }
