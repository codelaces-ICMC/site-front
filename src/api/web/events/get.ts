import axios from 'axios'

export const getWebEvents = async (search?: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!

  try {
    const response = await axios.get(
      baseURL + `/web/events?searchParam=${search}`,
    )

    console.log('[getWebEvents] response.data:', response.data)

    return Array.isArray(response.data)
      ? response.data
      : (response.data.events ?? [])
  } catch (error) {
    console.error('[getWebEvents] error: ', error)
    return []
  }
}
