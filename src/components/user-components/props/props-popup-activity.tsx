interface PopupActivityProps {
  nomeAtividade: string
  descricao: string
  convidadados?: string[]
  tipoAtividade: string
  dataAtividade: string
  horaAtividade: string
  isOpen: boolean
  onClose: () => void
}

export default PopupActivityProps
