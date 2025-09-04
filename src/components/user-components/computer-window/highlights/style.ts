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
    width: 50%;
    height: auto;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    gap: 2.5rem;

    .highlights {
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 80%;
      gap: 2.5rem;
    }

    .hightlights-left {
      align-items: center;
      text-align: center;
      gap: 1.8rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
    }

    img {
      width: 100%;
    }
  }
`
