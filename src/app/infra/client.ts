export interface Pokemon {
  name: string
  url: string
}

export const fetchAllPokemons: () => Promise<Pokemon[]> = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

  const response = await fetch(url)
  const data = await response.json()

  return data.results
}
