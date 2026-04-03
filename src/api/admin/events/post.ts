import axios from 'axios'
import { getAdminAuthHeaders } from '../../_shared/auth'
import {
  mapBackendEventToFront,
  mapFrontEventToBackend,
} from '../../_shared/mappers'
import { buildApiUrl, resolveApiBaseUrl } from '../../_shared/url'

axios.defaults.withCredentials = true

interface Event {
  eventName: string
  startDate: string
  endDate: string
  registrationStart?: string
  registrationEnd?: string
  maxParticipants?: number
  local?: string
  description?: string
  cover?: string
  coffeeValue?: number
  coffeePaymentLink?: string
  driveGalleryLink?: string
}

const postAdminEvents = async (event: Event) => {
  const baseURL = resolveApiBaseUrl()

  try {
    const response = await axios.post(
      buildApiUrl(baseURL, '/admin/events'),
      mapFrontEventToBackend(event as unknown as Record<string, unknown>),
      { headers: getAdminAuthHeaders() },
    )
    return mapBackendEventToFront(response.data)
  } catch (error) {
    console.error('[postAdminEvents] error: ', error)
    throw error
  }
}

export { postAdminEvents }
