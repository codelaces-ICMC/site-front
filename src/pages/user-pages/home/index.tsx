import { getMediumPosts } from 'api/web/medium/posts/get'
import CardNewsProps from 'components/props/props-card-news'
import NewsCarousel from 'components/user-components/carrossel-news'
import Banner from 'components/user-components/banner'
import Footer from 'components/user-components/footer'
import Header from 'components/user-components/header'
import Highlights from 'components/user-components/highlights'
import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import NewsIcon from '../../../assets/icons/general/info.svg'

import { Container } from './style'

const Home: React.FC = () => {
  const [newsList, setNewsList] = useState<CardNewsProps[]>([])
  const [loadingNews, setLoadingNews] = useState(true)

  const headerEvents = [
    { name: 'Processo Seletivo', targetId: 'processo-seletivo' },
  ]

  useEffect(() => {
    const fetchNews = async () => {
      setLoadingNews(true)
      const posts = await getMediumPosts()
      setNewsList(posts)
      setLoadingNews(false)
    }

    fetchNews()
  }, [])

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
        {loadingNews ? (
          <p className='news-status-message'>Carregando...</p>
        ) : newsList.length > 0 ? (
          <NewsCarousel newsList={newsList} />
        ) : (
          <p className='news-status-message'>Em breve...</p>
        )}
      </section>
      <section id='highlight'>
        <Highlights
          subtitle='PROCESSO SELETIVO 2026'
          description='Quer participar de projetos com outras mulheres? Sair em um rolêzinho só com mulheres? Não perca a oportunidade de fazer parte do Codelaces! Inscrições abertas até XX/XX!'
          buttonText='INSCREVA-SE'
          buttonLink='/#processo-seletivo'
        />
      </section>
      <Footer
        backgroundColor='var(--cor-branco)'
        textColor='var(--cor-roxo-escuro)'
      />
    </Container>
  )
}

export default Home
