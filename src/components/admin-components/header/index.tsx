import { NavLink } from 'react-router-dom'
import { Container } from './style'

export default function Header() {
  return (
    <Container>
      <nav className='menu'>
        <NavLink
          to='/admin/events'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Eventos
        </NavLink>

        <NavLink
          to='/admin/activities'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Atividades
        </NavLink>

        {/* <NavLink to="/admin/certificates" className={({ isActive }) => isActive ? 'active' : ''}>Certificados</NavLink> */}
      </nav>
    </Container>
  )
}
