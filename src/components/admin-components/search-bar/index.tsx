import React from 'react'

import { Container } from './style'

import btnSearch from '@assets/icons/general/btn-search.svg'

interface SearchBarProps {
  onSearch: (searchText: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [text, setText] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(text.trim())
  }

  const handleClear = () => {
    setText('')
    onSearch('')
  }

  return (
    <Container>
      <form className='search-bar' onSubmit={handleSubmit}>
        <input
          className='input-search'
          type='text'
          placeholder='Pesquisar evento'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        {text.trim() !== '' && (
          <button
            type='button'
            className='clear-btn'
            onClick={handleClear}
            aria-label='Limpar busca'
          >
            x
          </button>
        )}
        <button className='search-btn' type='submit'>
          <img src={btnSearch} alt='botão de busca de eventos' />
        </button>
      </form>
    </Container>
  )
}

export default SearchBar
