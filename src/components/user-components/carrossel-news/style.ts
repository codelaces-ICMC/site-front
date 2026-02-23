import { styled } from 'styled-components'

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Limita a largura máxima no PC */
  margin: 0 auto;
  padding: 1rem 0vw;
`

export const ScrollContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* Faz o "imã" de parar no card certinho */
  scroll-behavior: smooth;
  padding: 20px; /* Dá espaço para o hover do box-shadow do card não ser cortado */
  flex: 1;

  /* Esconde a barra de rolagem (scroll) nativa feia dos navegadores */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  .carousel-item {
    scroll-snap-align: center; /* Centraliza o card quando o scroll para */
    flex: 0 0 auto; /* Impede que os cards encolham (eles manterão os 300px definidos no NewsCard) */
  }
`

export const ArrowButton = styled.button`
  background-color: var(--cor-roxo-escuro);
  color: var(--cor-branco, #fff);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  line-height: 0;
  padding-bottom: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition:
    opacity 0.3s,
    background-color 0.3s;
  flex-shrink: 0;

  &:hover {
    background-color: var(--cor-roxo-vibrante);
  }

  &.right-arrow {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
