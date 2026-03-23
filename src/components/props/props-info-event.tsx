import Activities from './props-info-activity'

interface InfoProps {
  id: number
  eventName: string
  description?: string
  startDate: Date
  endDate: Date
  registrationStart?: Date
  registrationEnd?: Date
  link_coffee?: string
  coffeeValue?: string
  link_fotos?: string
  activities: Activities[]
}

export default InfoProps
