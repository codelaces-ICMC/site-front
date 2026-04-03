import React, { useState } from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'

import MyButton from '../../../components/admin-components/btn'

import iconFinish from '../../../assets/icons/general/btn-info.svg'

import { postAdminEvents } from 'api/admin/events/post'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Container } from './style'

interface FormValues {
  nomeEvento: string
  inicio: string
  fim: string
  inscricaoInicio: string
  inscricaoFim: string
  maxParticipantes: string
  descricao: string
  cover: string
  valor: string
  linkPagamento: string
  linkDrive: string
  lugar: string
}

const CreateEventAdmin: React.FC = () => {
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState<FormValues>({
    nomeEvento: '',
    inicio: '',
    fim: '',
    inscricaoInicio: '',
    inscricaoFim: '',
    maxParticipantes: '',
    descricao: '',
    cover: '',
    valor: '',
    linkPagamento: '',
    linkDrive: '',
    lugar: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormValues(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formValues.nomeEvento.trim()) {
      toast.warning('Nome do evento é obrigatório.')
      return false
    }

    if (!formValues.inicio || !formValues.fim) {
      toast.warning('Preencha data de início e fim.')
      return false
    }

    if (new Date(formValues.fim) <= new Date(formValues.inicio)) {
      toast.warning('A data de fim deve ser maior que a data de início.')
      return false
    }

    if (
      formValues.inscricaoInicio &&
      formValues.inscricaoFim &&
      new Date(formValues.inscricaoFim) < new Date(formValues.inscricaoInicio)
    ) {
      toast.warning(
        'O fim das inscrições deve ser maior que o início das inscrições.',
      )
      return false
    }

    if (
      formValues.maxParticipantes.trim() !== '' &&
      (!Number.isInteger(Number(formValues.maxParticipantes)) ||
        Number(formValues.maxParticipantes) <= 0)
    ) {
      toast.warning(
        'Máximo de participantes deve ser um número inteiro maior que 0.',
      )
      return false
    }

    return true
  }

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!validateForm()) return

    const numericCoffeeValue = Number.parseFloat(formValues.valor)
    const coffeeValue = Number.isNaN(numericCoffeeValue)
      ? undefined
      : numericCoffeeValue
    const parsedMaxParticipants = Number.parseInt(
      formValues.maxParticipantes,
      10,
    )
    const maxParticipants = Number.isNaN(parsedMaxParticipants)
      ? undefined
      : parsedMaxParticipants

    try {
      await postAdminEvents({
        eventName: formValues.nomeEvento.trim(),
        startDate: formValues.inicio,
        endDate: formValues.fim,
        registrationStart: formValues.inscricaoInicio || undefined,
        registrationEnd: formValues.inscricaoFim || undefined,
        maxParticipants,
        description: formValues.descricao.trim() || undefined,
        local: formValues.lugar.trim() || undefined,
        cover: formValues.cover.trim() || undefined,
        coffeeValue,
        coffeePaymentLink: formValues.linkPagamento.trim() || undefined,
        driveGalleryLink: formValues.linkDrive.trim() || undefined,
      })

      toast.success('Evento criado com sucesso!')
      setTimeout(() => {
        navigate('/admin/events')
      }, 1500)
    } catch (error: any) {
      console.error('Erro ao enviar a solicitação POST:', error)
      const err = error?.response?.data?.error

      const errorMessage = err?.message || 'Não foi possível criar o evento.'
      toast.error(errorMessage)
    }
  }

  return (
    <Container>
      <GlobalStyles />
      <div className='header'>
        <a href='/admin/events'>
          <MyButton text='Voltar' />
        </a>
      </div>
      <div className='forms-event'>
        <form onSubmit={handleSubmission}>
          <label id='label-nome' className='label-event'>
            Nome do evento:
            <input
              type='text'
              name='nomeEvento'
              value={formValues.nomeEvento}
              onChange={handleInputChange}
              placeholder='Nome do evento'
              required
            />
          </label>

          <div className='linha-data'>
            <label id='label-inicio' className='label-event'>
              Inicio:
              <input
                type='datetime-local'
                name='inicio'
                value={formValues.inicio}
                onChange={handleInputChange}
                required
              />
            </label>

            <label id='label-fim' className='label-event'>
              Fim:
              <input
                type='datetime-local'
                name='fim'
                value={formValues.fim}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <label id='label-descricao' className='label-event'>
            Descrição:
            <textarea
              rows={1}
              cols={50}
              name='descricao'
              value={formValues.descricao}
              onChange={handleInputChange}
              placeholder='Descrição do evento'
              onInput={e => {
                if (e.target instanceof HTMLElement) {
                  e.target.style.height = 'auto'
                  e.target.style.height = `${e.target.scrollHeight}px`
                }
              }}
            />
          </label>

          <h2 className='title-section'>Capa</h2>
          <label id='label-cover' className='label-event'>
            Link da imagem de capa (URL):
            <input
              type='text'
              name='cover'
              value={formValues.cover}
              onChange={handleInputChange}
              placeholder='https://…'
            />
          </label>

          <label id='label-lugar' className='label-event'>
            Local:
            <input
              type='text'
              name='lugar'
              value={formValues.lugar}
              onChange={handleInputChange}
              placeholder='Local do evento'
            />
          </label>

          <h2 className='title-section'>Inscrições</h2>
          <div className='linha-data'>
            <label id='label-inscricao-inicio' className='label-event'>
              Início das inscrições:
              <input
                type='datetime-local'
                name='inscricaoInicio'
                value={formValues.inscricaoInicio}
                onChange={handleInputChange}
              />
            </label>

            <label id='label-inscricao-fim' className='label-event'>
              Fim das inscrições:
              <input
                type='datetime-local'
                name='inscricaoFim'
                value={formValues.inscricaoFim}
                onChange={handleInputChange}
              />
            </label>

            <label id='label-max-participantes' className='label-event'>
              Máximo de participantes:
              <input
                type='number'
                min='1'
                step='1'
                name='maxParticipantes'
                value={formValues.maxParticipantes}
                onChange={handleInputChange}
                placeholder='Ex.: 120'
              />
            </label>
          </div>

          <h2 className='title-section'>Coffee</h2>
          <div className='segunda-linha'>
            <label id='label-valor' className='label-event'>
              Valor:
              <input
                type='text'
                name='valor'
                value={formValues.valor}
                onChange={handleInputChange}
                placeholder='XX.XX'
              />
            </label>

            <label id='label-link' className='label-event'>
              Link do pagamento:
              <input
                type='text'
                name='linkPagamento'
                value={formValues.linkPagamento}
                onChange={handleInputChange}
                placeholder='Link para o pagamento'
              />
            </label>
          </div>

          <h2 className='title-section'>Fotos</h2>
          <label id='label-drive' className='label-event'>
            Link do Drive:
            <input
              type='text'
              name='linkDrive'
              value={formValues.linkDrive}
              onChange={handleInputChange}
            />
          </label>

          <button type='submit' className='btn-finish'>
            <MyButton text='Finalizar' img_path={iconFinish} />
          </button>
        </form>
      </div>
    </Container>
  )
}

export default CreateEventAdmin
