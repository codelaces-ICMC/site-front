import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import NewsCard from 'components/user-components/computer-window/card-news'
import { Container } from './style-teste'
import Modal from 'components/user-components/computer-window/modal'
import Highlights from 'components/user-components/computer-window/highlights'

const Teste: React.FC = () => {
  const newsData = {
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*CgHtxyVe8GQF6depD75g_A.png',
    title: 'Perdeu nosso último evento? Ainda dá tempo de assistir',
    description:
      'Ficou atolada no trabalho? Dormiu e perdeu a hora? Não se preocupe, nosso evento está gravado no Youtube e você pode acessá-lo qundo desejar',
    author: 'Autora',
    date: 'DD/MM/AAAA',
    readTime: 3,
    linkArticle:
      'https://medium.com/brazilians-in-tech/escreva-para-a-brazilians-in-tech-94b01babe737',
  }

  return (
    <Container>
      <GlobalStyles />
      <div className='secao-principal'>
        <h1 className='title'>TESTANDO FONTE DO TÍTULO</h1>
        <h2 className='text'>Testando fonte padrão de texto</h2>

        <Highlights
          subtitle='PROCESSO SELETIVO 2026'
          description='Quer ser Provoke Society? Incomodar franceses sem noção? Sair em um rolêzinho só com mulheres? Não perca a oportunidade de fazer parte do Codelaces! Inscrições abertas até XX/XX!'
          buttonText='INSCREVA-SE'
          buttonLink='/#processo-seletivo'
        />
      </div>
      <Modal />
      <NewsCard
        imageUrl={newsData.imageUrl}
        imageAlt='Banner do evento Dia das Mulheres na Engenharia'
        title={newsData.title}
        description={newsData.description}
        author={newsData.author}
        date={newsData.date}
        readTimeInMinutes={newsData.readTime}
        linkArticle={newsData.linkArticle}
      />
    </Container>
  )
}

export default Teste
