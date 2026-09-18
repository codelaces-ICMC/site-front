import styled from 'styled-components'

export const Container = styled.section`
  /* Cor de fundo cinza claro da imagem */
  background-color: var(--cor-cinza-claro);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18vh 0;
  overflow: visible;
  z-index: 1; /* Garante que fique acima do fundo da próxima seção */
`

export const ContentWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    margin: 0;
    font-family: var(--font-titles);
    font-size: 2.3rem;
    color: var(--cor-roxo-escuro);
  }

  .logo-centro {
    width: 250px;
    max-width: 70%;
  }

  p {
    max-width: 1000px;
    margin: 0;
    font-family: var(--font-titles);
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.7;
    text-align: center;
    color: var(--cor-roxo-escuro);
    span {
      background-color: var(--cor-roxo-escuro);
      color: var(--cor-branco);
      padding: 0 4px;
    }
  }

  .texto-codelaces {
    margin: 0;
    font-family: var(--font_titles);
    font-size: 3rem;
    color: var(--cor-roxo-escuro);
  }

  @media (max-width: 520px) {
    height: 450px;
  }
`
/* Posicionamento dos Grafismos */
export const DecorItem = styled.img`
  position: absolute;
  transition: all 1.2s ease-in-out;
  z-index: 2; /* Fica acima do fundo cinza e da próxima faixa branca */

  &.top-left {
    top: -3vw;
    left: 15%;
    width: 20vw;
    min-width: 250px;
  }

  &.top-right {
    top: 3vw;
    right: 5vw;
    width: 10vw;
  }

  &.bottom-left {
    bottom: -10%;
    left: 1%;
    width: 20vw;
    min-width: 180px;
  }

  /* O SEGREDO DO VAZAMENTO: Usar bottom negativo! */
  &.bottom-right-venus {
    bottom: -10vw;
    right: 3%;
    width: 22vw;
    min-width: 210px;
  }

  /* Responsividade: Diminuir os grafismos no celular para não cobrir o texto */
  @media (max-width: 320px) {
    &.top-left {
      width: 20%;
      min-width: 60px;
    }

    /* A Estrela Escura */
    &.top-right {
      width: 60px;
    }

    /* As Bolinhas */
    &.bottom-left {
      width: 120px;
      /* Aparece só com a logo, pendurada no teto à direita! */
      bottom: auto;
      left: auto;
    }
    &.bottom-right-venus {
      width: 80px;
      bottom: -120px;
      right: 5%;
    }
  }
`
