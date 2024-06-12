import FormPokemon from "../components/FormPokemon/FormPokemon"
import Container from'react-bootstrap/Container'

export default function PokemonEdit() {
  return (
    <Container className="mt-3">
      <h2>Create Pokemon</h2>
      <FormPokemon />
    </Container>
  )
}
