import React from 'react'
import { Link } from 'react-router-dom'

import CardPropsEvent from '../../props/props-card-event'
import EventCard from '../card-event'
import { Container } from './style'

const CardsSet: React.FC<{ cards: CardPropsEvent[] }> = ({ cards }) => {
  const [selectedCardId, setSelectedCardId] = React.useState<number | null>(
    null,
  )

  const handleClick = (cardNumber: number) => {
    if (selectedCardId === cardNumber) {
      setSelectedCardId(null)
    } else {
      setSelectedCardId(cardNumber)
    }
  }

  const currentDate = new Date()

  return (
    <Container>
      <div className='card-list'>
        {cards.map(card => (
          <div className='unique-card' key={card.cardNumber}>
            {card.endDate && currentDate <= new Date(card.endDate) ? (
              <Link to={`/events/info/`}>
                <div
                  className={`unique-card ${
                    selectedCardId === card.cardNumber ? 'selected' : ''
                  }`}
                  onClick={() => handleClick(card.cardNumber)}
                >
                  <EventCard
                    cardNumber={card.cardNumber}
                    eventName={card.eventName}
                    startDate={card.endDate}
                    endDate={card.endDate}
                    eventPlace={card.eventPlace}
                    coffeeLink={card.coffeeLink}
                    onClick={() => handleClick(card.cardNumber)}
                  />
                </div>
              </Link>
            ) : (
              <div
                className={`unique-card ${
                  selectedCardId === card.cardNumber ? 'selected' : ''
                }`}
                onClick={() => handleClick(card.cardNumber)}
              >
                <EventCard
                  cardNumber={card.cardNumber}
                  eventName={card.eventName}
                  startDate={card.endDate}
                  endDate={card.endDate}
                  eventPlace={card.eventPlace}
                  coffeeLink={card.coffeeLink}
                  onClick={() => handleClick(card.cardNumber)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}

export default CardsSet
