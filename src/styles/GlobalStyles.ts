import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --cor-roxo-escuro: #522766;
        --cor-roxo-acinzentado: #5E548E;
        --cor-roxo-vibrante: #A34DCC;
        --cor-roxo-claro: #C894E0;
        --cor-amarelo-claro: #FFFFAA;
        --cor-amarelo: #FFDF00
        --cor-branco: #F2F2F2;
        --cor-preto: #0D0D0D;
        --font-titles: 'Zilla Slab';
        --font-titles-alt: 'Zilla Slab Highlight';
        --font-taglines: 'Amoresa';
        --font-texts: 'Inter';
    }
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: var(--font-family);
        vertical-align: baseline;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        height: 100vh;
    }

    ul, li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
      }      

    body {
        background-color: var(--cor-branco);
    }

    hr {
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        height: 3px;
        width:50%;
        background-color: var(--cor-rosa);
    }
`
