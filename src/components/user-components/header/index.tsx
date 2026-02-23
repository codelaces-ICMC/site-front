import React, { useState } from 'react'
import { Container, StyledLogo, Menu, Hamburger } from './style'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (targetId: string) => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    // passar a cor como parâmetro e também o evento mais próximo para usar esse handleScroll (pode ser mais de um evento)
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      <a href='/'>
        <StyledLogo logoColor={backgroundColor} />
      </a>

      {/* Botão Hambúrguer - visível apenas em mobile */}
      <Hamburger onClick={toggleMenu} isOpen={isMenuOpen}>
        <div />
        <div />
        <div />
      </Hamburger>

      <Menu isOpen={isMenuOpen} backgroundColor={backgroundColor}>
        <ul>
          {/* Links Estáticos */}
          <li>
            <a href='/about' onClick={() => setIsMenuOpen(false)}>
              SOBRE NÓS
            </a>
          </li>
          <li>|</li>
          <li>
            <a href='/events' onClick={() => setIsMenuOpen(false)}>
              EVENTOS
            </a>
          </li>

          {/* Links Dinâmicos */}
          {events.map(event => (
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
            </React.Fragment>
          ))}
        </ul>
      </Menu>
    </Container>
  )
}
