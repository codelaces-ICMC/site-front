import React from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import Header from 'components/user-components/header'
import Footer from 'components/user-components/footer'
import InfoEvent from 'components/user-components/info-event'

import { Container } from './style'

const EventInfo: React.FC = () => {
  const infoEventData = [
    {
      id: 1,
      eventName: 'Winx Club Experience',
      beginDate: new Date(2030, 10, 25, 18, 0),
      finalDate: new Date(2030, 10, 25, 20, 0),
      coffeeValue: 'R$ 15,00',
      link_coffee: 'https://forms.gle/exemplo',
      link_fotos: 'https://drive.google.com/exemplo',
      activities: [
        {
          activityId: 101,
          activityName: 'Palestra de Magia',
          responsible: 'Fada Bloom',
          startTime: new Date(2030, 10, 25, 18, 0),
          endTime: new Date(2030, 10, 25, 19, 0),
          registrationAt: new Date(2030, 10, 20),
        },
        {
          activityId: 102,
          activityName: 'Workshop de Design',
          responsible: 'Fada Stella',
          startTime: new Date(2030, 10, 25, 19, 0),
          endTime: new Date(2030, 10, 25, 20, 0),
          registrationAt: new Date(2030, 10, 20),
        },
      ],
    },
  ]

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
