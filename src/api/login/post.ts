import axios from 'axios'
import { setAdminAuthToken } from '../_shared/auth'
import { buildApiUrl } from '../_shared/url'

axios.defaults.withCredentials = true

interface User {
  email: string
  password: string
}

const postAdminLogin = async (user: User) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.post(buildApiUrl(baseURL, '/auth/login'), {
      password: user.password,
      email: user.email,
    })
    setAdminAuthToken(response.data?.access_token)
    return response.data
  } catch (error) {
    console.error('[postAdminLogin] error: ', error)
    throw error
  }
}

export { postAdminLogin }
