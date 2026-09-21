import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from './style'

// ===== IMPORTS DO HEADER/FOOTER/GLOBAL =====
import Header from '@components/user-components/header'
import Footer from '@components/user-components/footer'
import GlobalStyles from '@styles/GlobalStyles'

// ===== IMPORTS DAS IMAGENS =====
import uberImg from '@assets/imgs/visitas/uber.jpg'
import cpImg from '@assets/imgs/visitas/cp-codelaces.jpg'
import loftImg from '@assets/imgs/visitas/loft.jpg'
import programariaImg from '@assets/imgs/visitas/programaria.jpg'

// ===== DADOS =====
const visitasCompletas = [
  {
    id: 1,
    titulo: 'Programaria Summit | 2024',
    imagem: programariaImg,
    data: '9 de Novembro, 2024',
    local: 'São Paulo - SP',
    conteudo: `
        <h2>Sobre a Visita</h2>
        <p>No dia 9 de novembro de 2024, o Codelaces esteve no Programaria Summit em São Paulo.
        O Programaria Summit é o principal evento de tecnologia, carreira e inovação voltado para a inclusão de mulheres (cis e trans) e gêneros minorizados no Brasil.
        No evento, as membras do Codelaces tiveram a oportunidade de participar de palestras e workshops que abordaram temas relevantes para o desenvolvimento profissional 
        e acadêmico, ter contato com grandes empresas do mundo da tecnologia e aumentar o networking com diversas profissionais.
        No final do evento também foi possível participar de um momento descontraído com as profissionais representantes das empresas e trocar experiências e contatos.</p>
        `,
  },
  {
    id: 2,
    titulo: 'Campus Party | 2024',
    imagem: cpImg,
    data: '14 de Julho, 2024',
    local: 'São Paulo - SP',
    conteudo: `
        <h2>Sobre a Visita</h2>
        <p>No dia 14 de julho de 2024, o Codelaces esteve na Campus Party 2024 em São Paulo para participar do evento.
        Foi um momento de integração entre estudantes e profissionais da área de tecnologia, além de ampliar a conexão entre as integrantes.
        O evento que é o maior festival de ciência, tecnologia, inovação, empreendedorismo e cultura digital do mundo foi realizado presencialmente em São Paulo
        e as integrantes do Codelaces puderam participar ativamente durante todo o dia em palestras e atividades que abordaram temas relevantes para o
        desenvolvimento profissional e acadêmico.
        Além de palestras, também foi possível acampar nas dependências do evento, proporcionando um ambiente único de aprendizado e networking com pessoas de todo o Brasil.</p>
        `,
  },
  {
    id: 3,
    titulo: 'LOFT | 2024',
    imagem: loftImg,
    data: '18 de Outubro, 2024',
    local: 'São Paulo - SP',
    conteudo: `
        <h2>Sobre a Visita</h2>
        <p>No dia 18 de outubro de 2024, o Codelaces esteve na LOFT em São Paulo para participar do evento Sexta Universitária #sódelas. 
        A Loft é uma empresa brasileira de tecnologia especializada em soluções para o mercado imobiliário, e gentilmente abriu as portas 
        de seu escritório em São Paulo para as membras do Codelaces.
        Durante todo o dia de evento, as integrantes puderam conhecer mais sobre a empresa e suas oportunidades de trabalho, bem como aumentaram seu networking 
        através de conversas e atividades interativas com as funcionárias da empresa.
        Ao final do evento, as integrantes tiveram a oportunidade de compartilhar experiências e criar conexões valiosas para o futuro em um momento de interação
        e conversa descontraída na empresa.</p>
        `,
  },
  {
    id: 4,
    titulo: 'uber She ++ | 2024',
    imagem: uberImg,
    data: '2 e 3 de Julho, 2024',
    local: 'São Paulo - SP',
    conteudo: `
        <h2>Sobre a Visita</h2>
        <p>Nos dias 2 e 3 de julho de 2024, o Codelaces esteve no Tech Center da Uber Brasil em São Paulo para participar do evento She++ 2024.
        O evento que visa promover a inclusão de meninas na área de tecnologia, proporcionou para as jovens do grupo e convidadas, palestras 
        sobre processos seletivos e dicas de preparação para entrevistas na área de tecnologia, liderança e networking entre as jovens.</p>
        `,
  },
]

// ===== COMPONENTE =====
const VisitaDetalhe: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const visita = visitasCompletas.find(v => v.id === Number(id))

  if (!visita) {
    return (
      <Container>
        <GlobalStyles />
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Visita não encontrada</h2>
          <button className='btn-voltar' onClick={() => navigate(-1)}>
            ← Voltar
          </button>
        </div>
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
          <img src={visita.imagem} alt={visita.titulo} />
          <span className='imagem-badge'>Visita Técnica</span>
        </div>

        <div className='conteudo'>
          <h1>{visita.titulo}</h1>

          <div className='info-extra'>
            <div className='info-item'>
              <span className='info-icon'>📅</span>
              <strong>Data:</strong> {visita.data}
            </div>
            <div className='info-item'>
              <span className='info-icon'>📍</span>
              <strong>Local:</strong> {visita.local}
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: visita.conteudo }} />
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
