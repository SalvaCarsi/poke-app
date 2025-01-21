import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PokemonList } from '@/pages/pokemon-list'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
