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
  /** Se a capa falhar (429, link inválido, etc.); padrão: logo do projeto no card. */
  fallbackImageUrl?: string
}

export default CardEventProps
