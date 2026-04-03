import axios from 'axios'
import { getAdminAuthHeaders } from '../../../_shared/auth'
import {
  mapBackendActivityToFront,
  mapFrontActivityToBackend,
} from '../../../_shared/mappers'
import { buildApiUrl, resolveApiBaseUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

interface ActivityParams {
  activityId: number
  activityName?: string
  responsible?: string
  description?: string
  startTime?: string
  endTime?: string
  registrationAt?: string
  eventId?: number
  activityType?: string
}

const updateAdminActivityById = async (event: ActivityParams) => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.put(
      buildApiUrl(baseURL, `/admin/activities/${event.activityId}`),
      mapFrontActivityToBackend(event as unknown as Record<string, unknown>),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendActivityToFront(response.data)
  } catch (error) {
    console.error('[updateAdminActivityById] error: ', error)
    throw error
  }
}

export { updateAdminActivityById }
