import React from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import Header from 'components/user-components/header'
import Footer from 'components/user-components/footer'
import Banner from 'components/user-components/banner'

import { Container } from './style'

const Home: React.FC = () => {
  const headerEvents = [
    { name: 'Processo Seletivo', targetId: 'processo-seletivo' },
  ]

  return (
    <Container>
      <GlobalStyles />
      <Header
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
        events={headerEvents}
      />
      <section id='banner'>
        <Banner />
      </section>
      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default Home
