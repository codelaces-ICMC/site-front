import React, { FC, HTMLProps } from 'react'
import { Container } from './style'

interface DynamicTagProps extends HTMLProps<HTMLDivElement> {
  isTrue: boolean
  text: string
  link: string
}

const DynamicTag: FC<DynamicTagProps> = ({
  isTrue,
  text,
  link,
  ...restProps
}) => {
  const tagStyle = {
    background: isTrue
      ? 'var(--cor-roxo-escuro2)' // Altere as cores conforme necessário
      : 'var(--cor-branco', // Altere as cores conforme necessário
    color: isTrue ? 'var(--cor-branco)' : 'var(--cor-preto)',
  }

  return (
    <Container>
      <div className='dynamic-tag' style={tagStyle} {...restProps}>
        <a href={link}>{text}</a>
      </div>
    </Container>
  )
}

export default DynamicTag
