import { getWebEvents } from 'api/web/events/get'
import CardsSet from 'components/user-components/cards-set'
import Footer from 'components/user-components/footer'
import SearchBar from 'components/user-components/search-bar'
import React, { useEffect, useState } from 'react'
import defaultEventCover from '../../../assets/icons/logos/logo-fundo-branco.png'
import Header from '../../../components/user-components/header'
import GlobalStyles from '../../../styles/GlobalStyles'

import CardEventProps from 'components/props/props-card-event'
import { normalizeGoogleDriveEmbedUrl } from 'utils/googleDriveImageUrl'
import { Container } from './style'

/** Payload de evento na listagem pública (`/web/events`). */
type WebListEvent = {
  id?: number
  name?: string
  eventName?: string
  startDate?: string
  endDate?: string
  location?: string
  eventPlace?: string
  coffeePaymentLink?: string
  link_coffee?: string
  cover?: string
}

function eventCoverUrl(event: WebListEvent | undefined): string {
  const raw = event?.cover
  const s = typeof raw === 'string' ? raw.trim() : ''
  if (!s) return defaultEventCover
  return normalizeGoogleDriveEmbedUrl(s)
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<WebListEvent[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getWebEvents(search)
      setEvents(response)
    }

    fetchEvents()
  }, [search])

  const cards = events.map(event => ({
    cardNumber: event?.id,
    eventName: event?.name ?? event?.eventName ?? '',
    startDate: new Date(event?.startDate ?? ''),
    endDate: new Date(event?.endDate ?? ''),
    eventPlace: event?.location ?? event?.eventPlace ?? '',
    coffeeLink: event?.coffeePaymentLink ?? event?.link_coffee ?? '',
    imageUrl: eventCoverUrl(event),
  }))

  return (
    <Container>
      <GlobalStyles />
      <Header
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
      <SearchBar onSearch={setSearch} />
      <CardsSet cards={cards as CardEventProps[]} />
      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default Events
