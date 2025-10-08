import React from 'react'
import { Container, StyledLogo } from './style'

interface EventItem {
  name: string
  targetId: string // O 'id' da div ou seção para onde a página deve rolar
}
interface HeaderProps {
  backgroundColor: string
  textColor: string
  events?: EventItem[]
}

export default function Header({
  backgroundColor,
  textColor,
  events = [],
}: HeaderProps) {
  const handleScroll = (targetId: string) => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    // passar a cor como parâmetro e também o evento mais próximo para usar esse handleScroll (pode ser mais de um evento)
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      <a href='/'>
        <StyledLogo logoColor={backgroundColor} />
      </a>
      <div className='menu'>
        {/* Links Estáticos */}
        <li>
          <a href='/about'>SOBRE NÓS</a>
        </li>
        <li>|</li>
        <li>
          <a href='/events'>EVENTOS</a>
        </li>

        {/* Links Dinâmicos */}
        {events.map((event, index) => (
          <React.Fragment key={event.targetId}>
            <li>|</li>
            <li>
              <a
                href={`#${event.targetId}`}
                onClick={e => {
                  e.preventDefault()
                  handleScroll(event.targetId)
                }}
              >
                {event.name.toUpperCase()}
              </a>
            </li>
            {index < events.length - 1 && <li>|</li>}
          </React.Fragment>
        ))}
      </div>
    </Container>
  )
}
