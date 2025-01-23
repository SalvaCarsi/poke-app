import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPokemon } from '@/app/infra/client'
import { PokemonDetailInterface } from '@/app/infra/client'

import './PokemonDetail.css'

const PokemonDetail = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<PokemonDetailInterface>()

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetchPokemon(id)

      setPokemon(response)
    }

    getPokemon()
  }, [id])

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
          Form id: {pokemon.formId} | Is battle only: {pokemon.isBattleOnly.toString()}
        </h4>
      </div>
      <div>
        <h4>Moves</h4>
        {pokemon.moves.join(', ')}
      </div>
    </div>
  )
}

export { PokemonDetail }
