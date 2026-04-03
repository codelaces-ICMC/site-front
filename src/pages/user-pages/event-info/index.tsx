import { getWebActivities } from '@api/web/events/{eventId}/activities/get'
import { getWebEvent } from '@api/web/events/{eventId}/get'
import Footer from '@components/user-components/footer'
import InfoEvent from '@components/user-components/info-event'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '@components/user-components/header'
import GlobalStyles from '@styles/GlobalStyles'

import InfoProps from '@components/props/props-info-event'
import { Container } from './style'

const EventInfo: React.FC = () => {
  const { eventId } = useParams()
  const [infoEventData, setInfoEventData] = useState<InfoProps[]>([])

  useEffect(() => {
    const fetchEventInfo = async () => {
      if (!eventId) return

      const numericEventId = Number(eventId)
      const [event, activitiesPayload] = await Promise.all([
        getWebEvent(numericEventId),
        getWebActivities(numericEventId),
      ])

      const rawActivities = Array.isArray(activitiesPayload)
        ? activitiesPayload
        : (activitiesPayload as Record<string, unknown> | null)?.activities
      const activities: Record<string, unknown>[] = Array.isArray(rawActivities)
        ? (rawActivities as Record<string, unknown>[])
        : []

      setInfoEventData([
        {
          id: event.id,
          eventName: event.name,
          description: event.description ?? '',
          startDate: new Date(event.startDate),
          endDate: new Date(event.endDate),
          registrationStart: event.registrationStart
            ? new Date(event.registrationStart)
            : undefined,
          registrationEnd: event.registrationEnd
            ? new Date(event.registrationEnd)
            : undefined,
          coffeeValue: undefined,
          link_coffee: undefined,
          link_fotos: undefined,
          activities: activities.map(activity => ({
            activityId: Number(activity.id ?? activity.activityId),
            activityName: String(activity.name ?? activity.activityName ?? ''),
            activityType: String(
              activity.activity_type ?? activity.activityType ?? 'other',
            ),
            responsible: String(activity.speaker ?? activity.responsible ?? ''),
            subject:
              activity.description != null
                ? String(activity.description)
                : undefined,
            local:
              activity.location != null ? String(activity.location) : undefined,
            startTime: new Date(
              String(activity.start_time ?? activity.startTime ?? ''),
            ),
            endTime: new Date(
              String(activity.end_time ?? activity.endTime ?? ''),
            ),
            registrationAt: new Date(
              String(
                activity.registration_at ??
                  activity.registrationAt ??
                  event.registrationEnd ??
                  event.endDate,
              ),
            ),
          })),
        },
      ])
    }

    fetchEventInfo()
  }, [eventId])

  return (
    <Container>
      <GlobalStyles />
      <Header
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
      <div className='main-div'>
        <InfoEvent infos={infoEventData} />
      </div>

      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default EventInfo
