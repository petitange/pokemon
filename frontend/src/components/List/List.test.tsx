import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import List from './List'

const fewPokemons = [
  { _id: 'asdas', name: 'pikachu', type:'electrico', skills:[] },
  { _id: 'asdasd', name: 'bolbasour', type:'planta', skills:[] },
]

describe('List tests', () => {
  it('Should render the list', () => {
    render(<List pokemons={fewPokemons} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(fewPokemons.length)

    expect(screen.getByText(fewPokemons[0].name)).toBeInTheDocument()
  })
})
