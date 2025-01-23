import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const { id } = useParams()

  return `holi id ${id}`
}

export { PokemonDetail }
