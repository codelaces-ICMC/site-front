import styled from 'styled-components'

export const Container = styled.section`
  /* Cor de fundo roxa clara da imagem */
  background-color: var(--cor-roxo-claro);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14vh 0;
  overflow: visible;
  z-index: 1; /* Garante que fique acima do fundo da próxima seção */
`

export const ContentWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 520px) {
    height: 450px;
  }
`

export const FadeElement = styled.div<{ isActive: boolean }>`
  position: absolute; /* Coloca os dois (texto e logo) no mesmo lugar sobrepostos */
  transition:
    opacity 1.2s ease-in-out,
    visibility 1.2s;

  /* Se estiver ativo, opacidade 1. Se não, opacidade 0 */
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};

  text-align: center;

  .texto-destaque {
    margin-top: 0rem;
    font-family: var(--font-titles);
    font-size: max(2rem, 2.8vw);
    color: var(--cor-roxo-escuro);
    font-weight: 500;
    line-height: 1.6;
    padding-bottom: 15px;

    span {
      background-color: var(--cor-roxo-escuro);
      color: var(--cor-branco);
      padding: 0 0.3em;
      font-weight: 600;
    }
  }

  .logo-centro {
    max-width: 400px;
    width: 100%;
  }

  @media (max-width: 720px) {
    .texto-destaque {
      font-size: 1.8rem;
    }
    .logo-centro {
      max-width: 250px;
    }
  }
`

/* Posicionamento dos Grafismos */
export const DecorItem = styled.img<{ showLogo: boolean }>`
  position: absolute;
  transition: all 1.2s ease-in-out;
  z-index: 2; /* Fica acima do fundo roxo e da próxima faixa branca */

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
    bottom: -3%;
    left: 1%;
    width: 20vw;
    min-width: 200px;
  }

  /* O SEGREDO DO VAZAMENTO: Usar bottom negativo! */
  &.bottom-right-venus {
    bottom: -10vw;
    right: 3%;
    width: 25vw;
    min-width: 220px;
  }

  /* Responsividade: Diminuir os grafismos no celular para não cobrir o texto */
  @media (max-width: 520px) {
    &.top-left {
      width: 50%;
      min-width: 160px;
      /* Se a logo estiver na tela, ele desce (25%). Se for o texto, ele sobe (5%) */
      top: ${({ showLogo }) => (showLogo ? '20%' : '0%')};
      left: ${({ showLogo }) => (showLogo ? '10%' : '5%')};
    }

    /* A Estrela Escura */
    &.top-right {
      width: 60px;
      /* Aparece só com a logo, e viaja lá pra baixo na esquerda! */
      opacity: ${({ showLogo }) => (showLogo ? '1' : '0')};
      top: ${({ showLogo }) => (showLogo ? '70%' : '10%')};
      left: ${({ showLogo }) => (showLogo ? '15%' : '80%')};
    }

    /* As Bolinhas */
    &.bottom-left {
      width: 140px;
      /* Aparece só com a logo, pendurada no teto à direita! */
      opacity: ${({ showLogo }) => (showLogo ? '1' : '0')};
      top: ${({ showLogo }) => (showLogo ? '-60px' : '80%')};
      bottom: auto;
      left: auto;
      right: ${({ showLogo }) => (showLogo ? '-20px' : '80%')};
    }
    &.bottom-right-venus {
      width: 100px;
      bottom: -120px;
      right: 5%;
    }
  }
`
