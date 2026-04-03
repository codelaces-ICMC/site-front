import { Container } from './style'
import ModalProps from '../../props/props-modal'
import closeButton from '@assets/icons/general/close.svg'

export default function Modal({ isOpen, setModalOpen, children }: ModalProps) {
  if (isOpen) {
    return (
      <Container>
        <div className='background'>
          <div className='modal-style'>
            <div>{children}</div>
            <button onClick={setModalOpen}>
              <img src={closeButton} alt='Fechar' />
            </button>
          </div>
        </div>
      </Container>
    )
  }

  return null
}
