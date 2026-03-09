import axios from 'axios'
import { getAdminAuthHeaders } from '../../_shared/auth'
import { mapBackendActivitiesListToFront } from '../../_shared/mappers'
import { buildApiUrl } from '../../_shared/url'

axios.defaults.withCredentials = true

const getAdminActivities = async (search?: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!
  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/admin/activities?searchParam=${search}`),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendActivitiesListToFront(response.data)
  } catch (error) {
    console.error('[getAdminActivities] error: ', error)
    throw error
  }
}

export { getAdminActivities }
