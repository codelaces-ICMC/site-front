import React, { useEffect, useState } from 'react'
import GlobalStyles from '@styles/GlobalStyles'

import MyButton from '@components/admin-components/btn'
import Dropdown from '@components/admin-components/dropdown'

import iconFinish from '@assets/icons/general/btn-info.svg'

import { getApiErrorMessage, isApiUnauthorized } from '@api/_shared/httpError'
import { getAdminActivitiesDropdown } from '@api/admin/activities/dropdown-events/get'
import { getAdminActivityTypesDropdown } from '@api/admin/activities/dropdown-types/get'
import { getAdminActivityById } from '@api/admin/activities/{acitvityId}/get'
import { updateAdminActivityById } from '@api/admin/activities/{acitvityId}/put'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Container } from './style'

interface DropdownProps {
  eventId: number
  eventName: string
}

interface FormValues {
  nomeEvento: string
  inicio: string
  fim: string
  descricao: string
  responsavel: string
  evento: number
  data_final: string
  tipoAtividade: string
}

interface ActivityTypeOption {
  activityTypeId: number
  activityTypeName: string
}

const ActivityAdmin: React.FC = () => {
  const navigate = useNavigate()
  const { activityId } = useParams()

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

  const [options, setOptions] = useState<DropdownProps[]>([])
  const [activityTypeOptions, setActivityTypeOptions] = useState<
    ActivityTypeOption[]
  >([])
  const [formValues, setFormValues] = useState<FormValues>({
    nomeEvento: '',
    inicio: '',
    fim: '',
    descricao: '',
    responsavel: '',
    evento: -1,
    data_final: '',
    tipoAtividade: '',
  })

  useEffect(() => {
    const fetchActivityDetails = async (activityId: number) => {
      try {
        const activityData = await getAdminActivityById(activityId)

        console.log('[activityData] ', activityData)
        setFormValues({
          nomeEvento: activityData.activityName,
          inicio: toDateTimeLocal(activityData.startTime),
          fim: toDateTimeLocal(activityData.endTime),
          descricao: activityData.description,
          responsavel: activityData.responsible,
          evento: activityData.eventId,
          data_final: toDateTimeLocal(activityData.registrationAt),
          tipoAtividade: activityData.activityType ?? 'other',
        })
      } catch (error) {
        console.error('Erro ao buscar detalhes da atividade:', error)
      }
    }
    if (activityId) {
      fetchActivityDetails(parseInt(activityId))
    }
  }, [activityId])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSelect = (selectedEventId: number) => {
    setFormValues({ ...formValues, evento: selectedEventId })
  }

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault()

    if (formValues.nomeEvento.length > 60) {
      toast.warning('O nome da atividade deve ter no máximo 60 caracteres.')
      return
    }

    if (formValues.evento === -1 || !formValues.evento) {
      toast.warning('Você precisa vincular essa atividade a um evento!')
      return
    }

    if (!formValues.tipoAtividade) {
      toast.warning('Selecione um tipo de atividade.')
      return
    }

    try {
      if (activityId) {
        await updateAdminActivityById({
          activityId: parseInt(activityId),
          activityName: formValues.nomeEvento,
          responsible: formValues.responsavel,
          description: formValues.descricao,
          startTime: formValues.inicio,
          endTime: formValues.fim,
          registrationAt: formValues.data_final,
          eventId: formValues.evento,
          activityType: formValues.tipoAtividade,
        })
      }

      toast.success('Atividade atualizada com sucesso!')
      navigate(`/admin/activities`)
    } catch (error: unknown) {
      console.error('Erro ao enviar a solicitação PUT:', error)
      toast.error(
        getApiErrorMessage(error, 'Não foi possível atualizar a atividade.'),
      )

      if (isApiUnauthorized(error)) {
        navigate('/admin/login')
      }
    }
  }

  useEffect(() => {
    const fetchActivitiesDropdown = async () => {
      try {
        const data = await getAdminActivitiesDropdown()
        setOptions(data)
      } catch (error: unknown) {
        console.error(error)
      }
    }
    fetchActivitiesDropdown()
  }, [])

  useEffect(() => {
    const fetchActivityTypesDropdown = async () => {
      try {
        const data = await getAdminActivityTypesDropdown()
        setActivityTypeOptions(data)

        if (data.length > 0) {
          setFormValues(current => ({
            ...current,
            tipoAtividade: current.tipoAtividade || data[0].activityTypeName,
          }))
        }
      } catch (error: unknown) {
        console.error(error)
      }
    }

    fetchActivityTypesDropdown()
  }, [])

  return (
    <Container>
      <GlobalStyles />
      <div className='header'>
        <a href='/admin/activities'>
          <MyButton text='Voltar' />
        </a>
      </div>
      <div className='forms-event'>
        <form onSubmit={handleSubmission}>
          <label id='label-nome' className='label-event'>
            Nome da atividade:
            <input
              type='text'
              name='nomeEvento'
              value={formValues.nomeEvento}
              onChange={handleInputChange}
              maxLength={60}
            />
          </label>
          <div className='primeira-linha'>
            <label id='label-inicio' className='label-event'>
              Data de inicio:
              <input
                type='datetime-local'
                name='inicio'
                value={formValues.inicio}
                onChange={handleInputChange}
              />
            </label>
            <label id='label-fim' className='label-event'>
              Data de fim:
              <input
                type='datetime-local'
                name='fim'
                value={formValues.fim}
                onChange={handleInputChange}
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
                  e.target.style.height = 'auto'
                  e.target.style.height = `${e.target.scrollHeight}px`
                }
              }}
            />
          </label>
          <div className='segunda-linha'>
            <label id='label-responsavel' className='label-event'>
              Responsável:
              <input
                type='text'
                name='responsavel'
                value={formValues.responsavel}
                onChange={handleInputChange}
                placeholder='Nome Sobrenome'
              />
            </label>
            <label id='label-data-final' className='label-event'>
              Inscrições até:
              <input
                type='datetime-local'
                name='data_final'
                value={formValues.data_final}
                onChange={handleInputChange}
              />
            </label>
            <label id='label-evento' className='label-event'>
              Evento:
              <Dropdown options={options} onSelect={handleSelect} />
            </label>
            <label id='label-tipo-atividade' className='label-event'>
              Tipo da atividade:
              <select
                name='tipoAtividade'
                value={formValues.tipoAtividade}
                onChange={e =>
                  setFormValues({
                    ...formValues,
                    tipoAtividade: e.target.value,
                  })
                }
              >
                {activityTypeOptions.map(option => (
                  <option
                    key={option.activityTypeId}
                    value={option.activityTypeName}
                  >
                    {option.activityTypeName}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button type='submit' className='btn-finish'>
            <MyButton text='Finalizar' img_path={iconFinish} />
          </button>
        </form>
      </div>
    </Container>
  )
}

export default ActivityAdmin
