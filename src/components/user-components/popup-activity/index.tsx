import { Container } from './style'
import PopupActivityProps from 'components/props/props-popup-activity'
import Modal from '../modal'

export default function PopupActivity({
  nomeAtividade,
  descricao,
  convidadados,
  tipoAtividade,
  dataAtividade,
  horaAtividade,
  isOpen,
  onClose,
}: PopupActivityProps) {
  return (
    <div>
      <Modal isOpen={isOpen} setModalOpen={onClose}>
        <Container>
          <p>
            <strong>ATIVIDADE:</strong> {nomeAtividade}
          </p>
          <p>
            <strong>DESCRIÇÃO:</strong> {descricao}
          </p>
          <p>
            <strong>TIPO:</strong> {tipoAtividade}
          </p>
          {convidadados && convidadados.length > 0 && (
            <p>
              <strong>CONVIDADA(S):</strong> {convidadados.join(', ')}
            </p>
          )}
          <p>
            <strong>DATA:</strong> {dataAtividade}
          </p>
          <p>
            <strong>HORÁRIO:</strong> {horaAtividade}
          </p>
        </Container>
      </Modal>
    </div>
  )
}
