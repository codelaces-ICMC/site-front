import axios from 'axios'
import { mapBackendEventsListToFront } from '../../_shared/mappers'
import { buildApiUrl } from '../../_shared/url'

axios.defaults.withCredentials = true

const getAdminEvents = async (search?: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/admin/events?searchParam=${search}`),
      { withCredentials: true },
    )
    return mapBackendEventsListToFront(response.data)
  } catch (error) {
    console.error('[getAdminEvents] error: ', error)
    throw error
  }
}

export { getAdminEvents }
