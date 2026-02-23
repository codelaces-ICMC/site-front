import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  background-color: var(--cor-branco);
  border: 2px solid var(--cor-roxo-escuro);
  border-radius: 50px;
  padding: 12px 24px;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:focus-within {
    box-shadow: 0 0 0 3px var(--cor-roxo-claro);
  }
`

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-texts);
  font-size: 1.1rem;
  color: var(--cor-roxo-escuro);

  &::placeholder {
    color: var(--cor-cinza);
    font-weight: 400;
  }
`
