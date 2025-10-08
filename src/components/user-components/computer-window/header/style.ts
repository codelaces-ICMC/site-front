import { styled } from 'styled-components'
import { ReactComponent as LogoSVG } from '../../../../assets/icons/logos/logo.svg'

export const Container = styled.header<{
  backgroundColor: string
  textColor: string
}>`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};

  .menu {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
  }

  a:hover,
  #selective-header-btn:hover {
    color: var(--cor-roxo-claro);
    cursor: pointer;
  }

  li {
    font-weight: 500;
    font-size: 25px;
    font-family: var(--font-titles);
    display: inline-block;
    margin: 0 5px;
  }
`

export const StyledLogo = styled(LogoSVG)<{ logoColor: string }>`
  width: 80px;
  color: ${({ logoColor }) => logoColor};

  &:hover {
    cursor: pointer;
  }
`
