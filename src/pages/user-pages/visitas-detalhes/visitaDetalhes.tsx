import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getWebVisit } from '@api/web/visits/{visitId}/get'
import type { WebVisit } from '@api/web/visits/get'
import { getApiErrorMessage } from '@api/_shared/httpError'
import { Container } from './style'

// ===== IMPORTS DO HEADER/FOOTER/GLOBAL =====
import Header from '@components/user-components/header'
import Footer from '@components/user-components/footer'
import GlobalStyles from '@styles/GlobalStyles'

const VisitaDetalhe: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [visita, setVisita] = useState<WebVisit | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // ===== BUSCAR DADOS DA API =====
  useEffect(() => {
    const fetchVisita = async () => {
      try {
        setVisita(await getWebVisit(id as string))
      } catch (err) {
        const notFound = axios.isAxiosError(err) && err.response?.status === 404
        setError(
          notFound
            ? 'Visita não encontrada'
            : getApiErrorMessage(err, 'Erro ao buscar visita'),
        )
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
        <main className='visita-main' style={{ textAlign: 'center' }}>
          <h2>Carregando...</h2>
        </main>
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
        <main className='visita-main' style={{ textAlign: 'center' }}>
          <h2>{error || 'Visita não encontrada'}</h2>
          <button className='btn-voltar' onClick={() => navigate(-1)}>
            ← Voltar
          </button>
        </main>
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
      <main className='visita-main'>
        <button className='btn-voltar' onClick={() => navigate(-1)}>
          Voltar
        </button>

        <div className='detalhe-card'>
          <div className='detalhe-imagem-wrapper'>
            <img src={visita.image} alt={visita.title} />
            <span className='imagem-badge'>Visita Técnica</span>
          </div>

          <div className='conteudo'>
            <h1>{visita.title}</h1>

            <div className='info-extra'>
              <div className='info-item'>
                <strong>Data:</strong> {visita.date}
              </div>
              <div className='info-item'>
                <strong>Local:</strong> {visita.local}
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: visita.content }} />
          </div>
        </div>
      </main>
      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default VisitaDetalhe
