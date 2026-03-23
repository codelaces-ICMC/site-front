import Header from '../../../components/admin-components/header'
import Filter from '../../../components/admin-components/search-bar'
import GlobalStyles from '../../../styles/GlobalStyles'

import iconAdd from '../../../assets/icons/general/action-add.svg'
import iconDelete from '../../../assets/icons/general/action-delete.svg'
import iconEdit from '../../../assets/icons/general/action-edit.svg'

import { getAdminActivities } from 'api/admin/activities/get'
import { deleteAdminActivityById } from 'api/admin/activities/{acitvityId}/delete'
import CardsSet from 'components/admin-components/cards-set'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import DynamicButton from '../../../components/admin-components/btn'
import { Container } from './style'

export default function AtividadesAdmin() {
  const navigate = useNavigate()

  interface Activity {
    activityId: number
    eventName: string
    startDate: string
    endDate: string
    activityName: string
  }

  const [adminActivities, setAdminActivities] = useState<Activity[]>([])
  const [search, setSearch] = useState('')
  const [activityId, setActivityId] = useState(-1)

  const handleSelectedActivity = (activitySelected: number) => {
    setActivityId(activitySelected)
  }

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getAdminActivities(search)
        console.log('activities: ', data)
        setAdminActivities(data)
      } catch (error: any) {
        console.error(error)

        const message =
          error?.response?.data?.message?.[0] ??
          error?.response?.data?.error?.message ??
          error?.response?.data?.error ??
          'Não foi possível carregar as atividades.'

        toast.error(String(message))

        if (error?.response?.status === 401) {
          navigate('/admin/login')
        }
      }
    }
    fetchActivities()
  }, [search])

  const handleTextChange = (newText: string) => {
    setSearch(newText.trim())
  }

  const cards_data = adminActivities.map(activity => ({
    key: activity.activityId,
    cardNumber: activity.activityId,
    eventName: activity.activityName,
    isSelected: false,
    endTime: new Date(activity.endDate),
    startTime: new Date(activity.startDate),
    event: activity.eventName,
    workload: '',
    hasCover: false,
    hasCoffee: false,
  }))

  const handleNewActivity = () => {
    navigate('/admin/create/activity')
  }

  const handleEditActivity = () => {
    if (activityId < 0) return
    navigate(`/admin/edit/activity/${activityId}`)
  }

  const handleDeleteActivity = async () => {
    if (activityId < 0) {
      toast.warning('Selecione uma atividade para deletar.')
      return
    }

    const confirmation = await Swal.fire({
      title: 'Deseja excluir esta atividade?',
      text: `ID: ${activityId}`,
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
      await deleteAdminActivityById(activityId)
      setAdminActivities(prev =>
        prev.filter(activity => activity.activityId !== activityId),
      )
      setActivityId(-1)
      toast.success('Atividade apagada com sucesso!')
    } catch (error: any) {
      console.error('Erro ao enviar a solicitação DELETE:', error)
      const message =
        error?.response?.data?.message?.[0] ??
        error?.response?.data?.error?.message ??
        error?.response?.data?.error ??
        'Não foi possível apagar a atividade.'

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
            <h2 className='text'>Atividades Criadas:</h2>
          </div>
          <div className='buttons'>
            <DynamicButton
              text='Deletar'
              img_path={iconDelete}
              onAction={handleDeleteActivity}
            />
            <DynamicButton
              text='Editar'
              img_path={iconEdit}
              onAction={handleEditActivity}
            />
            <DynamicButton
              text='Nova Atividade'
              img_path={iconAdd}
              onAction={handleNewActivity}
            />
          </div>
        </div>
        <div className='cards'>
          <CardsSet onSelected={handleSelectedActivity} cards={cards_data} />
        </div>
      </section>
    </Container>
  )
}
