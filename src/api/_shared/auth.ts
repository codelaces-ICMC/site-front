export const ADMIN_AUTH_TOKEN_KEY = 'admin_access_token'

export const setAdminAuthToken = (token?: string) => {
  if (!token) return
  localStorage.setItem(ADMIN_AUTH_TOKEN_KEY, token)
}

export const getAdminAuthToken = () => {
  return localStorage.getItem(ADMIN_AUTH_TOKEN_KEY)
}

export const clearAdminAuthToken = () => {
  localStorage.removeItem(ADMIN_AUTH_TOKEN_KEY)
}

export const getAdminAuthHeaders = () => {
  const token = getAdminAuthToken()
  if (!token) return undefined

  return {
    Authorization: `Bearer ${token}`,
  }
}
