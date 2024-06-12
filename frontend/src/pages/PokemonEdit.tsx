import FormPokemon from "../components/FormPokemon/FormPokemon"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from'react-bootstrap/Container'
import { retrivePokemonById } from '../services'

export default function PokemonEdit() {
  const params = useParams()
  const [pokemon, setPokemon] = useState<any>({})

  useEffect(() => {
    const getPokemon = async () => {
      const { id } = params
      if(!id) throw new Error
      const response = await retrivePokemonById(id)
      //TODO: error handling
      console.log(response)
      setPokemon(response)
    }
    getPokemon()
  }, [])

  return (
    <Container className="mt-3">
      <h2>Edit Pokemon</h2>
      <FormPokemon pokemon={pokemon} />
    </Container>
  )
}
