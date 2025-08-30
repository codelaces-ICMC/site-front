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
  background: #f8f7fa;
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
  font-size: 22px;
  cursor: pointer;
  color: #666;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #4b006e;
  font-family: 'Inter', sans-serif;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #4b006e;
  border-radius: 12px;
  outline: none;
  font-size: 14px;
  font-family: 'Inter', sans-serif;

  &:focus {
    border-color: #6a1b9a;
  }
`

export const Button = styled.button`
  margin-top: 1rem;
  padding: 14px;
  background: #4b006e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #37004d;
  }
`
