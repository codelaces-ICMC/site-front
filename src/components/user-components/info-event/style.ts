import { styled } from 'styled-components'

export const Container = styled.div`
  font-family: var(--font-titles);

  .main-div {
    background: var(--cor-branco);
    width: 80vw;
    height: auto;
    border-radius: 40px;
    display: flex;
    justify-content: space-around;
  }

  .column {
    display: flex;
    flex-direction: column;
    padding: 10vh 2vw;
    width: 35vw;
  }

  #first-column {
    height: auto;
  }

  #second-column {
    text-align: left;
    gap: 2vh;

    h1 {
      font-size: 1.4em;
      color: var(--cor-roxo-escuro);
      margin: 0.5em 0;
      text-align: center;
    }

    .activity-li {
      font-size: 1.4em;
      color: var(--cor-roxo-escuro);
      margin-bottom: 1em;
      display: flex;
      align-itens: center;

      input[type='checkbox'] {
        margin-right: 15px;
        cursor: pointer;
      }

      img {
        margin-left: 5px;
        cursor: pointer;
      }
    }

    .btn-container {
      display: flex;
      justify-content: center;

      button {
        background-color: var(--cor-roxo-escuro);
        color: var(--cor-branco);
        font-size: 1.3em;
        font-weight: 600;
        padding: 0.5em 1em;
        border-radius: 10px;
      }

      button:hover {
        background-color: var(--cor-amarelo);
        cursor: pointer;
      }

      button:disabled {
        background-color: var(--cor-cinza-claro);
        color: var(--cor-preto);
        cursor: not-allowed;
      }

      button:disabled:hover {
        background-color: var(--cor-cinza-claro);
      }
    }
  }

  .img-event {
    width: 100%;
    height: 20vh;
    border-radius: 40px 40px 0 0;
  }

  p {
    font-weight: 500;
    font-size: 1.4em;
    margin: 0.5em 0;

    span {
      font-weight: 700;
      color: var(--cor-roxo-escuro);
    }
  }

  #first-p {
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    background-color: var(--cor-roxo-escuro);
    color: var(--cor-branco);
    font-size: 1.5em;
  }

  .line-between {
    width: 3px;
    background-color: var(--cor-amarelo);
    margin: 4% 0;
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #itens {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-text {
    display: flex;
    text-align: left;
    color: var(--cor-roxo-escuro);
    align-items: flex-start;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 1.5em;
    margin-bottom: 0.3em;
  }

  .modal-p {
    text-align: left;
    font-weight: 800;
    font-size: 1.2em;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0 0 9.5em 2.5em;
  }

  .sub-item {
    margin: 0.5em;
  }

  @media screen and (max-width: 750px) {
    .main-div {
      flex-direction: column;
      align-items: center;
      width: 95vw;
      padding: 2rem 1rem;
    }

    .column {
      width: 100%;
      padding: 0;
    }

    #first-column {
      margin-bottom: 20px;
    }

    .line-between {
      width: 100%;
      height: 3px;
      margin: 20px 0;
    }
  }
`
