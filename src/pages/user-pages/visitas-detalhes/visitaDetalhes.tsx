import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from './style'

// ===== IMPORTS DO HEADER/FOOTER/GLOBAL =====
import Header from '@components/user-components/header'
import Footer from '@components/user-components/footer'
import GlobalStyles from '@styles/GlobalStyles'

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
}

// ===== URL DA API =====
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'

const VisitaDetalhe: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [visita, setVisita] = useState<Visita | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // ===== BUSCAR DADOS DA API =====
  useEffect(() => {
    const fetchVisita = async () => {
      try {
        const response = await fetch(`${API_URL}/api/web/visits/${id}`)

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Visita não encontrada')
          }
          throw new Error('Erro ao buscar visita')
        }

        const data = await response.json()
        setVisita(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido')
        console.error('Erro ao buscar visita:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchVisita()
    }
  }, [id])

  // ===== ESTADOS DE LOADING/ERRO =====
  if (loading) {
    return (
      <Container>
        <GlobalStyles />
        <Header
          backgroundColor='var(--cor-roxo-escuro)'
          textColor='var(--cor-branco)'
        />
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Carregando...</h2>
        </div>
        <Footer
          backgroundColor='var(--cor-roxo-escuro)'
          textColor='var(--cor-branco)'
        />
      </Container>
    )
  }

  if (error || !visita) {
    return (
      <Container>
        <GlobalStyles />
        <Header
          backgroundColor='var(--cor-roxo-escuro)'
          textColor='var(--cor-branco)'
        />
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>{error || 'Visita não encontrada'}</h2>
          <button className='btn-voltar' onClick={() => navigate(-1)}>
            ← Voltar
          </button>
        </div>
        <Footer
          backgroundColor='var(--cor-roxo-escuro)'
          textColor='var(--cor-branco)'
        />
      </Container>
    )
  }

  return (
    <Container>
      <Header
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
      <GlobalStyles />
      <button className='btn-voltar' onClick={() => navigate(-1)}>
        Voltar
      </button>

      <div className='detalhe-card'>
        <div className='detalhe-imagem-wrapper'>
          <img src={`${API_URL}/images/${visita.image}`} alt={visita.title} />
          <span className='imagem-badge'>Visita Técnica</span>
        </div>

        <div className='conteudo'>
          <h1>{visita.title}</h1>

          <div className='info-extra'>
            <div className='info-item'>
              <span className='info-icon'>📅</span>
              <strong>Data:</strong> {visita.date}
            </div>
            <div className='info-item'>
              <span className='info-icon'>📍</span>
              <strong>Local:</strong> {visita.local}
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: visita.content }} />
        </div>
      </div>
      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default VisitaDetalhe
