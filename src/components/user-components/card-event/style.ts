import { styled } from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  border-radius: 20px;
  transition: box-shadow 0.3s ease-in-out;
  0px 2px 3px 1.5px rgba(82, 39, 102, 0.5); // cor roxo escuro com 50% de opacidade

  .card-event {
    padding: 0.4em;
    display: flex;
    height: 426px;
    width: 300px;
    background: var(--cor-branco);
    box-shadow: 0px 0px 4px rgba(0.82, 0.39, 0.102, 0.5);
    border-radius: 20px;
    flex-direction: column;
  }

  .card-title {
    margin-top: 1em;
    text-align: center;
    color: var(--cor-roxo-escuro);
    font-family: var(--font-titles);
    text-transform: uppercase;
    font-size: 1.25rem;
    overflow: hidden;
    margin-bottom: auto;
  }

  .card-event:checked {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  }

  .div-img-card {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    height: 254px;
  }

  .img-card {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .div-content-card {
    padding: 0 1em;
  }

  .div-content-card-details {
    text-align: center;
    padding: 0.9em 0 0 0;
    font-family: var(--font-texts);
    margin-bottom: auto;
  }

  .div-show-more {
    padding: 0em 16px 0.5em 16px;
    margin-top: auto;
  }

  .span-show-more {
    font-family: var(--font-texts);
    color: var(--cor-cinza);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media screen and (max-width: 700px) {
    .card-event {
      width: 300px;
    }
  }

  &:hover {
    box-shadow: 0 4px 12px var(--cor-roxo-vibrante);
    cursor: pointer;
  }
`
