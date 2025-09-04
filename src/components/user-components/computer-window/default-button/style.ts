import styled from 'styled-components'

export const Button = styled.button`
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: 2rem;
  color: var(--cor-roxo-escuro);
  background-color: var(--cor-branco);
  padding: 0.6rem 5.8rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--cor-roxo-escuro);
    color: var(--cor-branco);
    border: 2px solid var(--cor-branco);
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
    padding: 1rem 3.25rem;
    font-weight: 600;
  }
`
