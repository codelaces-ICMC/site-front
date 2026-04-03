import axios from 'axios'
import { getAdminAuthHeaders } from '../../../_shared/auth'
import { mapBackendActivityToFront } from '../../../_shared/mappers'
import { buildApiUrl, resolveApiBaseUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const getAdminActivityById = async (activityId: number) => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/admin/activities/${activityId}`),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendActivityToFront(response.data)
  } catch (error) {
    console.error('[getAdminActivityById] error: ', error)
    throw error
  }
}

export { getAdminActivityById }
