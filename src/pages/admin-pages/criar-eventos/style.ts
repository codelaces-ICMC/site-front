import { styled } from 'styled-components'

export const Container = styled.div`
  background: var(--degrade-roxo-rosa);
  font-family: var(--font-titles);

  .header {
    background: var(--cor-branco);
    display: flex;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    padding: 0 5vw;
    align-items: center;
    color: var(--cor-roxo-escuro);
  }

  .logo {
    margin: 0 42vw 0 0;
  }

  h1 {
    font-family: var(--font-logo);
    font-weight: 700;
    font-size: 40px;

    span {
      font-size: 30px;
    }
  }

  .forms-event {
    background: var(--cor-branco);
    border-radius: 20px 20px 0 0;
    margin: 5vh 5vw;
    min-height: 86.4vh;
    height: auto;
  }

  .label-event {
    color: var(--cor-roxo-escuro);
    font-weight: 700;
    font-size: 1.5em;
    padding: 0.3em;
    display: flex;
    flex-direction: column;
  }

  input {
    border: 1px solid var(--cor-roxo-escuro);
    border-radius: 20px;
    height: auto;
    padding: 0.5em;
  }

  //Os erros dos inputs ainda não estão funcionando
  //precisamos adicionar a propriedade error no input
  .input-error {
    border: 2px solid var(--cor-vermelho);
  }

  .error-message {
    color: var(--cor-vermelho);
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    display: block;
  }

  textarea {
    border: 1px solid var(--cor-roxo-escuro);
    border-radius: 20px;
    height: auto;
    padding: 0.5em;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 5vh 5vw;
  }

  #label-nome {
    width: 100%;
  }

  #label-inicio {
    width: 47.5%;
  }

  #label-fim {
    width: 47.5%;
  }

  #label-inscricao-inicio {
    width: 30%;
  }

  #label-inscricao-fim {
    width: 30%;
  }

  #label-max-participantes {
    width: 30%;
  }

  #label-descricao {
    width: 100%;
  }

  #label-banner {
    width: 100%;
  }

  #input-banner {
    border: none;
    padding: 0;
    border-radius: 0;
  }

  .title-section {
    font-size: 1.7em;
    border-top: 2px dotted var(--cor-preto);
    margin-top: 0.3em;
    padding-top: 0.2em;
  }

  #label-valor {
    width: 15%;
  }

  #label-link {
    width: 80%;
  }

  .segunda-linha,
  .linha-data {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
  }

  .btn-finish {
    position: absolute;
    top: 0.5vh;
    right: 2vw;
  }
`
