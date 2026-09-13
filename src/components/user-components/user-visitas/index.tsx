import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarrosselContainer } from './style'

import uberImg from '@assets/imgs/visitas/uber.jpg'
import cpImg from '@assets/imgs/visitas/cp-codelaces.jpg'
import loftImg from '@assets/imgs/visitas/loft.jpg'
import programariaImg from '@assets/imgs/visitas/programaria.jpg'

// Dados das visitas
const visitasData = [
  {
    id: 1,
    titulo: 'Uber She++ | 2024',
    descricao: 'Networking e aprendizado sobre inclusão feminina na tecnologia',
    imagem: uberImg,
    link: '/visita/1',
  },
  {
    id: 2,
    titulo: 'Campus Party | 2024',
    descricao: 'Explorando inovações tecnológicas e networking',
    imagem: cpImg,
    link: '/visita/2',
  },
  {
    id: 3,
    titulo: 'LOFT | 2024',
    descricao: 'Conhecendo a cultura e os processos de desenvolvimento',
    imagem: loftImg,
    link: '/visita/3',
  },
  {
    id: 4,
    titulo: 'Programaria Summit | 2024',
    descricao: 'Participando de palestras e workshops',
    imagem: programariaImg,
    link: '/visita/4',
  },
]

const CarrosselVisitas: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === visitasData.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? visitasData.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleCardClick = (link: string) => {
    navigate(link)
  }

  return (
    <CarrosselContainer>
      <div className='carousel-wrapper'>
        <button className='carousel-btn prev' onClick={prevSlide}>
          ❮
        </button>

        <div className='carousel-track-wrapper'>
          <div
            className='carousel-track'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {visitasData.map(visita => (
              <div
                key={visita.id}
                className='carousel-card'
                onClick={() => handleCardClick(visita.link)}
              >
                <div className='card-image'>
                  <img src={visita.imagem} alt={visita.titulo} />
                  <div className='card-overlay'>
                    <h3>{visita.titulo}</h3>
                    <p>{visita.descricao}</p>
                    <span className='ver-mais'>Ver mais →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className='carousel-btn next' onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className='carousel-indicators'>
        {visitasData.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </CarrosselContainer>
  )
}

export default CarrosselVisitas
