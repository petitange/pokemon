import type { Pokemon } from '../../types'
import CardPokemon from '../CardPokemon/CardPokemon'

type Props = {
  pokemons: Pokemon[]
}

const List = ({ pokemons }: Props) => {
  
  return (
    <>
    <h1>Pokemon List</h1>
    <div className='p-2'>
      {pokemons.map(pokemon => (
            <CardPokemon  pokemon={pokemon} key={pokemon._id} />
          ))}
    </div>
    
    </>
  )
}

export default List
