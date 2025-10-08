import React, { useState, useEffect } from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import Footer from '../../../components/user-components/computer-window/footer'

import BannerImage from '../../../assets/img/general_imgs/banner-home.png'

import { Container, HeaderContainer, FooterContainer } from './style'

const Home: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <GlobalStyles />
      <img className='banner-home' src={BannerImage} alt='Banner do WIT' />
      <h1 className='selective-title'>
        Quer participar do nosso próximo evento?
      </h1>
      <p className='selective-text'>
        Então, se inscreva na nossa Hackathon 2025! Corre que as vagas são
        limitadas. Para conferir é só clicar em &quot;HACKATHON&quot; no topo da
        página e você poderá saber mais sobre esse evento incrível. 😁
      </p>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  )
}

export default Home
