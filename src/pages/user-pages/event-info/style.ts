import { styled } from 'styled-components'
import bgSvg from '../../../assets/icons/general/background.svg'

export const Container = styled.div`
  background-image: url(${bgSvg});
  background-repeat: repeat;
  background-position: -100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10vh;

  .main-div {
    display: flex;
    justify-content: center;
  }
`
