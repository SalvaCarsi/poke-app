import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchPokemon } from '@/app/infra/client'

const PokemonDetail = () => {
  const { id } = useParams()
  useEffect(() => {
    const foo = async () => {
      const response = await fetchPokemon(id)
      console.log(response)
    }

    foo()
  }, [])

  return `holi id ${id}`
}

export { PokemonDetail }
