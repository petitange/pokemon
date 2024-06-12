
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoPage from './components/NoPage/NoPage'
import PokemonEdit from './pages/PokemonEdit'
import PokemonList from './pages/PokemonList'
import PokemonCreate from './pages/PokemonCreate'
import NavigationBar from "./components/NavigationBar/NavigationBar"
function App() {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        
        <Route path="/" element={<PokemonList />} />
        <Route path="/edit-pokemon/:id" element={<PokemonEdit />} />
        <Route path="/create-pokemon" element={<PokemonCreate />} />
        <Route path="*" element={<NoPage />} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App
