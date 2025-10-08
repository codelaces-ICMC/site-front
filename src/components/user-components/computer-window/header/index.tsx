// import { useNavigate } from 'react-router-dom'
import { Container, StyledLogo } from './style'

interface HeaderProps {
  backgroundColor: string
  textColor: string
}

export default function Header({ backgroundColor, textColor }: HeaderProps) {
  // const navigate = useNavigate()

  // Por enquanto está comentadao, mas vou reabilitar para dar um foco no evento mais prox
  // const handleScroll = () => {
  //   navigate('/')
  //   setTimeout(() => {
  //     const targetSection = document.getElementById('targetSection')
  //     if (targetSection) {
  //       targetSection.scrollIntoView({ behavior: 'smooth' })
  //     }
  //   }, 0) // Timeout para garantir que a navegação ocorreu antes da rolagem
  // }

  return (
    // passar a cor como parâmetro e também o evento mais próximo para usar esse handleScroll (pode ser mais de um evento)
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      <a href='/'>
        <StyledLogo logoColor={backgroundColor} />
      </a>
      <div className='menu'>
        <li>
          <a href='/about'>SOBRE NÓS</a>
        </li>
        <li>|</li>
        <li>
          <a href='/events'>EVENTOS</a>
        </li>
      </div>
    </Container>
  )
}
