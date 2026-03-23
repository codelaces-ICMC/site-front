import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;

  img {
    height: 1.5em;
    margin: 0 0.2em;
  }

  .dynamic-button {
    display: flex;
    font-size: 1.5em;
    padding: 0.1em 0.5em;
    border-radius: 20px;
    height: auto;
    width: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin: 0.5em 1em 0.5em 0;
    background: var(--cor-roxo-escuro);
    color: var(--cor-branco);
    align-items: center;
    font-weight: 800;
    border: 2px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
    letter-spacing: 0.01em;
  }

  .dynamic-button:hover {
    transform: scale(1.03);
    filter: brightness(1.08);
  }
`
