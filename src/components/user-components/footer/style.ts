import { styled } from 'styled-components'
import { ReactComponent as EmailIcon } from '@assets/icons/general/email.svg'
import { ReactComponent as InstaIcon } from '@assets/icons/general/insta.svg'
import { ReactComponent as LinkedinIcon } from '@assets/icons/general/linkedin.svg'

export const Container = styled.footer<{
  $backgroundColor: string
  $textColor: string
}>`
  .footer {
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: wrap;
    padding: 25px 10vw;
  }

  h2 {
    color: ${({ $textColor }) => $textColor};
    font-weight: 800;
    font-size: 1.2em;
    font-family: var(--font-titles);
  }

  .social-icons {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: inline-block;
    margin: 0 5px;
    padding: 0.6rem;
  }

  @media (max-width: 650px) {
    .footer {
      flex-direction: row-reverse;
    }

    .title {
      display: flex;
      width: 100%;
      justify-content: center;
    }

    .social-icons {
      flex-direction: column;
      align-items: center;

      border-right: 3px solid ${({ $textColor }) => $textColor};
      margin-right: 20px;
    }
  }
`

export const StyledEmailIcon = styled(EmailIcon)<{ $logoColor: string }>`
  color: ${({ $logoColor }) => $logoColor};

  &:hover {
    cursor: pointer;
  }
`

export const StyledInstaIcon = styled(InstaIcon)<{ $logoColor: string }>`
  color: ${({ $logoColor }) => $logoColor};

  &:hover {
    cursor: pointer;
  }
`

export const StyledLinkedinIcon = styled(LinkedinIcon)<{ $logoColor: string }>`
  color: ${({ $logoColor }) => $logoColor};

  &:hover {
    cursor: pointer;
  }
`
