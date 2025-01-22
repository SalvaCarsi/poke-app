import { useEffect, useState } from 'react'
import { fetchAllPokemons, Pokemon } from '@/app/infra/client'
import { debounce } from '@/utils'
import { PokemonListResults } from '@/app/components/pokemon-list/PokemonListResults'

import './PokemonList.css'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getAllPokemons = async () => {
      const response = await fetchAllPokemons()
      const sortedPokemons = response.sort(
        (pokemonA: Pokemon, pokemonB: Pokemon) => {
          return pokemonA.name.localeCompare(pokemonB.name, 'en')
        },
      )

      setPokemons(sortedPokemons)
      setSearchResults(sortedPokemons)
    }

    getAllPokemons()
  }, [])

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
