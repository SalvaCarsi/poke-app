import { useEffect, useState } from 'react'
import { fetchAllPokemons, Pokemon } from '@/app/infra/client'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    const getAllPokemons = async () => {
      const response = await fetchAllPokemons()

      setPokemons(response)
    }

    getAllPokemons()
  }, [])

  return (
    <div>
      {pokemons.map((pokemon: Pokemon) => {
        return (
          <div>
            <span>{pokemon.name}</span>
            <span>{pokemon.url}</span>
          </div>
        )
      })}
    </div>
  )
}

export { PokemonList }
