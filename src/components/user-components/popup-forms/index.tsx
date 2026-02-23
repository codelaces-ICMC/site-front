import React, { useState } from 'react'
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  Input,
  Button,
  Label,
} from './style'
import { postSubscribeUser } from 'api/web/events/{eventId}/activities/{acitivity}/subscribe/post' // ajuste o caminho conforme seu projeto

interface PopupFormProps {
  onClose: () => void
  eventId: number
  activityId: number
}

const PopupForm: React.FC<PopupFormProps> = ({
  onClose,
  eventId,
  activityId,
}) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')
    try {
      await postSubscribeUser(eventId, activityId, { name: nome, email })
      onClose()
    } catch (err) {
      /* mudar isso para um pop-up depois*/
      setError('Erro ao se inscrever.')
    }
  }

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <div className='campo-forms-inscricao'>
          <Label htmlFor='nome'>Nome Completo</Label>
          <Input
            id='nome'
            type='text'
            placeholder='Digite seu nome completo'
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div className='campo-forms-inscricao'>
          <Label htmlFor='email'>E-mail</Label>
          <Input
            id='email'
            type='email'
            placeholder='Digite seu e-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <Button onClick={handleSubmit}>{'CONFIRMAR INSCRIÇÃO'}</Button>
      </ModalContent>
    </ModalContainer>
  )
}

export default PopupForm
