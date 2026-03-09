import React from 'react'
import ModalLogin from '../../../components/admin-components/modal-login/index'
import GlobalStyles from '../../../styles/GlobalStyles'
import { Container } from './style'

const Login: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <div className='login-area'>
        <ModalLogin />
      </div>
    </Container>
  )
}

export default Login
