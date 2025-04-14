import axios from 'axios'

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
    const response = await axios.post(baseURL + `/admin/events`, {
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
      description: event.description,
      cover: event.cover,
      coffeValue: event.coffeeValue,
      coffeePaymentLink: event.coffeePaymentLink,
      driveGaleryLink: event.driveGalleryLink,
    })
    return response.data
  } catch (error) {
    console.error('[postAdminEvents] error: ', error)
    throw error
  }
}

export { postAdminEvents }
