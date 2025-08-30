import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--cor-roxo-escuro);
  margin-top: 5.6rem;
  gap: 4.8rem;

  h1 {
    font-family: var(--font-titles-alt);
    font-size: 2.5rem;
    color: var(--cor-branco);
    text-align: center;
  }

  h2 {
    font-family: var(--font-titles);
    font-size: 2rem;
    color: var(--cor-branco);
  }

  p {
    font-family: var(--font-texts);
    font-size: 1.5rem;
    color: var(--cor-branco);
    font-weight: 400;
    line-height: 1.2em;
    text-align: justify;
  }

  button {
    font-family: var(--font-titles);
    font-weight: 700;
    font-size: 2rem;
    color: var(--cor-roxo-escuro);
    background-color: var(--cor-branco);
    padding: 0.6rem 5.8rem;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--cor-roxo-escuro);
      color: var(--cor-branco);
      border: 2px solid var(--cor-branco);
    }
  }

  .highlights {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 75%;
    gap: 7rem;
    margin-bottom: 5.6rem;
  }

  .hightlights-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.2rem;
  }

  img {
    width: 28rem;
    height: auto;
    border-radius: 5px;
  }
`
