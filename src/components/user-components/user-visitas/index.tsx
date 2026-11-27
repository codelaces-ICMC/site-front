import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getWebVisits, type WebVisit } from '@api/web/visits/get'
import { getApiErrorMessage } from '@api/_shared/httpError'
import { CarrosselContainer } from './style'

const CarrosselVisitas: React.FC = () => {
  const [visitas, setVisitas] = useState<WebVisit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  // ===== BUSCAR DADOS DA API =====
  useEffect(() => {
    const fetchVisitas = async () => {
      try {
        setVisitas(await getWebVisits())
      } catch (err) {
        setError(getApiErrorMessage(err, 'Erro ao buscar visitas'))
      } finally {
        setLoading(false)
      }
    }

    fetchVisitas()
  }, [])

  // ===== FUNÇÕES DO CARROSSEL =====
  const nextSlide = () => {
    setCurrentIndex(prev => (prev === visitas.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? visitas.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleCardClick = (id: number) => {
    navigate(`/visita/${id}`)
  }

  // ===== ESTADOS DE LOADING/ERRO =====
  if (loading) {
    return (
      <CarrosselContainer>
        <div className='loading-message'>Carregando visitas...</div>
      </CarrosselContainer>
    )
  }

  if (error) {
    return (
      <CarrosselContainer>
        <div className='error-message'>Erro ao carregar visitas: {error}</div>
      </CarrosselContainer>
    )
  }

  if (visitas.length === 0) {
    return (
      <CarrosselContainer>
        <div className='empty-message'>
          Nenhuma visita técnica cadastrada ainda.
        </div>
      </CarrosselContainer>
    )
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
            {visitas.map(visita => (
              <div
                key={visita.id}
                className='carousel-card'
                onClick={() => handleCardClick(visita.id)}
              >
                <div className='card-image'>
                  <img
                    src={visita.image}
                    loading='lazy'
                    decoding='async'
                    alt={visita.title}
                  />
                  <div className='card-overlay'>
                    <h3>{visita.title}</h3>
                    <p>{visita.description}</p>
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
        {visitas.map((_, index) => (
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
