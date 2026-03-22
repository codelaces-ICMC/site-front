import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;

  .dropdown-toggle {
    height: auto;
    padding: 0.5em;
    background-color: white;
    color: gray;
    border-radius: 20px;
    border: 1px solid var(--cor-roxo-escuro);
    background-color: white;
    width: 100%;
    text-align: left;
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 20;
    left: 0;
    right: 0;
    background-color: var(--cor-roxo-claro);
    color: var(--cor-roxo-escuro);
    margin-top: 0.3em;
    padding: 0.2em;
    border: 1px solid var(--cor-roxo-escuro);
    border-radius: 12px;
    max-height: 240px;
    overflow-y: auto;

    li {
      padding: 0.35em 0.55em;
      border-radius: 8px;
      cursor: pointer;
    }

    li:hover {
      background: rgba(255, 255, 255, 0.45);
    }
  }
`
