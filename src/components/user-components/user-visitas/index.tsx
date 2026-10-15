import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarrosselContainer } from './style'

// ===== TIPAGEM =====
interface Visita {
  id: number
  title: string
  date: string
  local: string
  description: string
  image: string
  content: string
  status: string
  created_at: string
  updated_at: string
}

// ===== URL DA API =====
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'

const CarrosselVisitas: React.FC = () => {
  const [visitas, setVisitas] = useState<Visita[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  // ===== BUSCAR DADOS DA API =====
  useEffect(() => {
    const fetchVisitas = async () => {
      try {
        const response = await fetch(`${API_URL}/api/web/visits`)

        if (!response.ok) {
          throw new Error('Erro ao buscar visitas')
        }

        const data = await response.json()
        setVisitas(data.visits || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido')
        console.error('Erro ao buscar visitas:', err)
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
                    src={`${API_URL}/images/${visita.image}`}
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
