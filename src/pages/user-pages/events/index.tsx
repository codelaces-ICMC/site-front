import React from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import Header from 'components/user-components/header'
import Footer from 'components/user-components/footer'
import SearchBar from 'components/user-components/search-bar'
import CardsSet from 'components/user-components/cards-set'

import { Container } from './style'

const Events: React.FC = () => {
  const meusEventos = [
    {
      cardNumber: 1,
      eventName: 'Workshop de React e TypeScript',
      startDate: new Date('2025-03-15T14:00:00'),
      endDate: new Date('2025-03-15T18:00:00'),
      eventPlace: 'Laboratório 6 - ICMC',
      coffeeLink: 'https://link-do-sympla.com',
    },
    {
      cardNumber: 2,
      eventName: 'Roda de Conversa: Mulheres na TI',
      startDate: new Date('2026-04-10T19:00:00'),
      endDate: new Date('2026-04-10T21:00:00'),
      eventPlace: 'Auditório Fernão Stella',
      coffeeLink: '',
    },
    {
      cardNumber: 3,
      eventName: 'Hackathon Codelaces',
      startDate: new Date('2026-05-20T08:00:00'),
      endDate: new Date('2026-05-22T20:00:00'),
      eventPlace: 'Vão Livre do ICMC',
      coffeeLink: 'https://forms.gle/exemplo',
    },
    {
      cardNumber: 4,
      eventName: 'Hackathon Codelaces',
      startDate: new Date('2026-05-20T08:00:00'),
      endDate: new Date('2026-05-22T20:00:00'),
      eventPlace: 'Vão Livre do ICMC',
      coffeeLink: 'https://forms.gle/exemplo',
    },
  ]
  return (
    <Container>
      <GlobalStyles />
      <Header
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
      <SearchBar />
      <CardsSet cards={meusEventos} />
      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default Events
