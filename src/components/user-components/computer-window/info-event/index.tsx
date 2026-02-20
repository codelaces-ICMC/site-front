import React, { useEffect, useState } from 'react'

import { Container } from './style'

import InfoProps from '../../props/props-info-event'
import InfoBtn from '../../../../assets/icons/general/btn-info.svg'
import PopupActivity from '../popup-activity'

const InfoEvent: React.FC<{ infos: InfoProps[] }> = ({ infos }) => {
  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720)

  const [atividadesSelecionadas, setAtividadesSelecionadas] = useState<
    number[]
  >([])

  const [activityForPopup, setActivityForPopup] = useState<
    InfoProps['activities'][0] | null
  >(null)

  const handleCheckboxChange = (activityId: number) => {
    setAtividadesSelecionadas(prevSelecionadas => {
      // Se já estiver selecionado, remove da lista. Se não, adiciona.
      if (prevSelecionadas.includes(activityId)) {
        return prevSelecionadas.filter(id => id !== activityId)
      } else {
        return [...prevSelecionadas, activityId]
      }
    })
  }

  const handleInscrever = (eventId: number) => {
    console.log(
      `Inscrição no Evento ${eventId} com as atividades:`,
      atividadesSelecionadas,
    )

    // API aqui
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <Container>
      {infos.map(event => (
        <div className='main-div' key={event.id}>
          <div className='column' id='first-column'>
            <p id='first-p'>{event.eventName}</p>
            <p>
              <span>DATA: </span>
              {formatDate(event.beginDate)}
            </p>
            <p>
              <span>HORÁRIO: </span>
              {formatTime(event.beginDate)}
            </p>
            {event.coffeeValue && (
              <p>
                <span>PREÇO DO COFFEE: </span>
                {event.coffeeValue}
              </p>
            )}
            {event.link_coffee && (
              <p>
                <span>LINK COFFEE: </span>
                <a href={event.link_coffee}>Clique aqui</a>
              </p>
            )}
            {event.link_fotos && (
              <p>
                <span>FOTOS: </span>
                <a href={event.link_fotos}>Clique aqui</a>
              </p>
            )}
          </div>
          {!isMobile && <div className='line-between'></div>}
          <div className='column' id='second-column'>
            <h1>SELECIONE AS ATIVIDADES QUE DESEJA PARTICIPAR</h1>
            <ul className='activities-ul'>
              {event.activities.map((activity, index) => (
                <li key={index} className='activity-li'>
                  <input
                    type='checkbox'
                    id={`checkbox-${activity.activityId}`}
                    // Controla se a caixinha tá marcada baseado no nosso estado
                    checked={atividadesSelecionadas.includes(
                      activity.activityId,
                    )}
                    // Chama a função toda vez que clica
                    onChange={() => handleCheckboxChange(activity.activityId)}
                  />
                  {/* O label com htmlFor faz com que clicar no texto também marque a caixinha! */}
                  <label htmlFor={`checkbox-${activity.activityId}`}>
                    {activity.activityName}
                    <button
                      type='button'
                      className='info-btn'
                      onClick={() => setActivityForPopup(activity)}
                      // aria-label ajuda leitores de tela para pessoas com deficiência visual
                      aria-label={`Ver detalhes sobre ${activity.activityName}`}
                    >
                      <img src={InfoBtn} alt='' />
                    </button>
                  </label>
                </li>
              ))}
            </ul>
            {/* BOTÃO QUE ENVIA AS INFORMAÇÕES */}
            <div className='btn-container'>
              <button
                className='btn-inscreva-se'
                onClick={() => handleInscrever(event.id)}
              >
                INSCREVA-SE
              </button>
            </div>
            <h1 id='title-inscricoes'>
              INSCRIÇÕES ABERTAS ATÉ {formatDate(event.finalDate)}!
            </h1>
          </div>
        </div>
      ))}

      {activityForPopup && (
        <PopupActivity
          isOpen={!!activityForPopup}
          onClose={() => setActivityForPopup(null)}
          nomeAtividade={activityForPopup.activityName}
          descricao={activityForPopup.subject || 'Descrição não informada.'}
          convidadados={
            activityForPopup.responsible
              ? [activityForPopup.responsible]
              : undefined
          }
          tipoAtividade={activityForPopup.local || 'Atividade'}
          dataAtividade={formatDate(activityForPopup.startTime)}
          horaAtividade={formatTime(activityForPopup.startTime)}
        />
      )}
    </Container>
  )
}
export default InfoEvent
