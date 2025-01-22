import { Pokemon } from '@/app/infra/client'

interface PokemonListResultsProps {
  searchResults: Pokemon[]
}

const PokemonListResults = ({ searchResults }: PokemonListResultsProps) => {
  if (searchResults.length === 0) return null

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
              <td className="table-cell__pokemon-name">{pokemon.name}</td>
              <td className="table-cell__pokemon-url">{pokemon.url}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { PokemonListResults }
