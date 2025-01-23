export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetail {
  name: string
  sprites: string
  abilities: string[]
  moves: string[]
  forms: string
}

interface AbilityRecord {
  ability: Ability
}

interface Ability {
  name: string
}

interface MoveRecord {
  move: Move
}

interface Move {
  name: string
}

export const fetchAllPokemons: () => Promise<Pokemon[]> = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

  const response = await fetch(url)
  const data = await response.json()

  return data.results
}

export const fetchPokemon = async (id: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const response = await fetch(url)
  const detail = await response.json()

  return {
    name: detail.name,
    sprites: detail.sprites.back_default,
    abilities: detail.abilities.map((record: AbilityRecord) => {
      return record.ability.name
    }),
    moves: detail.moves.map((record: MoveRecord) => {
      return record.move.name
    }),
  }
}
