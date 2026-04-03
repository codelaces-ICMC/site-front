import React, { useEffect, useState } from 'react'
import GlobalStyles from '@styles/GlobalStyles'

import MyButton from '@components/admin-components/btn'
import Dropdown from '@components/admin-components/dropdown'

import { getAdminActivitiesDropdown } from '@api/admin/activities/dropdown-events/get'
import { getAdminActivityTypesDropdown } from '@api/admin/activities/dropdown-types/get'
import { postAdminActivities } from '@api/admin/activities/post'
import { useNavigate } from 'react-router-dom'
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
      await postAdminActivities({
        activityName: formValues.nomeEvento,
        startTime: formValues.inicio,
        endTime: formValues.fim,
        description: formValues.descricao,
        responsible: formValues.responsavel,
        eventId: formValues.evento,
        registrationAt: formValues.data_final,
        activityType: formValues.tipoAtividade,
      })

      toast.success('Atividade criada com sucesso!')
      navigate(`/admin/activities`)
    } catch (error: any) {
      console.error('Erro ao enviar a solicitação POST:', error)
      const message = 'Não foi possível criar a atividade.'

      toast.error(String(message))

      if (error?.response?.status === 401) {
        navigate('/admin/login')
      }
    }
  }

  useEffect(() => {
    const fetchActivitiesDropdown = async () => {
      try {
        const data = await getAdminActivitiesDropdown()
        setOptions(data)
      } catch (error: any) {
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
      } catch (error: any) {
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
            <MyButton text='Finalizar' />
          </button>
        </form>
      </div>
    </Container>
  )
}

export default ActivityAdmin
