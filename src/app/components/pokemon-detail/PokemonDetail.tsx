import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPokemon } from '@/app/infra/client'

const PokemonDetail = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetchPokemon(id)

      setPokemon(response)
    }

    getPokemon()
  }, [id])

  if (!pokemon) return

  return (
    <div>
      <div>
        <h3>Name: {pokemon.name.toUpperCase()}</h3>
      </div>
      <br />
      <img src={pokemon.sprites} />
      <br />
      <div>
        <h2>Abilities</h2>
        {pokemon.abilities.join(', ')}
      </div>
      <br />
      <div>
        <h2>Moves</h2>
        {pokemon.moves.join(', ')}
      </div>
    </div>
  )
}

export { PokemonDetail }
