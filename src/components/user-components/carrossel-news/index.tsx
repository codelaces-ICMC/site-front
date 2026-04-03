import React, { useRef } from 'react'
import { CarouselWrapper, ScrollContainer, ArrowButton } from './style'
import NewsCard from '../card-news' // Ajuste o caminho conforme sua estrutura
import CardNewsProps from '@components/props/props-card-news' // Ajuste o caminho

interface CarouselProps {
  newsList: CardNewsProps[]
}

const NewsCarousel: React.FC<CarouselProps> = ({ newsList }) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  // Função para rolar para a esquerda ou direita
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // 320px é o tamanho do seu card (300px) + o gap (20px)
      const scrollAmount = direction === 'left' ? -320 : 320
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <CarouselWrapper>
      {/* Seta para a esquerda */}
      <ArrowButton className='left-arrow' onClick={() => scroll('left')}>
        &#8249;
      </ArrowButton>

      {/* Container que sofre a rolagem */}
      <ScrollContainer ref={carouselRef}>
        {newsList.map(news => (
          <div className='carousel-item' key={news.linkArticle}>
            <NewsCard {...news} />
          </div>
        ))}
      </ScrollContainer>

      {/* Seta para a direita */}
      <ArrowButton className='right-arrow' onClick={() => scroll('right')}>
        &#8250;
      </ArrowButton>
    </CarouselWrapper>
  )
}

export default NewsCarousel
