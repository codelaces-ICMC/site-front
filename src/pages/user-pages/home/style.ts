import { styled } from 'styled-components'

export const Container = styled.div`
  .banner-home {
    width: 100%;
    margin-top: 100px;
  }

  #carrossel-news {
    background-color: var(--cor-amarelo-claro);
  }

  .title-news {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    padding-top: 2.5em;
    padding-bottom: 0.5em;

    h1 {
      font-family: var(--font-titles-alt);
      color: var(--cor-roxo-escuro);
      font-size: 2.5em;
    }
  }

  .selective-title {
    font-weight: 800px;
    color: var(--cor-roxo-escuro);
    font-size: 3em;
    text-align: center;
    margin: 1.5em 1.5em 1em 1.5em;
  }

  .selective-text {
    font-size: 1.5em;
    text-align: center;
    margin: 0 4em;
    margin-bottom: 2em;
  }

  .selective-btn-area {
    display: flex;
    justify-content: center;
    margin: 0 20vw;
    margin-bottom: 5vh;
  }

  .selective-btn {
    font-size: 1.7em;
    font-weight: 800;
    padding: 1em;
    background: var(--cor-rosa);
    color: var(--cor-branco);
    border-radius: 10px;
    text-align: center;
  }

  .selective-btn:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  @media screen and (max-width: 600px) {
    .selective-title {
      font-size: 2.3em;
    }

    .selective-text {
      font-size: 1.4em;
    }
  }

  @media screen and (max-width: 700px) {
    .banner-home {
      width: 100%;
    }
  }
`
