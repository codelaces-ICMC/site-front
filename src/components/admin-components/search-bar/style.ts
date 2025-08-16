import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;
  text-align: center;
  margin-top: 3em;

  .input-search {
    height: 3em;
    border-radius: 20px;
    width: 70vw;
    text-indent: 8.5em;
    fext-font: var(--font-family);
  }

  .search-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-48%); /*corrige o alinhamento vertical*/
    left: 15vw;
    background: transparent;
  }

  .search-btn:active {
    transform: translateY(-50%) scale(1.05); /* mantém centralizado ao clicar */
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6vw;
    margin: 5vh 5vw;
    padding-bottom: 0.9vh;
    overflow: auto;
    max-height: 80vh;
  }

  .search-btn img {
    width: 7em; /*ajuste o tamanho que quiser */
    height: 7em; /*ajuste o tamanho que quiser */
    object-fit: contain; /*garante que a imagem não distorça */
  }
`
