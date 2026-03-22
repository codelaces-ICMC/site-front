import { getWebActivities } from 'api/web/events/{eventId}/activities/get'
import { getWebEvent } from 'api/web/events/{eventId}/get'
import Footer from 'components/user-components/footer'
import InfoEvent from 'components/user-components/info-event'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/user-components/header'
import GlobalStyles from '../../../styles/GlobalStyles'

import { Container } from './style'

const EventInfo: React.FC = () => {
  const { eventId } = useParams()
  const [infoEventData, setInfoEventData] = useState<any[]>([])

  useEffect(() => {
    const fetchEventInfo = async () => {
      if (!eventId) return

      const numericEventId = Number(eventId)
      const [event, activitiesPayload] = await Promise.all([
        getWebEvent(numericEventId),
        getWebActivities(numericEventId),
      ])

      const activities = Array.isArray(activitiesPayload)
        ? activitiesPayload
        : (activitiesPayload?.activities ?? [])

      setInfoEventData([
        {
          id: event?.id,
          eventName: event?.name ?? event?.eventName ?? '',
          description: event?.description ?? '',
          startDate: new Date(event?.start_date ?? event?.startDate),
          endDate: new Date(event?.end_date ?? event?.endDate),
          registrationStart: event?.registration_start
            ? new Date(event.registration_start)
            : event?.registrationStart
              ? new Date(event.registrationStart)
              : undefined,
          registrationEnd: event?.registration_end
            ? new Date(event.registration_end)
            : event?.registrationEnd
              ? new Date(event.registrationEnd)
              : undefined,
          coffeeValue: event?.coffeeValue
            ? String(event.coffeeValue)
            : undefined,
          link_coffee: event?.coffeePaymentLink,
          link_fotos: event?.driveGalleryLink,
          activities: activities.map((activity: any) => ({
            activityId: activity?.id,
            activityName: activity?.name ?? activity?.activityName ?? '',
            activityType:
              activity?.activity_type ?? activity?.activityType ?? 'other',
            responsible: activity?.speaker ?? activity?.responsible ?? '',
            subject: activity?.description,
            local: activity?.location,
            startTime: new Date(activity?.start_time ?? activity?.startTime),
            endTime: new Date(activity?.end_time ?? activity?.endTime),
            registrationAt: new Date(
              activity?.registration_at ??
                activity?.registrationAt ??
                event?.registration_end ??
                event?.registrationEnd ??
                event?.end_date,
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
