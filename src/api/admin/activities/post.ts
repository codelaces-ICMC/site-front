import axios from 'axios'
import { getAdminAuthHeaders } from '../../_shared/auth'
import {
  mapBackendActivityToFront,
  mapFrontActivityToBackend,
} from '../../_shared/mappers'
import { buildApiUrl, resolveApiBaseUrl } from '../../_shared/url'

axios.defaults.withCredentials = true

interface Activity {
  activityName: string
  startTime: string
  endTime: string
  description: string
  responsible: string
  eventId: number
  registrationAt: string
  activityType: string
}

const postAdminActivities = async (activity: Activity) => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.post(
      buildApiUrl(baseURL, '/admin/activities'),
      mapFrontActivityToBackend(activity as unknown as Record<string, unknown>),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendActivityToFront(response.data)
  } catch (error) {
    console.error('[postAdminActivities] error: ', error)
    throw error
  }
}

export { postAdminActivities }
