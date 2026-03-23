import axios from 'axios'
import { getAdminAuthHeaders } from '../../../_shared/auth'
import {
  mapBackendEventToFront,
  mapFrontEventToBackend,
} from '../../../_shared/mappers'
import { buildApiUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

interface EventParams {
  eventId: number
  eventName?: string
  local?: string
  registrationStart?: string
  registrationEnd?: string
  maxParticipants?: number
  description?: string
  driveGalleryLink?: string
  coffeeValue?: number
  startDate?: string
  endDate?: string
}

const updateAdminEventById = async (event: EventParams) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.put(
      buildApiUrl(baseURL, `/admin/events/${event.eventId}`),
      mapFrontEventToBackend(event),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendEventToFront(response.data)
  } catch (error) {
    console.error('[updateAdminEventById] error: ', error)
    throw error
  }
}

export { updateAdminEventById }
