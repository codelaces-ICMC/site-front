import React from 'react'

import { Container } from './style'

export default function Footer() {
  const emailLink = ''
  return (
    <Container>
      <div className='footer'>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
        ></link>
        <div className='title'>
          <h2>WIT - ICMC/USP 2024</h2>
        </div>
        <div className='social-icons'>
          <li>
            <a href={emailLink}>
              <i className='bi bi-envelope-fill'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='bi bi-instagram'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='bi bi-linkedin'></i>
            </a>
          </li>
        </div>
      </div>
    </Container>
  )
}
