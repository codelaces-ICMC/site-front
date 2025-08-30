import React from 'react'
import { Container } from './style'
import fotoHome from '../../../../assets/imgs/general/fotoHome.png'

export default function Highlights() {
  return (
    <Container>
      <h1>VEM Aí. PARTICIPE!</h1>
      <div className='highlights'>
        <div className='hightlights-left'>
          <h2>PROCESSO SELETIVO 2026</h2>
          <p>
            Quer ser Provoke Society? Incomodar franceses sem noção? Sair em um
            rolêzinho só com mulheres? Não perca a oportunidade de fazer parte
            do Codelaces! Inscrições abertas até XX/XX!
          </p>
          <a href='/#processo-seletivo'>
            <button>INSCREVA-SE</button>
          </a>
        </div>
        <img src={fotoHome} alt='Membras CodeLaces' />
      </div>
    </Container>
  )
}
