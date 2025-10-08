import React, { useState, useEffect } from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import FooterBranco from '../../../components/user-components/computer-window/footer-branco'
import ToggleButton from 'components/thematic-components/quest&answer'
import ButtonProps from 'components/user-components/props/button-props'

import BannerImage from '../../../assets/img/hackathon2025/banner.png'
import lineTimeImage from '../../../assets/img/hackathon2025/linha_tempo.png'

import Amdocs from '../../../assets/img/patrocinadores/amdocs.png'
import Alura from '../../../assets/img/patrocinadores/alura.png'
import ICMC from '../../../assets/img/patrocinadores/ICMC.png'
import EESC from '../../../assets/img/patrocinadores/EESC.png'

import { Container, HeaderContainer } from './style'

const HomeHackathon: React.FC = () => {
  const questionsAndAnswers: ButtonProps[] = [
    {
      question: 'O que é um hackathon?',
      answer:
        'É uma competição em que as participantes desenvolvem soluções tecnológicas para algum problema específico.',
    },
    {
      question: 'Por que participar?',
      answer:
        'Uma forma muito divertida de aprender como funciona a elaboração de projetos na área de TI e de fazer networking é através de hackathons! Além disso, você e sua equipe colocarão as mãos na massa para criar uma solução para um problema real.',
    },
    {
      question: 'Quais são os requisitos para participar?',
      answer: 'Ser uma mulher cis ou trans e ser apaixonada por tecnologia.',
    },
    {
      question: 'Quantas integrantes cada equipe terá?',
      answer: 'As equipes devem ter 3 participantes.',
    },
    {
      question: 'O que levar no dia?',
      answer:
        'Computador e carregador para conseguir desenvolver sua ideia. Caneca ou copo para evitar desperdício de copos plásticos. Teremos coffee, mas se precisar de algum lanchinho a mais tenha em mente que a cantina fica fechada aos fins de semana.',
    },
    {
      question: 'Ganho certificado?',
      answer: 'Sim : )',
    },
  ]

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
      <div className='banner-area'>
        <img
          className='banner-home'
          src={BannerImage}
          alt='Desenho de página de jornal impresso. O termo Fake News está impresso no seu título.'
        />
      </div>
      <div className='main-infos'>
        <h1 className='title'>TEMA</h1>
        <h2 className='theme'>
          Fake News e a importância do letramento crítico e midiático
        </h2>
        <p className='main-text'>
          Fake news não são uma novidade, - em 1835, o jornal New York Sun [1]
          já publicava histórias falsas sobre homens-morcego morando na Lua. Mas
          foi com as redes sociais que a desinformação ganhou superpoderes.
          Hoje, uma mentira pode dar a volta ao mundo antes que a verdade tenha
          chance de colocar os sapatos. Por definição, fake news são informações
          fabricadas que imitam o conteúdo jornalístico em forma, mas não em
          processo ou intenção organizacionais, criadas para enganar
          deliberadamente, muitas vezes misturando fatos reais com distorções e
          mentiras completas. Em 2023, segundo o Reuters Institute [2], 87% dos
          brasileiros se declararam preocupados com a dificuldade de distinguir
          o real do falso na internet.
        </p>
        <p className='main-references'>
          [1]{' '}
          <a href='https://www.bbc.com/portuguese/geral-63608008'>
            O Grande Engodo da Lua
          </a>{' '}
          <br />
          [2]{' '}
          <a href='https://www.poder360.com.br/midia/cai-de-27-para-17-o-percentual-de-brasileiros-que-pagam-por-noticias-on-line/'>
            Cai de 27% para 17% o percentual de brasileiros que pagam por
            noticias online
          </a>
        </p>
        <div className='btn-area'>
          <a className='btn' href='../../../../docs/Regulamento2025.pdf'>
            <h3 className='btn-text'>CONFIRA O EDITAL</h3>
          </a>
          <a className='btn' href='../../../../docs/Tema2025.pdf'>
            <h3 className='btn-text'>LEIA O MATERIAL DE APOIO</h3>
          </a>
          <a className='btn' href='https://forms.gle/AJhXrYCTihrS2e8H7'>
            <h3 className='btn-text'>INSCRIÇÕES ABERTAS</h3>
          </a>
        </div>
      </div>
      <div className='patrocinadores'>
        <h1 className='title'>AGRADECIMENTO AOS NOSSOS PATROCINADORES!</h1>
        <div className='gold'>
          <div className='patrocinio'>
            <img className='gold-img' src={Alura} alt='Logo da Alura' />
            <p className='gold-text'>Alura</p>
          </div>
          <div className='patrocinio'>
            <img className='gold-img' src={ICMC} alt='Logo dO ICMC' />
            <p className='gold-text'>ICMC - USP</p>
          </div>
          <div className='patrocinio'>
            <img className='gold-img' src={EESC} alt='Logo da EESC' />
            <p className='gold-text'>EESC - USP</p>
          </div>
        </div>
        <div className='bronze'>
          <div className='patrocinio'>
            <img className='bronze-img' src={Amdocs} alt='Logo da Amdocs' />
            <p className='bronze-text'>AMDOCS</p>
          </div>
        </div>
      </div>
      <div className='programacao-hackathon'>
        <h1 className='title' id='title-programacao'>
          PROGRAMAÇÃO DO EVENTO (24/05)!
        </h1>
        <div className='programacao-area'>
          <div className='itens-programacao-hackathon'>
            <img
              className='line-time'
              src={lineTimeImage}
              alt='Linha do tempo com a programação do evento. 8:30 Credenciamento + Abertura do evento. 11:00 Início do Desenvolvimento. 16:00 Organização para apresentação do Pitch. 16:30 Apresentação do Pitch. 18:30 Premiação + Encerramento'
            />
          </div>
          <div className='map-area'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.0750022254665!2d-47.8992071248183!3d-22.0084370063836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8772c61b4ad21%3A0xbdd43248d1f6dbae!2sEESC%20-%20Escola%20de%20Engenharia%20de%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1741124694866!5m2!1spt-BR!2sbr'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
            <p className='main-references'>
              Local do evento: Espaço Primavera - São Carlos - EESC USP São
              Carlos, São Carlos - SP
            </p>
          </div>
        </div>
      </div>
      <div className='faq'>
        <h1 className='title'>FAQ</h1>
        <div className='QandA'>
          {questionsAndAnswers.map((qa, index) => (
            <ToggleButton
              key={index}
              question={qa.question}
              answer={qa.answer}
            />
          ))}
        </div>
      </div>
      <FooterBranco />
    </Container>
  )
}

export default HomeHackathon
