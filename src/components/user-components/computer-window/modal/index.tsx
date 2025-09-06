import { Container } from './style'
import ModalProps from '../../props/props-modal'

export default function Modal({ isOpen }: ModalProps) {
  //const [isPopupOpen, setPopupOpen] = useState<boolean>(false)

  if (isOpen) {
    return (
      <Container>
        <div>
          <h1>Hello world!</h1>
        </div>
      </Container>
    )
  }

  return null
}
