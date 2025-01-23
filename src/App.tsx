import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PokemonList } from '@/pages/pokemon-list'
import { PokemonDetail } from '@/pages/pokemon-detail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/detail/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
