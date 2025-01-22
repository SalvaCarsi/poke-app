import { useEffect } from 'react'

interface Pokemon {
  name: string
  url: string
}

const fetchPokemons: () => Promise<Pokemon[]> = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

  const response = await fetch(url)
  const data = await response.json()

  return data.results
}

const PokemonList = () => {
  const foo = async () => {
    const response = await fetchPokemons()
    console.log('>>>>>>>>>>>>>', response)
  }

  useEffect(() => {
    foo()
  })
  return <div>Here goes the list</div>
}

export { PokemonList }
