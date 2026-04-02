import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  height: 111px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background: var(--cor-roxo-escuro);

  .menu {
    display: flex;
    gap: 3vw;
    justify-content: flex-end;

    a {
      color: var(--cor-branco);
      font-size: 1.5em;
      font-weight: 700;
      text-transform: uppercase;
    }

    a:hover {
      color: var(--cor-roxo-claro);
    }
  }
`
