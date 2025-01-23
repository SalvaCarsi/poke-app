import { Pokemon } from '@/app/infra/client'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '@/app/domain/pokemon'

import './PokemonListResults.css'

interface PokemonListResultsProps {
  searchResults: Pokemon[]
}

const PokemonListResults = ({ searchResults }: PokemonListResultsProps) => {
  if (searchResults.length === 0) return <div>no results found</div>

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((pokemon: Pokemon) => {
          const pokemonId = getIdFromUrl(pokemon.url)
          return (
            <tr key={pokemon.name}>
              <Link to={`/detail/${pokemonId}`}>
                <td className="pokemon-list-results__name">{pokemon.name}</td>

                <td className="pokemon-list-results__url">{pokemon.url}</td>
              </Link>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { PokemonListResults }
