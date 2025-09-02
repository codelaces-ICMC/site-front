import { Button } from './style'

interface ButtonProps {
  buttonText: string
}

export default function DafaultButton({ buttonText }: ButtonProps) {
  return <Button>{buttonText}</Button>
}
