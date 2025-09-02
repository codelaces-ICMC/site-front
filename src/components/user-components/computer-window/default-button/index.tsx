import { Button } from './style'

interface ButtonProps {
  buttonText: string
  buttonLink: string
}

export default function DafaultButton({ buttonText, buttonLink }: ButtonProps) {
  return (
    <a href={buttonLink}>
      <Button>{buttonText}</Button>
    </a>
  )
}
