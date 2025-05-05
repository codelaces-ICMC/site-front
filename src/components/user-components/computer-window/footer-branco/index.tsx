import React from 'react'

import { Container } from './style'

import IconEmail from '../../../../assets/img/icons/icon-email-roxo.png'
import IconInsta from '../../../../assets/img/icons/icon-insta-roxo.png'
import IconLinkedin from '../../../../assets/img/icons/icon-linkedin-roxo.png'

export default function FooterBranco() {
  const emailLink = 'womenintech@icmc.usp.br'
  return (
    <Container>
      <h2>WIT - ICMC/USP 2025</h2>
      <div className='social-icons'>
        <li>
          <a href={`mailto:${emailLink}`}>
            <img src={IconEmail} alt='Logo e-mail' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/wit.usp?igsh=aDR3N3JuZm5meGp3'>
            <img src={IconInsta} alt='Logo Instagram' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/company/witusp/'>
            <img src={IconLinkedin} alt='Logo Linkedin' />
          </a>
        </li>
      </div>
    </Container>
  )
}
