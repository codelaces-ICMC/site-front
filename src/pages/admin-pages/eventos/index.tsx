import Header from '@components/admin-components/header'
import Filter from '@components/admin-components/search-bar'
import GlobalStyles from '@styles/GlobalStyles'

import { getAdminEvents } from '@api/admin/events/get'
import { deleteAdminEventById } from '@api/admin/events/{eventId}/delete'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import DynamicButton from '@components/admin-components/btn'
import CardsSet from '@components/admin-components/cards-set'
import { Container } from './style'

export default function EventosAdmin() {
  const navigate = useNavigate()

  interface Evento {
    eventId: number
    eventName: string
    endDate: string
    startDate: string
    event?: string
    workload?: string
    hasCover: boolean
    hasCoffee: boolean
  }

  const [adminEvents, adminWebEvents] = useState<Evento[]>([])
  const [search, setSearch] = useState('')
  const [eventId, setEventId] = useState(-1)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAdminEvents(search)
        adminWebEvents(data)
      } catch (error: any) {
        console.error(error)
        const message =
          error?.response?.data?.message?.[0] ??
          error?.response?.data?.error?.message ??
          error?.response?.data?.error ??
          'Não foi possível carregar os eventos.'

        toast.error(String(message))

        if (error?.response?.status === 401) {
          navigate('/admin/login')
        }
      }
    }
    fetchEvents()
  }, [search])

  const handleSelectedEvent = (eventSelected: number) => {
    setEventId(eventSelected)
  }

  const handleTextChange = (newText: string) => {
    setSearch(newText.trim())
  }

  const cards_data = adminEvents.map(evento => ({
    key: evento.eventId,
    cardNumber: evento.eventId,
    eventName: evento.eventName,
    isSelected: false,
    endTime: new Date(evento.endDate),
    startTime: new Date(evento.startDate),
    event: '',
    workload: '',
    hasCover: evento.hasCover,
    hasCoffee: evento.hasCoffee,
  }))

  const handleNewEvent = () => {
    navigate('/admin/create/event')
  }

  const handleEditEvent = () => {
    if (eventId < 0) return
    navigate(`/admin/edit/event/${eventId}`)
  }

  const handleDeleteEvent = async () => {
    if (eventId < 0) {
      toast.warning('Selecione um evento para deletar.')
      return
    }

    const confirmation = await Swal.fire({
      title: 'Deseja excluir este evento?',
      text: `ID: ${eventId}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    })

    if (!confirmation.isConfirmed) {
      return
    }

    try {
      await deleteAdminEventById(eventId)
      adminWebEvents(prev => prev.filter(event => event.eventId !== eventId))
      setEventId(-1)
      toast.success('Evento apagado com sucesso!')
    } catch (error: any) {
      console.error('Erro ao enviar a solicitação DELETE:', error)
      const message =
        error?.response?.data?.message?.[0] ??
        error?.response?.data?.error?.message ??
        error?.response?.data?.error ??
        'Não foi possível apagar o evento.'

      toast.error(String(message))

      if (error?.response?.status === 401) {
        navigate('/admin/login')
      }
    }
  }

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Filter onSearch={handleTextChange} />
      <section className='cards-area'>
        <div className='btn-area'>
          <div className='text-area'>
            <h2 className='text'>Eventos Criados:</h2>
          </div>
          <div className='buttons'>
            <DynamicButton text='Deletar' onAction={handleDeleteEvent} />
            <DynamicButton text='Editar' onAction={handleEditEvent} />
            <DynamicButton text='Novo Evento' onAction={handleNewEvent} />
          </div>
        </div>
        <div className='cards'>
          <CardsSet onSelected={handleSelectedEvent} cards={cards_data} />
        </div>
      </section>
    </Container>
  )
}
