import { useEffect, useState } from 'react'
import { fetchPokemon } from '@/app/infra/client'
import { PokemonDetailInterface, Move } from '@/app/infra/client'
import { useParams } from 'react-router-dom'

type setPokemonMovesType = React.Dispatch<React.SetStateAction<string[]>>

const usePokemon = (setPokemonMoves: setPokemonMovesType) => {
  const { id } = useParams()
    const [pokemon, setPokemon] = useState<PokemonDetailInterface>()

      useEffect(() => {
        const getPokemon = async () => {
        const response = await fetchPokemon(id)

        const moves = response.moves
        const sortedMoves = moves.sort((moveA: Move, moveB: Move) => {
          const moveASplitUrl = moveA.url.split('/')
          const moveBSplitUrl = moveB.url.split('/')
          return moveASplitUrl[6] > moveBSplitUrl[6]
        })

        setPokemon(response)
        setPokemonMoves(sortedMoves.map((move: Move) => move.name))
      }

    getPokemon()
  }, [id])

  return {pokemon}
}

export { usePokemon }
