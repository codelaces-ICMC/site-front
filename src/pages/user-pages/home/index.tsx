import React, { useState, useEffect } from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import Header from '../../../components/user-components/computer-window/header'
import HeaderCellPhone from '../../../components/user-components/cell-phone-window/header'
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
<<<<<<< Updated upstream
      <Container>
          <GlobalStyles/>
          {windowWidth > 900 ? (
              <HeaderContainer>
                  <Header/>
              </HeaderContainer>
          ) : (
              <HeaderContainer>
                  <HeaderCellPhone/>
              </HeaderContainer>
          )}
          <img className='banner-home' src={BannerImage} alt="Banner do Women in Tech"/>
          <h1 className='selective-title'>Fiquem de olho nas nossas redes sociais e na seção de eventos para saber mais! 💜</h1>
          <FooterContainer>
              <Footer/>
          </FooterContainer>
      </Container>
  );
};
=======
    <Container>
      <GlobalStyles />
      {windowWidth > 900 ? (
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderCellPhone />
        </HeaderContainer>
      )}
      <img className='banner-home' src={BannerImage} alt='Banner do WIT' />
      <h1 className='selective-title'>Ficou interessada?</h1>
      <p className='selective-text'>
        Então, não perca a chance de se inscrever no nosso processo seletivo! É
        fácil, basta clicar em "PROCESSO SELETIVO" no topo da página e você será
        direcionado para nosso formulário de inscrição. 💜
      </p>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  )
}
>>>>>>> Stashed changes

export default Home
