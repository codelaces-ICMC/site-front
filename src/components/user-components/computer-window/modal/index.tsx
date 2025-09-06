import { Container } from './style'
import ModalProps from '../../props/props-modal'

export default function Modal({ isOpen, setModalOpen, children }: ModalProps) {
  if (isOpen) {
    return (
      <Container>
        <div className='background'>
          <div className='modal-style'>
            {children}
            <button onClick={setModalOpen}>
              <img src='' alt='Fechar' />
            </button>
          </div>
        </div>
      </Container>
    )
  }

  return null
}
