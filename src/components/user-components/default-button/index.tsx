import { Button } from './style'
import ButtonProps from '../../props/props-default-button'

type Variant = 'primary' | 'secondary'

type DefaultButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
  }

export default function DefaultButton({
  text,
  variant = 'primary',
  ...rest
}: DefaultButtonProps) {
  return (
    <Button variant={variant} {...rest}>
      {text}
    </Button>
  )
}
