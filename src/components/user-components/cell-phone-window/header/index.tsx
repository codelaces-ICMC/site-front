import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import { Container } from './style'

import MenuImage from '../../../../assets/img/icons/menu.png'

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // const navigate = useNavigate()

  // const handleScroll = () => {
  //   navigate('/')
  //   setTimeout(() => {
  //     const targetSection = document.getElementById('targetSection')
  //     if (targetSection) {
  //       targetSection.scrollIntoView({ behavior: 'smooth' })
  //     }
  //   }, 0) // Timeout para garantir que a navegação ocorreu antes da rolagem
  // }

  return (
    <Container>
      <div className='header-elements'>
        <button onClick={toggleMenu} className='btn-menu'>
          <img className='btn-menu' src={MenuImage} />
        </button>
        <a href='/'>
          <h1>WIT</h1>
        </a>
      </div>
      <div className='drop-down'>
        {isOpen && (
          <ul className='lista-menu'>
            <a href='/about'>
              <li>Sobre</li>
            </a>
            <a href='/events'>
              <li>Eventos</li>
            </a>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScFG2eJNnNmaBTBIw7bVEzZWeGpx1c4FWGLbhsWNlHYkWNcWw/viewform'>
              <li>Processo Seletivo</li>
            </a>
          </ul>
        )}
      </div>
    </Container>
  )
}

export default HamburgerMenu
