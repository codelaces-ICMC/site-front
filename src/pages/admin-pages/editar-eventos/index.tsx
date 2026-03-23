import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'

import MyButton from '../../../components/admin-components/btn'

import iconFinish from '../../../assets/icons/general/btn-info.svg'
import iconReturn from '../../../assets/icons/general/btn-return.svg'

import { getAdminEventById } from 'api/admin/events/{eventId}/get'
import { updateAdminEventById } from 'api/admin/events/{eventId}/put'
import { useNavigate, useParams } from 'react-router-dom'
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
  banner: File | null
  valor: number
  linkPagamento: string
  linkDrive: string
  lugar: string
}

const EventosAdmin: React.FC = () => {
  const navigate = useNavigate()
  const { eventId } = useParams()

  const toDateTimeLocal = (value?: string | null) => {
    if (!value) return ''
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return ''

    const year = date.getFullYear()
    const month = `${date.getMonth() + 1}`.padStart(2, '0')
    const day = `${date.getDate()}`.padStart(2, '0')
    const hours = `${date.getHours()}`.padStart(2, '0')
    const minutes = `${date.getMinutes()}`.padStart(2, '0')

    return `${year}-${month}-${day}T${hours}:${minutes}`
  }

  const [formValues, setFormValues] = useState<FormValues>({
    nomeEvento: '',
    inicio: '',
    fim: '',
    inscricaoInicio: '',
    inscricaoFim: '',
    maxParticipantes: '',
    descricao: '',
    banner: null,
    valor: 0,
    linkPagamento: '',
    linkDrive: '',
    lugar: '',
  })

  useEffect(() => {
    const fetchEventDetails = async (eventId: number) => {
      try {
        const eventData = await getAdminEventById(eventId)
        setFormValues({
          nomeEvento: eventData.eventName,
          inicio: toDateTimeLocal(eventData.startDate),
          fim: toDateTimeLocal(eventData.endDate),
          inscricaoInicio: toDateTimeLocal(eventData.registrationStart),
          inscricaoFim: toDateTimeLocal(eventData.registrationEnd),
          maxParticipantes:
            eventData.maxParticipants != null
              ? String(eventData.maxParticipants)
              : '',
          descricao: eventData.description,
          banner: eventData.hasCover,
          valor: eventData.coffeeValue,
          linkPagamento: '',
          linkDrive: eventData.driveGalleryLink,
          lugar: eventData.local,
        })
      } catch (error) {
        console.error('Erro ao buscar detalhes do evento:', error)
      }
    }
    if (eventId) {
      fetchEventDetails(parseInt(eventId))
    }
  }, [eventId])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, files } = e.target
  //   if (files && files.length > 0) {
  //     setFormValues({ ...formValues, [name]: files[0] })
  //   }
  // }

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault() // Evita o comportamento padrão de envio de formulário

    if (
      formValues.inscricaoInicio &&
      formValues.inscricaoFim &&
      new Date(formValues.inscricaoFim) < new Date(formValues.inscricaoInicio)
    ) {
      toast.warning(
        'O fim das inscrições deve ser maior que o início das inscrições.',
      )
      return
    }

    if (
      formValues.maxParticipantes.trim() !== '' &&
      (!Number.isInteger(Number(formValues.maxParticipantes)) ||
        Number(formValues.maxParticipantes) <= 0)
    ) {
      toast.warning(
        'Máximo de participantes deve ser um número inteiro maior que 0.',
      )
      return
    }

    const parsedMaxParticipants = Number.parseInt(
      formValues.maxParticipantes,
      10,
    )
    const maxParticipants = Number.isNaN(parsedMaxParticipants)
      ? undefined
      : parsedMaxParticipants

    try {
      if (eventId) {
        await updateAdminEventById({
          local: formValues.lugar,
          eventId: parseInt(eventId),
          eventName: formValues.nomeEvento,
          startDate: formValues.inicio,
          endDate: formValues.fim,
          registrationStart: formValues.inscricaoInicio || undefined,
          registrationEnd: formValues.inscricaoFim || undefined,
          maxParticipants,
          description: formValues.descricao,
          coffeeValue: formValues.valor,
          driveGalleryLink: formValues.linkDrive,
        })
        toast.success('Evento atualizado com sucesso!')
      }

      setTimeout(() => {
        navigate(`/admin/events`)
      }, 1500)
    } catch (error: any) {
      console.error('Erro ao enviar a solicitação PUT:', error)
      const err = error?.response?.data?.error

      if (err) {
        toast.error(err.message || 'Não foi possível atualizar o evento.')
      }
    }
  }

  return (
    <Container>
      <GlobalStyles />
      <div className='header'>
        <a href='/admin/events'>
          <MyButton text='Eventos' img_path={iconReturn} />
        </a>
        <div className='logo'>
          <a href='/'>
            <h1>
              W<span>i</span>T
            </h1>
          </a>
        </div>
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
              />
            </label>
            <label id='label-fim' className='label-event'>
              Fim:
              <input
                type='datetime-local'
                name='fim'
                value={formValues.fim}
                onChange={handleInputChange}
              />
            </label>
          </div>

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
          <label id='label-descricao' className='label-event'>
            Descrição:
            <textarea
              rows={1}
              cols={50}
              name='descricao'
              value={formValues.descricao}
              onChange={handleInputChange}
              onInput={e => {
                if (e.target instanceof HTMLElement) {
                  e.target.style.height = 'auto' // Redefine a altura para automática
                  e.target.style.height = `${e.target.scrollHeight}px` // Ajusta a altura conforme o conteúdo
                } // Ajusta a altura conforme o conteúdo
              }}
            />
          </label>
          <label id='label-lugar' className='label-event'>
            Local:
            <input
              type='text'
              name='lugar'
              value={formValues.lugar}
              onChange={handleInputChange}
            />
          </label>
          {/* <label id="label-banner" className="label-event">
            Banner:
            <input
              id="input-banner"
              type="file"
              accept="image/*"
              name="banner"
              onChange={handleFileChange}
            />
          </label> */}
          <h2 className='title-section'>Coffee</h2>
          <div className='segunda-linha'>
            <label id='label-valor' className='label-event'>
              Valor:
              <input
                type='text'
                name='valor'
                onChange={handleInputChange}
                placeholder='R$ XX,XX'
              />
            </label>
            <label id='label-link' className='label-event'>
              Link do pagamento:
              <input
                type='text'
                name='linkPagamento'
                onChange={handleInputChange}
              />
            </label>
          </div>
          <h2 className='title-section'>Fotos</h2>
          <label id='label-drive' className='label-event'>
            Link do Drive:
            <input type='text' name='linkDrive' onChange={handleInputChange} />
          </label>
          <button type='submit' className='btn-finish'>
            <MyButton text='Finalizar' img_path={iconFinish} />
          </button>
        </form>
      </div>
    </Container>
  )
}

export default EventosAdmin
