import { HTMLProps } from 'react'

interface CardEventProps extends HTMLProps<HTMLDivElement> {
  cardNumber: number
  eventName: string
  startDate?: Date
  endDate?: Date
  eventPlace: string
  coffeeLink: string
  onClick?: () => void
  imageUrl?: string
}

export default CardEventProps
