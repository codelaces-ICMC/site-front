import React from 'react'
import SearchIcon from '@assets/icons/general/btn-search.svg'
import { Container, SearchInput } from './style'

interface SearchBarProps {
  onSearch?: (term: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = React.useState('')

  const handleSearch = () => {
    if (!onSearch) return
    onSearch(value.trim())
  }

  return (
    <Container>
      <SearchInput
        type='text'
        placeholder='Digite o evento que procura...'
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
          }
        }}
      />
      <button aria-label='Pesquisar' onClick={handleSearch}>
        <img src={SearchIcon} />
      </button>
    </Container>
  )
}

export default SearchBar
