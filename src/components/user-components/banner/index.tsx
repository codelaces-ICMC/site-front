import React, { useState, useEffect } from 'react'
import { Container, ContentWrapper, FadeElement, DecorItem } from './style'

import svgDevSimbols from '../../../assets/icons/general/dev-simbols.svg'
import svgDarSparkle from '../../../assets/icons/general/dark-sparkle.svg'
import svgBubbles from '../../../assets/icons/general/bubbles.svg'
import svgVenusCircles from '../../../assets/icons/general/venus-circles.svg'
import logoCodelaces from '../../../assets/icons/logos/logo-nome.svg'

const Banner: React.FC = () => {
  // Estado que controla o que está aparecendo: false = Texto, true = Logo
  const [showLogo, setShowLogo] = useState(false)

  // Temporizador para trocar a cada 10 segundos (10000 milissegundos)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo(prev => !prev)
    }, 10000)

    // Limpa o temporizador quando sair da página
    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      {/* Elementos decorativos posicionados de forma absoluta */}
      <DecorItem className='top-left' src={svgDevSimbols} />
      <DecorItem className='top-right' src={svgDarSparkle} />
      <DecorItem className='bottom-left' src={svgBubbles} />

      {/* O grafismo de Vênus que VAZA para a próxima seção */}
      <DecorItem className='bottom-right-venus' src={svgVenusCircles} alt='' />

      {/* Wrapper central onde as coisas trocam */}
      <ContentWrapper>
        {/* TEXTO DA COMUNIDADE */}
        <FadeElement isActive={!showLogo}>
          <div className='texto-destaque'>
            “Construímos uma <span>Comunidade</span> que dá às nossas membras a
            confiança para criar e, com isso, assumir o{' '}
            <span>protagonismo</span> durante a graduação e em suas carreiras na
            tecnologia.”
          </div>
        </FadeElement>

        {/* LOGO CODELACES */}
        <FadeElement isActive={showLogo}>
          <img className='logo-centro' src={logoCodelaces} alt='[code]Laces' />
        </FadeElement>
      </ContentWrapper>
    </Container>
  )
}

export default Banner
