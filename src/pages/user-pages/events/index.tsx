import { getWebEvents } from 'api/web/events/get'
import CardsSet from 'components/user-components/cards-set'
import Footer from 'components/user-components/footer'
import SearchBar from 'components/user-components/search-bar'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/user-components/header'
import GlobalStyles from '../../../styles/GlobalStyles'

import { Container } from './style'

// Dicionário com os IDs dos eventos e seus respectivos links convertidos do Drive
const mapaDeFotos: Record<number | string, string> = {
  1: 'https://drive.google.com/uc?export=view&id=1hDETiAb1dFaS-kJ0UvnYKwSY8OYztqVk',
  2: 'https://drive.google.com/uc?export=view&id=1Aw9-O9_xfarODFPrZpKEqTwMQ-CD1rSI',
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<any[]>([])
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
    startDate: new Date(event?.start_date ?? event?.startDate),
    endDate: new Date(event?.end_date ?? event?.endDate),
    eventPlace: event?.location ?? event?.eventPlace ?? '',
    coffeeLink: event?.coffeePaymentLink ?? event?.link_coffee ?? '',
    imageUrl: event?.id ? mapaDeFotos[event.id] : undefined,
  }))

  return (
    <Container>
      <GlobalStyles />
      <Header
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
      <SearchBar onSearch={setSearch} />
      <CardsSet cards={cards} />
      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default Events
