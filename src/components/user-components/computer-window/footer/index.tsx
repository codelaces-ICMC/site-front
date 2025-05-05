import React from 'react'

import { Container } from './style'

export default function Footer() {
  const emailLink = 'womenintech@icmc.usp.br'
  return (
    <Container>
      <div className='footer'>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
        ></link>
        <div className='title'>
          <h2>WIT - ICMC/USP 2025</h2>
        </div>
        <div className='social-icons'>
          <li>
            <a href={`mailto:${emailLink}`}>
              <i className='bi bi-envelope-fill'></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/wit.usp?igsh=aDR3N3JuZm5meGp3'>
              <i className='bi bi-instagram'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/witusp/'>
              <i className='bi bi-linkedin'></i>
            </a>
          </li>
        </div>
      </div>
    </Container>
  )
}
