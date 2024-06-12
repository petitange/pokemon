import type { Pokemon } from '../types'
import CardPokemon from '../components/CardPokemon/CardPokemon'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/esm/Container'
import { useEffect, useState } from 'react'
import { retriveAllPokemons } from '../services'

export default function ListPokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const getPokemons = async () => {
      const response = await retriveAllPokemons()
      setPokemons(response)
    }
    getPokemons()
  }, [])

  return (
    <Container>
    <div className='d-flex w-100 gap-5 mt-5'>
      <span className='float-left fs-1'>Pokemon List</span>
     <Link className='mt-3' to={'/create-pokemon'}>Create Pokemon</Link>
    </div>
    
    <div className='d-flex p-2'>
      {pokemons.map(pokemon => (
            <CardPokemon  pokemon={pokemon} key={pokemon._id} />
          ))}
    </div>
    
    </Container>
  )
}
