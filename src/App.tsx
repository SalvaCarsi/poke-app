import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hola</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
