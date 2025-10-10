import emailIcon from '../../../../assets/icons/general/email.svg'
import instaIcon from '../../../../assets/icons/general/insta.svg'
import linkedinIcon from '../../../../assets/icons/general/linkedin.svg'

import { Container, StyledIcons } from './style'

interface FooterProps {
  backgroundColor: string
  textColor: string
}

export default function Footer({ backgroundColor, textColor }: FooterProps) {
  const emailLink = 'codelaces@icmc.usp.br'
  return (
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      <div className='footer'>
        <div className='title'>
          <h2>CODELACES - ICMC/USP 2025</h2>
        </div>
        <div className='social-icons'>
          <li>
            <a href={`mailto:${emailLink}`}>
              <StyledIcons logoColor={textColor} src={emailIcon} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/code.laces?igsh=aDR3N3JuZm5meGp3'>
              <StyledIcons logoColor={textColor} src={instaIcon} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/codelaces'>
              <StyledIcons logoColor={textColor} src={linkedinIcon} />
            </a>
          </li>
        </div>
      </div>
    </Container>
  )
}
