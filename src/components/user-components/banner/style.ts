import styled from 'styled-components'

export const Container = styled.section`
  /* Cor de fundo roxa clara da imagem */
  background-color: var(--cor-roxo-claro);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22vh 0;
  overflow: visible;
  z-index: 1; /* Garante que fique acima do fundo da próxima seção */
`

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-family: var(--font-titles);
    font-size: 2.5rem;
    color: var(--cor-roxo-escuro);
    font-weight: 500;
    line-height: 1.6;

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

  @media (max-width: 750px) {
    .texto-destaque {
      font-size: 1.2rem;
    }
    .logo-centro {
      max-width: 250px;
    }
  }
`

/* Posicionamento dos Grafismos */
export const DecorItem = styled.img`
  position: absolute;
  z-index: 2; /* Fica acima do fundo roxo e da próxima faixa branca */

  &.top-left {
    top: -5%;
    left: 15%;
    width: 300px;
  }

  &.top-right {
    top: 10%;
    right: 10%;
    width: 125px;
  }

  &.bottom-left {
    bottom: -3%;
    left: 1%;
    width: 300px;
  }

  /* O SEGREDO DO VAZAMENTO: Usar bottom negativo! */
  &.bottom-right-venus {
    bottom: -125px; /* Isso faz a imagem descer 60px para fora da caixa roxa */
    right: 3%;
    width: 350px;
  }

  /* Responsividade: Diminuir os grafismos no celular para não cobrir o texto */
  @media (max-width: 750px) {
    &.top-left {
      width: 100px;
      top: 5%;
      left: 5%;
    }
    &.top-right {
      width: 30px;
      top: 5%;
      right: 5%;
    }
    &.bottom-left {
      width: 80px;
    }
    &.bottom-right-venus {
      width: 120px;
      bottom: -40px;
      right: 5%;
    }
  }
`
