import { useEffect, useState } from 'react'
import { fetchAllPokemons, Pokemon } from '@/app/infra/client'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    const getAllPokemons = async () => {
      const response = await fetchAllPokemons()
      const sortedPokemons = response.sort(
        (pokemonA: Pokemon, pokemonB: Pokemon) => {
          return pokemonA.name.localeCompare(pokemonB.name, 'en')
        },
      )

      setPokemons(sortedPokemons)
    }

    getAllPokemons()
  }, [])

  return (
    <div className="pokemon-list__wrapper">
      <h3>Lista de Pokemons</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon: Pokemon) => {
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
  )
}

export { PokemonList }
