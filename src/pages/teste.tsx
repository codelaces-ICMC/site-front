import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { Container } from './style-teste'
import PopupForm from '../components/user-components/computer-window/popup-forms'

const Teste: React.FC = () => {
  const handleClose = () => {
    console.log('Popup fechado')
  }

  // Defina os IDs conforme necessário para o teste
  const eventId = 1
  const activityId = 1

  return (
    <Container>
      <GlobalStyles />
      <PopupForm
        onClose={handleClose}
        eventId={eventId}
        activityId={activityId}
      />
      <div className='secao-principal'>
        <h1 className='title'>TESTANDO FONTE DO TÍTULO</h1>
        <h2 className='text'>Testando fonte padrão de texto</h2>
      </div>
    </Container>
  )
}
//lembrar de voltar ao que era antes
export default Teste
