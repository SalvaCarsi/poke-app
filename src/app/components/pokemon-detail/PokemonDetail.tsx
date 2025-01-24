import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPokemon } from '@/app/infra/client'
import { PokemonDetailInterface, Move } from '@/app/infra/client'

import './PokemonDetail.css'

const PokemonDetail = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<PokemonDetailInterface>()
  const [pokemonMoves, setPokemonMoves] = useState<string[]>([])

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetchPokemon(id)

      setPokemon(response)
      setPokemonMoves(response.moves.map((move: Move) => move.name))
    }

    getPokemon()
  }, [id])

  const removePokemonMoves = () => {
    setPokemonMoves((pokemonMoves) => {
      const clonedPokemonMoves = structuredClone(pokemonMoves)
      clonedPokemonMoves.shift()
      return clonedPokemonMoves
    })
  }

  if (!pokemon) return

  return (
    <div className="pokemon-detail__wrapper">
      <div>
        <h2 className="pokemon-detail__name">
          Name: {pokemon.name.toUpperCase()}
        </h2>
        <img src={pokemon.sprites} />
        <h4>Abilities: {pokemon.abilities.join(', ')}</h4>
        <h4>
          Form id: {pokemon.formId} | Is battle only:{' '}
          {pokemon.isBattleOnly.toString()}
        </h4>
      </div>
      <div>
        <div className="pokemon-detail__delete-move-button">
          <h4>Moves</h4>
          <button onClick={removePokemonMoves}>Delete a move</button>
        </div>
        <div>{pokemonMoves}</div>
        <br />
      </div>
    </div>
  )
}

export { PokemonDetail }
