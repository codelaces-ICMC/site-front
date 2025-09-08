import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background: var(--cor-branco);
  padding: 2rem;
  border-radius: 12px;
  width: 380px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: var(--cor-cinza);
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: var(--cor-roxo-escuro);
  font-family: var(--font-texts);
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid var(--cor-roxo-escuro);
  border-radius: 12px;
  outline: none;
  font-size: 14px;
  font-family: var(--font-texts);

  &::placeholder {
    color: var(--cor-cinza-claro);
    font-weight: 400;
    opacity: 1;
  }

  &:focus {
    border-color: var(--cor-roxo-claro);
  }
`

export const Button = styled.button`
  margin-top: 1rem;
  padding: 14px;
  background: var(--cor-roxo-escuro);
  color: var(--cor-branco);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: var(--cor-roxo-claro);
  }
`
