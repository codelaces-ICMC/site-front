import React from 'react'

import { Container } from './style'

import IconEmail from '../../../../assets/img/icons/icon-email-roxo.png'
import IconInsta from '../../../../assets/img/icons/icon-insta-roxo.png'
import IconLinkedin from '../../../../assets/img/icons/icon-linkedin-roxo.png'

export default function FooterBranco() {
  const emailLink = ''
  return (
    <Container>
      <h2>WIT - ICMC/USP 2025</h2>
      <div className='social-icons'>
        <li>
          <a href={emailLink}>
            <img src={IconEmail} alt='Logo e-mail' />
          </a>
        </li>
        <li>
          <a href=''>
            <img src={IconInsta} alt='Logo Instagram' />
          </a>
        </li>
        <li>
          <a href=''>
            <img src={IconLinkedin} alt='Logo Linkedin' />
          </a>
        </li>
      </div>
    </Container>
  )
}
