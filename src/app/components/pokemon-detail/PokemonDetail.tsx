import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchPokemon } from '@/app/infra/client'

const PokemonDetail = () => {
  const { id } = useParams()

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetchPokemon(id)
      console.log(response)
    }

    getPokemon()
  }, [id])

  return `holi id ${id}`
}

export { PokemonDetail }
