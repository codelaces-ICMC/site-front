import { Container } from './style'
import PopupActivityProps from 'components/user-components/props/props-popup-activity'
import Modal from '../modal'
import { useState } from 'react'
import InfoFilled from '../../../../assets/icons/general/InfoFilled.svg'

export default function PopupActivity({
  nomeAtividade,
  descricao,
  convidadados,
  tipoAtividade,
  dataAtividade,
  horaAtividade,
}: PopupActivityProps) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>
        <img src={InfoFilled} alt='Ver detalhes da atividade' />
      </button>

      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)}>
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
