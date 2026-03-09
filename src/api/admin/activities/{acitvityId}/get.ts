import axios from 'axios'
import { mapBackendActivityToFront } from '../../../_shared/mappers'
import { buildApiUrl } from '../../../_shared/url'

axios.defaults.withCredentials = true

const getAdminActivityById = async (activityId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.get(
      buildApiUrl(baseURL, `/admin/activities/${activityId}`),
    )
    return mapBackendActivityToFront(response.data)
  } catch (error) {
    console.error('[getAdminActivityById] error: ', error)
    throw error
  }
}

export { getAdminActivityById }
