import { styled } from 'styled-components'

export const Container = styled.div`
  .background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
  .modal-style {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    padding: 4.4rem 4.2rem;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
  }
`
