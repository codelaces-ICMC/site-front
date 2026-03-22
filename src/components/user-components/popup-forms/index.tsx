import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {
  Button,
  CloseButton,
  Input,
  Label,
  ModalContainer,
  ModalContent,
} from './style'
import { postSubscribeUser } from 'api/web/events/{eventId}/activities/{acitivity}/subscribe/post'

interface PopupFormProps {
  onClose: () => void
  eventId: number
  activityIds: number[]
}

interface SubscriptionResult {
  activityId: number
  success: boolean
  isNewSubscription?: boolean
  message: string
}

const PopupForm: React.FC<PopupFormProps> = ({
  onClose,
  eventId,
  activityIds,
}) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    if (!nome.trim()) {
      toast.warning('Por favor, preencha seu nome completo.')
      return false
    }

    if (!email.trim()) {
      toast.warning('Por favor, preencha seu e-mail.')
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.warning('Por favor, insira um e-mail válido.')
      return false
    }

    return true
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    const results: SubscriptionResult[] = []
    let successCount = 0
    let duplicateCount = 0
    let errorCount = 0

    try {
      for (const activityId of activityIds) {
        try {
          const response = await postSubscribeUser(eventId, activityId, {
            name: nome,
            email,
          })

          if (response.success) {
            results.push({
              activityId,
              success: true,
              isNewSubscription: response.isNewSubscription,
              message: response.message,
            })

            if (response.isNewSubscription) {
              successCount++
            } else {
              duplicateCount++
            }
          }
        } catch (err: any) {
          errorCount++
          results.push({
            activityId,
            success: false,
            message: err?.response?.data?.message || 'Erro ao se inscrever',
          })
        }
      }

      // Gerar toasts com base nos resultados
      if (successCount > 0) {
        toast.success(
          `Você se inscreveu com sucesso em ${successCount} atividade${successCount > 1 ? 's' : ''}!`,
        )
      }

      if (duplicateCount > 0) {
        toast.info(
          `Você já estava inscrito em ${duplicateCount} atividade${duplicateCount > 1 ? 's' : ''}.`,
        )
      }

      if (errorCount > 0) {
        const failedActivities = results
          .filter(r => !r.success)
          .map(r => `Atividade ${r.activityId}`)
          .join(', ')

        toast.error(
          `Não foi possível se inscrever em: ${failedActivities}. Tente novamente.`,
        )
      }

      // Se todas as inscrições foram bem-sucedidas (novas ou duplicadas), fechar o modal
      if (errorCount === 0) {
        setTimeout(() => {
          onClose()
        }, 2000)
      }
    } catch (err) {
      toast.error('Erro ao processar as inscrições. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose} disabled={isLoading}>
          ×
        </CloseButton>
        <div className='campo-forms-inscricao'>
          <Label htmlFor='nome'>Nome Completo</Label>
          <Input
            id='nome'
            type='text'
            placeholder='Digite seu nome completo'
            value={nome}
            onChange={e => setNome(e.target.value)}
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Processando...' : 'CONFIRMAR INSCRIÇÃO'}
        </Button>
      </ModalContent>
    </ModalContainer>
  )
}

export default PopupForm
