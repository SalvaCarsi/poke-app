export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetailInterface {
  name: string
  sprites: string
  abilities: string[]
  moves: Move[]
  formId: number
  isBattleOnly: boolean
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

export interface Move {
  name: string
  url: string
}

export const fetchAllPokemons: () => Promise<Pokemon[]> = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

  const response = await fetch(url)
  const data = await response.json()

  return data.results
}

export const fetchPokemon: (
  id: string,
) => Promise<PokemonDetailInterface> = async (id: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const response = await fetch(url)
  const detail = await response.json()

  const formsUrl = detail.forms[0].url
  const formsResponse = await fetch(formsUrl)
  const formsDetail = await formsResponse.json()

  return {
    name: detail.name,
    sprites: detail.sprites.back_default,
    abilities: detail.abilities.map((record: AbilityRecord) => {
      return record.ability.name
    }),
    moves: detail.moves.map((record: MoveRecord) => {
      return {name: record.move.name, url: record.move.url}
    }),
    formId: formsDetail.id,
    isBattleOnly: formsDetail.is_battle_only
  }
}
