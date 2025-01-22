import { useState } from 'react'
import { Pokemon } from '@/app/infra/client'
import { debounce } from '@/utils'
import { PokemonListResults } from '@/app/components/pokemon-list-results'
import { usePokemons } from './usePokemons'

import './PokemonList.css'

const PokemonList = () => {
  const [searchResults, setSearchResults] = useState<Pokemon[]>([])
  const { pokemons } = usePokemons(setSearchResults)

  const performSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value
    const result = pokemons.filter((pokemon: Pokemon) => {
      return pokemon.name.includes(searchText)
    })

    setSearchResults(result)
  }

  return (
    <div className="pokemon-list__wrapper">
      <div className="pokemon-list__header">
        <h3>Lista de Pokemons</h3>
        <div className="pokemon-list__search">
          <label htmlFor="search-input">buscar:</label>
          <input id="search-input" onChange={debounce(performSearch, 400)} />
        </div>
      </div>
      <PokemonListResults searchResults={searchResults} />
    </div>
  )
}

export { PokemonList }
