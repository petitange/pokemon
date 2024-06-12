import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Pokemon } from '../../types';
import BadgePokemon from '../BadgePokemon/BadgePokemon';
import { useNavigate } from 'react-router-dom';
import { deletePokemon } from '../../services';

type Props = {
  pokemon: Pokemon;
  key: string
}

function CardPokemon({ pokemon, key }: Props) {
  const navigate = useNavigate();
  
  const sendToEdit = () => {
    navigate('/edit-pokemon/'+ pokemon._id);
  }

  const removePokemon = async (e:any) => {
    e.preventDefault();
    const response = await deletePokemon(pokemon._id)
    //TODO: error handling
    console.log(response)
    window.location.reload(); 
  }

  const notFoundImage = 'https://demofree.sirv.com/nope-not-here.jpg'
  return (
    <Card key={key} style={{ width: '18rem', marginRight:'1rem' }}>
      <Card.Img className="p-4" variant="top" src={pokemon.image ? pokemon.image : notFoundImage } />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
            Tipo: {pokemon.type}
        </Card.Text>
        <BadgePokemon badges={pokemon.skills}/>
        <Button className='m-2' variant="primary" onClick={sendToEdit}>Edita pokemon</Button>
        <Button className='m-2' variant="danger" onClick={removePokemon}>Borrar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPokemon;