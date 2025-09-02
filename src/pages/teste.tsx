// import React, { useState, useEffect } from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { Container } from './style-teste'
import Highlights from 'components/user-components/computer-window/highlights'

const Teste: React.FC = () => {
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
    </Container>
  )
}

export default Teste
