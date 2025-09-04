import { Button } from './style'
import ButtonProps from '../../props/props-default-button'

export default function DafaultButton({ buttonText }: ButtonProps) {
  return <Button>{buttonText}</Button>
}
