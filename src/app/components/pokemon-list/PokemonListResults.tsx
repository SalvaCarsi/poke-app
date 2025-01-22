import { Pokemon } from '@/app/infra/client'

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
          return (
            <tr key={pokemon.name}>
              <td className="pokemon-list-results__name">{pokemon.name}</td>
              <td className="pokemon-list-results__url">{pokemon.url}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { PokemonListResults }
