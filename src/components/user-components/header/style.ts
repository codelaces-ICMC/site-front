import { styled } from 'styled-components'
import menuIcon from '../../../assets/icons/general/btn-menu-hamburguer.svg'
import { ReactComponent as LogoSVG } from '../../../assets/icons/logos/logo.svg'

export const Container = styled.header<{
  $backgroundColor: string
  $textColor: string
}>`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $textColor }) => $textColor};
  /* Posição relativa para que o menu mobile possa ser posicionado em relação ao header */
  position: relative;
  z-index: 10;
`

export const Menu = styled.nav<{ $isOpen: boolean; $backgroundColor: string }>`
  /* --- Estilos de Desktop (sem alterações) --- */
  display: flex;
  align-items: center;
  list-style: none;

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: var(--cor-roxo-claro);
    cursor: pointer;
  }
  li {
    font-weight: 500;
    font-size: 1.5rem;
    font-family: var(--font-titles);
    display: inline-block;
    margin: 0 5px;
  }

  /* --- Adaptações para Mobile --- */
  @media (max-width: 768px) {
    /* esconde os | */
    li:nth-child(even) {
      display: none;
    }
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: var(--cor-amarelo-claro);

    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};

    ul {
      /* Ajuste para o conteúdo começar do topo do menu dropdown */
      width: 100%;
      margin: 0;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    li {
      margin: 10px 0;
      color: var(--cor-roxo-escuro);
      font-size: 1.2rem;
    }
  }
`

export const Hamburger = styled.button<{ $isOpen: boolean }>`
  display: none; // Escondido no desktop
  position: absolute;
  top: 35px;
  right: 5vw;

  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  z-index: 20; // Garante que fique acima do menu
  cursor: pointer;

  background-image: url(${menuIcon});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: block;
  }
`

export const StyledLogo = styled(LogoSVG)<{ $logoColor: string }>`
  width: 80px;
  color: ${({ $logoColor }) => $logoColor};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 50px;
  }
`
