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
        <br />
        <img src={pokemon.sprites} />
        <br />
        <div>
          <h4>Abilities</h4>
          {pokemon.abilities.join(', ')}
        </div>
      </div>
      <div>
        <h4>Moves</h4>
        {pokemon.moves.join(', ')}
      </div>
    </div>
  )
}

export { PokemonDetail }
