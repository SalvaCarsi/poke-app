import {useEffect, useState} from "react"
import { fetchAllPokemons, Pokemon } from '@/app/infra/client'

const usePokemons = (setSearchResults: React.Dispatch<React.SetStateAction<Pokemon[]>>) => {
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
      setSearchResults(sortedPokemons)
    }

    getAllPokemons()
  }, [])

  return {pokemons}
}

export { usePokemons }
