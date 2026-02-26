import { styled } from 'styled-components'

export const Container = styled.div`
  #infos-grupo {
    #banner-container {
      position: relative;
      margin-bottom: clamp(80px, 8vw, 160px);
    }

    #divas-img {
      width: 100%;
      display: block;
    }

    #logo-img {
      position: absolute;
      bottom: 0;
      transform: translateY(45%);
      left: 10%;
      width: 20vw;
      min-width: 125px;
      z-index: 10;
    }

    p {
      font-family: var(--font-texts);
      font-size: 1.5em;
      margin: 5vh 10vw;
    }

    span {
      color: var(--cor-roxo-escuro);
      font-weight: 600;
    }

    h2 {
      font-family: var(--font-titles);
      font-weight: 700;
      font-size: 1.7em;
      margin: 5vh 10vw;
    }

    #apoiadores-container {
      display: flex;
      margin: 5vh 10vw;
      gap: 25px 75px;
      flex-wrap: wrap;
    }

    #logo-apoiadores1 {
      width: 200px;
    }

    # logo-apoiadores2 {
      width: 100px;
    }

    @media (max-width: 520px) {
      text-align: center;

      #apoiadores-container {
        justify-content: center;
      }
    }
  }

  #valores-section {
    background-color: var(--cor-roxo-claro);
    padding: 5vh 10vw;
    text-align: center;

    h1 {
      text-align: center;
      font-family: var(--font-titles-alt);
      color: var(--cor-roxo-escuro);
      font-size: 2em;
    }

    #valores-container {
      margin-top: 5vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4vh 6vw;

      .valor-container {
        border: 2px dashed var(--cor-roxo-escuro);
        padding: 1em;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        border-radius: 10px;

        h3 {
          font-family: var(--font-titles);
          color: var(--cor-roxo-escuro);
          font-size: 1.7em;
          padding-top: 0.5em;
        }

        p {
          font-family: var(--font-texts);
          font-size: 1.5em;
          padding-bottom: 1em;
        }
      }

      @media (max-width: 720px) {
        grid-template-columns: 1fr;
      }
    }
  }
`
