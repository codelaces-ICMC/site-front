import React from 'react'
import thumbnail from '../../../assets/img/hackathon2024/thumb-entrevista.png'
import { Container } from './style'

const VideoThumbnail: React.FC = () => {
  const videoUrl = 'https://globoplay.globo.com/v/12609941/'

  return (
    <Container>
      <a href={videoUrl} target='_blank' rel='noopener noreferrer'>
        <img src={thumbnail} alt='Miniatura do vídeo' className='thumbnail' />
      </a>
    </Container>
  )
}

export default VideoThumbnail
