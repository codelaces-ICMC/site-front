import React from 'react'
import { Container, ContentWrapper, DecorItem } from './style'

import svgDevSimbols from '@assets/icons/general/dev-simbols.svg'
import svgDarSparkle from '@assets/icons/general/dark-sparkle.svg'
import svgBubbles from '@assets/icons/general/bubbles.svg'
import svgVenusCircles from '@assets/icons/general/venus-circles.svg'
import logoCodelaces from '@assets/icons/logos/logo-ada-lilas.svg'

const Banner: React.FC = () => {
  return (
    <Container>
      {/* Elementos decorativos posicionados de forma absoluta */}
      <DecorItem className='top-left' src={svgDevSimbols} />
      <DecorItem className='top-right' src={svgDarSparkle} />
      <DecorItem className='bottom-left' src={svgBubbles} />
      <DecorItem className='bottom-right-venus' src={svgVenusCircles} alt='' />

      {/* Wrapper central */}
      <ContentWrapper>
        {/* TEXTO DA COMUNIDADE */}
        <h1>CODELACES</h1>
        <img className='logo-centro' src={logoCodelaces} alt='Logo Codelaces' />
        <p>
          "Construímos uma <span>Comunidade</span> que dá às nossas membras a
          confiança para criar e, com isso, assumir o <span>protagonismo</span>
          durante a gaduação e em suas carreiras na tecnologia."
        </p>
      </ContentWrapper>
    </Container>
  )
}

export default Banner
