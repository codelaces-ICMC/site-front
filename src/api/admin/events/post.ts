import axios from 'axios'
import {
  mapBackendEventToFront,
  mapFrontEventToBackend,
} from '../../_shared/mappers'
import { buildApiUrl } from '../../_shared/url'

axios.defaults.withCredentials = true

interface Event {
  eventName: string
  startDate: string
  endDate: string
  description?: string
  cover?: string
  coffeeValue?: number
  coffeePaymentLink?: string
  driveGalleryLink?: string
}

const postAdminEvents = async (event: Event) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.post(
      buildApiUrl(baseURL, '/admin/events'),
      mapFrontEventToBackend(event),
    )
    return mapBackendEventToFront(response.data)
  } catch (error) {
    console.error('[postAdminEvents] error: ', error)
    throw error
  }
}

export { postAdminEvents }
