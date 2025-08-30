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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      await postSubscribeUser(eventId, activityId, { name: nome, email })
      onClose()
    } catch (err) {
      setError('Erro ao inscrever.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Label htmlFor='nome'>Nome Completo</Label>
        <Input
          id='nome'
          type='text'
          placeholder='Digite seu nome completo'
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <Label htmlFor='email'>E-mail</Label>
        <Input
          id='email'
          type='email'
          placeholder='Digite seu e-mail'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Enviando...' : 'CONFIRMAR INSCRIÇÃO'}
        </Button>
      </ModalContent>
    </ModalContainer>
  )
}

export default PopupForm
