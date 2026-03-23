import axios from 'axios'
import { getAdminAuthHeaders } from '../../../_shared/auth'
import {
  mapBackendActivityToFront,
  mapFrontActivityToBackend,
} from '../../../_shared/mappers'
import { buildApiUrl } from '../../../_shared/url'

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
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.put(
      buildApiUrl(baseURL, `/admin/activities/${event.activityId}`),
      mapFrontActivityToBackend(event),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendActivityToFront(response.data)
  } catch (error) {
    console.error('[updateAdminActivityById] error: ', error)
    throw error
  }
}

export { updateAdminActivityById }
