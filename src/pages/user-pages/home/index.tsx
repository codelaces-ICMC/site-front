import React from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import Header from 'components/user-components/header'
import Footer from 'components/user-components/footer'
import Banner from 'components/user-components/banner'
import NewsCarousel from 'components/user-components/carrossel-news'
import NewsIcon from '../../../assets/icons/general/info.svg'

import { Container } from './style'

const Home: React.FC = () => {
  const headerEvents = [
    { name: 'Processo Seletivo', targetId: 'processo-seletivo' },
  ]

  const ultimasNoticias = [
    {
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*CgHtxyVe8GQF6depD75g_A.png',
      imageAlt: 'Capa do artigo da Brazilians in Tech',
      title: 'Perdeu nosso último evento? Ainda dá tempo de assistir',
      description:
        'Ficou atolada no trabalho? Dormiu e perdeu a hora? Não se preocupe, nosso evento está gravado no Youtube e você pode acessá-lo qundo desejar',
      author: 'Brazilians in Tech',
      date: '23/02/2026',
      readTimeInMinutes: 3,
      linkArticle:
        'https://medium.com/brazilians-in-tech/escreva-para-a-brazilians-in-tech-94b01babe737',
    },
    {
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*VFXXBeDv6deV-H65.png',
      imageAlt: 'Capa do artigo da Brazilians in Tech',
      title: 'Women Rising: Why Women inTech Writers Are Invisible on Substack',
      description:
        'Women are writing about technology on Substack. A lot of them. Their work is thoughtful, well researched, and engaging. But when you look at who shows up on Substack’s Technology Bestseller and Rising lists, a different story appears. One that has very little to do with talent, and everything to do with how visibility actually works.',
      author: 'Dinah Davis',
      date: '08/02/2026',
      readTimeInMinutes: 7,
      linkArticle:
        'https://medium.com/code-like-a-girl/women-rising-why-women-intech-writers-are-invisible-on-substack-92ec55909e95',
    },
    {
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*CgHtxyVe8GQF6depD75g_A.png',
      imageAlt: 'Capa do artigo da Brazilians in Tech',
      title: 'Perdeu nosso último evento? Ainda dá tempo de assistir',
      description:
        'Ficou atolada no trabalho? Dormiu e perdeu a hora? Não se preocupe, nosso evento está gravado no Youtube e você pode acessá-lo qundo desejar',
      author: 'Brazilians in Tech',
      date: '23/02/2026',
      readTimeInMinutes: 3,
      linkArticle:
        'https://medium.com/brazilians-in-tech/escreva-para-a-brazilians-in-tech-94b01babe737',
    },
    {
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*VFXXBeDv6deV-H65.png',
      imageAlt: 'Capa do artigo da Brazilians in Tech',
      title: 'Women Rising: Why Women inTech Writers Are Invisible on Substack',
      description:
        'Women are writing about technology on Substack. A lot of them. Their work is thoughtful, well researched, and engaging. But when you look at who shows up on Substack’s Technology Bestseller and Rising lists, a different story appears. One that has very little to do with talent, and everything to do with how visibility actually works.',
      author: 'Dinah Davis',
      date: '08/02/2026',
      readTimeInMinutes: 7,
      linkArticle:
        'https://medium.com/code-like-a-girl/women-rising-why-women-intech-writers-are-invisible-on-substack-92ec55909e95',
    },
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
      <section id='carrossel-news'>
        <div className='title-news'>
          <img src={NewsIcon} />
          <h1>NOTÍCIAS</h1>
        </div>
        <NewsCarousel newsList={ultimasNoticias} />
      </section>
      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default Home
