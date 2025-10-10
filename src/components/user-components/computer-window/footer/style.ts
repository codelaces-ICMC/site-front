import { styled } from 'styled-components'

export const Container = styled.footer<{
  backgroundColor: string
  textColor: string
}>`
  .footer {
    background-color: ${({ backgroundColor }) => backgroundColor};
    display: flex;
    height: 15vh;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex: wrap;
  }

  h2 {
    color: ${({ textColor }) => textColor};
    font-weight: 800;
    font-size: 1.2em;
    font-family: var(--font-titles);
  }

  li {
    display: inline-block;
    margin: 0 5px;
    padding: 0.6rem;
  }
`

export const StyledIcons = styled.img<{ logoColor: string }>`
  color: ${({ logoColor }) => logoColor};

  &:hover {
    cursor: pointer;
  }
`
