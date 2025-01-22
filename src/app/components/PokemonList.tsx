import { useEffect, useState } from 'react'
import { fetchAllPokemons, Pokemon } from '@/app/infra/client'

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

  return (
    <div className="pokemon-list__wrapper">
      <div>
        <div className="pokemon-list__header">
          <h3>Lista de Pokemons</h3>
          <div className="pokemon-list__search">
            <label htmlFor="search-input">buscar:</label>
            <input
              id="search-input"
              onChange={(event) => {
                const searchText = event.target.value
                const result = pokemons.filter((pokemon: Pokemon) => {
                  return pokemon.name.includes(searchText)
                })

                setSearchResults(result)
              }}
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Url</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((pokemon: Pokemon) => {
              return (
                <tr>
                  <td>{pokemon.name}</td>
                  <td>{pokemon.url}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { PokemonList }
