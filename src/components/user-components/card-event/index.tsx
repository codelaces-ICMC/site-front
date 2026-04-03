import React from 'react'

import { Container } from './style'

import CardEventProps from '../../props/props-card-event'

const Card: React.FC<CardEventProps & { onClick: () => void }> = ({
  eventName,
  startDate,
  endDate,
  eventPlace,
  imageUrl,
  onClick,
}) => {
  const isEventPassed = endDate && endDate < new Date()
  return (
    <Container>
      <div className='card-event' onClick={isEventPassed ? undefined : onClick}>
        <div className='div-img-card'>
          <img
            src={imageUrl}
            className='img-card'
            alt=''
            referrerPolicy='no-referrer'
          />
          {isEventPassed && <div className='overlay' />}
        </div>
        <div className='div-content-card'>
          <h2 className='card-title'>{eventName}</h2>
          <div className='div-content-card-details'>
            <span>
              {startDate && endDate && startDate.getDate() === endDate.getDate()
                ? // Mesmo dia
                  endDate.toLocaleDateString('pt-BR')
                : // Início e fim são dias diferentes, mostra os dois separados por hífen
                  startDate?.toLocaleDateString('pt-BR') +
                  ' - ' +
                  endDate?.toLocaleDateString('pt-BR')}
            </span>
            <span className='separator'> • </span>
            <span>{eventPlace}</span>
          </div>
        </div>
        <div className='div-show-more'>
          <span className='span-show-more'>
            {isEventPassed ? 'Evento encerrado' : 'Clique para saber mais'}
          </span>
        </div>
      </div>
    </Container>
  )
}
export default Card
