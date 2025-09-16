import { styled } from 'styled-components'

export const Container = styled.div`
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  .div-img-news {
    padding: 20px;
  }

  .img-news {
    height: 200px;

    /* Croppando a imagem se necessário */
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  .div-content-news {
    padding: 0 30px;
    padding-bottom: 20px;
  }

  .title-news {
    color: var(--cor-roxo-escuro);
    font-family: var(--font-titles);
    text-transform: uppercase;
    font-size: 1.25rem;
  }

  .description-news {
    font-family: var(--font-texts);
    margin: 1rem 0;
    font-weight: 300;
    font-size: 1rem;

    /* Interrompendo o texto se tiver mais de 3 linhas */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .div-other-infos-news {
    color: grey;
    font-size: 0.8rem;
  }

  &:hover {
    box-shadow: 0 4px 12px var(--cor-roxo-vibrante);
    cursor: pointer;
  }
`
