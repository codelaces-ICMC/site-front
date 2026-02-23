import { Container } from './style'
import fotoHome from '../../../assets/imgs/general/fotoHome.png'
import DefaultButton from '../default-button'
import HighlightsProps from '../../props/props-highlights'

export default function Highlights({
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc = fotoHome,
  imageAlt = 'Destaque',
}: HighlightsProps) {
  return (
    <Container>
      <h1>VEM Aí. PARTICIPE!</h1>
      <div className='highlights'>
        <div className='hightlights-left'>
          <h2>{subtitle}</h2>
          <p>{description}</p>
          <a href={buttonLink}>
            <DefaultButton text={buttonText} />
          </a>
        </div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </Container>
  )
}
