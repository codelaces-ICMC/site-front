import { styled } from 'styled-components'

export const Container = styled.div`
  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 3vw;
    padding: 1vh;
    overflow: auto;
    justify-content: center;
  }

  @media screen and (max-width: 817px) {
    .card-list {
      justify-content: center;
    }
  }
`
