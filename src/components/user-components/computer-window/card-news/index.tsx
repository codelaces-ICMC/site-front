import React from 'react'
import CardNewsProps from 'components/user-components/props/props-card-news'
import { Container } from './style'

const NewsCard: React.FC<CardNewsProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  author,
  date,
  readTimeInMinutes,
  linkArticle,
}) => {
  return (
    <Container>
      <a className='card-news' href={linkArticle}>
        <div className='div-img-news'>
          <img src={imageUrl} alt={imageAlt} className='img-news' />
        </div>
        <div className='div-content-news'>
          <h2 className='title-news'>{title}</h2>
          <p className='description-news'>{description}</p>
          <div className='div-other-infos-news'>
            <span>{author}</span>
            <span className='separator'> • </span>
            <span>{date}</span>
            <span className='separator'> • </span>
            <span>{`${readTimeInMinutes} min`}</span>
          </div>
        </div>
      </a>
    </Container>
  )
}

export default NewsCard
