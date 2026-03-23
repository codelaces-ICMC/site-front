import {
  Container,
  StyledEmailIcon,
  StyledInstaIcon,
  StyledLinkedinIcon,
} from './style'

interface FooterProps {
  backgroundColor: string
  textColor: string
}

export default function Footer({ backgroundColor, textColor }: FooterProps) {
  const emailLink = 'codelaces@icmc.usp.br'
  return (
    <Container $backgroundColor={backgroundColor} $textColor={textColor}>
      <div className='footer'>
        <div className='title'>
          <h2>CODELACES - ICMC/USP 2025</h2>
        </div>
        <div className='social-icons'>
          <li>
            <a href={`mailto:${emailLink}`}>
              <StyledEmailIcon $logoColor={textColor} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/code.laces?igsh=aDR3N3JuZm5meGp3'>
              <StyledInstaIcon $logoColor={textColor} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/codelaces'>
              <StyledLinkedinIcon $logoColor={textColor} />
            </a>
          </li>
        </div>
      </div>
    </Container>
  )
}
