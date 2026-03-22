import React, { useEffect, useState } from 'react'

import { Container } from './style'

import InfoProps from '../../props/props-info-event'

const AltInfoEvent: React.FC<{ infos: InfoProps[] }> = ({ infos }) => {
  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <Container>
      {infos.map(event => (
        <div className='main-div'>
          <div className='column' id='first-column'>
            <p id='first-p'>
              <span>EVENTO: </span>
              {event.eventName}
            </p>
            <p>
              <span>DATA: </span>
              {formatDate(event.startDate)}
            </p>
            <p>
              <span>HORÁRIO: </span>
              {formatTime(event.startDate)}
            </p>
            {event.coffeeValue && (
              <p>
                <span>PREÇO DO COFFEE: </span>
                {event.coffeeValue}
              </p>
            )}
            <div className='class-btn'>
              <a
                href='https://forms.gle/wEFNN43v8PtKanFf7'
                className='modal-btn'
              >
                INSCREVA-SE
              </a>
            </div>
            <h1 id='title-inscricoes'>
              INSCRIÇÕES ABERTAS ATÉ {formatDate(event.registrationEnd!)}
            </h1>
          </div>
        </div>
      ))}
    </Container>
  )
}
export default AltInfoEvent
