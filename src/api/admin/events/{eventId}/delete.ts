import axios from 'axios'
import { buildApiUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const deleteAdminEventById = async (eventId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.delete(
      buildApiUrl(baseURL, `/admin/events/${eventId}`),
    )
    return response.data
  } catch (error) {
    console.error('[deleteAdminEventById] error: ', error)
    throw error
  }
}

export { deleteAdminEventById }
