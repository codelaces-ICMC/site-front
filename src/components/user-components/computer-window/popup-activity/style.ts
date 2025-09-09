import { styled } from 'styled-components'

export const Container = styled.div`
  p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-family: var(--font-texts);
    color: var(--cor-preto);
  }

  strong {
    font-weight: 700;
    font-family: var(--font-titles);
    color: var(--cor-roxo-escuro);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    p {
      font-size: 1.2rem;
    }
  }
`
