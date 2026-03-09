import axios from 'axios'
import { buildApiUrl } from '../../../../../../_shared/url'

interface User {
  email: string
  name: string
}

const postSubscribeUser = async (
  eventId: number,
  activityId: number,
  user: User,
) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.post(
      buildApiUrl(
        baseURL,
        `/web/events/${eventId}/activities/${activityId}/subscribe`,
      ),
      {
        name: user.name,
        email: user.email,
      },
    )
    return response.data
  } catch (error) {
    console.error('[postSubscribeUser] error: ', error)
    throw error
  }
}

export { postSubscribeUser }
