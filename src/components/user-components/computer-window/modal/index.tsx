import { Container } from './style'
// import InfoFilled from '../../../../assets/icons/general/InfoFilled.svg'
import DefaultButton from '../default-button'
//import { useState } from 'react'

export default function Modal() {
  //const [isPopupOpen, setPopupOpen] = useState<boolean>(false)

  return (
    <Container>
      <DefaultButton
        buttonText='ABRIR MODAL'
        variant='secondary'
      ></DefaultButton>
    </Container>
  )
}
