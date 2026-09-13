import React from 'react'
import Header from '@components/user-components/header'
import Footer from '@components/user-components/footer'
import GlobalStyles from '@styles/GlobalStyles'

import DivasImg from '@assets/imgs/general/membras.png'
import Logo from '@assets/icons/logos/logo-fundo-branco.png'
import CCEXLogo from '@assets/icons/logos/CCEX-ICMC.png'
import FAFQLogo from '@assets/icons/logos/fafq-logo.png'

import { Container } from './style'

import CarrosselVisitas from '@components/user-components/user-visitas'

const AboutUs: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
      <section id='infos-grupo'>
        <div id='banner-container'>
          <img
            id='divas-img'
            src={DivasImg}
            alt='membras do grupo codelaces reunidas'
          />
          <img id='logo-img' src={Logo} alt='logo tipografada do Codelaces' />
        </div>
        <p>
          Somos um <span>grupo de extensão</span> vinculado à Universidade de
          São Paulo (<span>USP</span>), especificamente o Instituto de Ciências
          Matemáticas e de Computação da Universidade de São Paulo (
          <span>ICMC</span>) que tem como propósito transformar a realidade da{' '}
          <span>participação feminina</span> nas áreas de{' '}
          <span>ciência e tecnologia</span>. Nosso objetivo é criar espaços de
          troca, apoio e visibilidade para mulheres que desejam atuar ou já
          atuam nesses campos, tradicionalmente marcados por uma maioria
          masculina.
        </p>
        <p>
          Por meio da organização de eventos, rodas de conversa, oficinas,
          palestras e debates, buscamos promover discussões sobre os desafios
          enfrentados pelas mulheres nessas áreas, como a falta de{' '}
          <span>representatividade</span>, os preconceitos estruturais e as
          barreiras de acesso e <span>permanência</span>. Acreditamos que falar
          sobre essas questões é essencial para inspirar novas trajetórias e
          criar caminhos mais inclusivos e diversos.
        </p>
        <h2>APOIO</h2>
        <div id='apoiadores-container'>
          <img id='logo-apoiadores1' src={CCEXLogo} alt='logo da CCEX-ICMC' />
          <img id='logo-apoiadores2' src={FAFQLogo} alt='logo da FAFQ' />
        </div>
      </section>
      <section id='valores-section'>
        <h1> NOSSOS VALORES </h1>
        <div id='valores-container'>
          <div className='valor-container'>
            <h3>PROTAGONISMO FEMININO</h3>
            <p>
              Somos um grupo exclusivamente feminino, e essa identidade se
              reflete em nossos eventos, onde todas as convidadas e artistas
              contratadas são mulheres
            </p>
          </div>
          <div className='valor-container'>
            <h3>INCLUSÃO</h3>
            <p>
              Somos um grupo plural de mulheres de diferentes universidades,
              cidades e trajetórias de vida, unidas pela diversidade e apoio
              mútuo
            </p>
          </div>
          <div className='valor-container'>
            <h3>IMPACTO</h3>
            <p>
              Conectamos a universidade e a comunidade por meio de eventos que
              trazem conteúdo técnico, discussões atuais e a presença de grandes
              nomes do mercado
            </p>
          </div>
          <div className='valor-container'>
            <h3>VOLUNTARIADO</h3>
            <p>
              Somos um grupo voluntário e sem fins lucrativos. Todo recurso
              arrecadado é diretamente convertido em mais eventos e
              oportunidades para nossas participantes
            </p>
          </div>
        </div>
      </section>
      <section id='visitas-tecnicas'>
        <h1>VISITAS TÉCNICAS / VIAGENS</h1>
        <CarrosselVisitas />
      </section>

      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default AboutUs
