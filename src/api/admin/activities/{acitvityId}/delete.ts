import axios from 'axios'
import { buildApiUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const deleteAdminActivityById = async (activityId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.delete(
      buildApiUrl(baseURL, `/admin/activities/${activityId}`),
    )
    return response.data
  } catch (error) {
    console.error('[deleteAdminActivityById] error: ', error)
    throw error
  }
}

export { deleteAdminActivityById }
