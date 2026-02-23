import React from 'react'
import { Container, SearchInput } from './style'
import SearchIcon from '../../../assets/icons/general/btn-search.svg'

const SearchBar: React.FC = () => {
  return (
    <Container>
      <SearchInput type='text' placeholder='Digite o evento que procura...' />
      <button aria-label='Pesquisar'>
        <img src={SearchIcon} />
      </button>
    </Container>
  )
}

export default SearchBar
