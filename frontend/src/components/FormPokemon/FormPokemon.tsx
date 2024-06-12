import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TagsInput from '../TagInput/TagInput';
import { Pokemon } from '../../types';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { updatePokemon, createPokemon } from '../../services';
type Props = {
  pokemon?: Pokemon;
}

function FormPokemon({pokemon}:Props) {
  const navigate = useNavigate()
  const params = useParams()
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    type: "",
    skills: []
  });

  useEffect(() => {
    const { name, image, type, skills } = pokemon || {};
    console.log({pokemon})
    setFormData((prevFormData:any) => ({
      ...prevFormData,
       name, image, type, skills 
    }))
  }, [pokemon])

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    console.log({formData})
    console.log({ name, value })
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTags = (arrayTags:any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: arrayTags,
    }));
  }

  const sendData = async (e:any) => {
    e.preventDefault()
    const {id} = params
    if(id) {
      const response = await updatePokemon(id, formData)
      //TODO: error handling
      console.log(response)
    } else {
      const response = await createPokemon(formData)
      //TODO: error handling
      console.log(response)
    }     

    navigate('/')
  }

  return (
    <Form onSubmit={sendData}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleInputChange} type="text" name="name" placeholder="Name" value={ formData.name } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formUrlImage">
        <Form.Label>Url image</Form.Label>
        <Form.Control onChange={handleInputChange} type="text" name="image" placeholder="Url Image" value={formData.image} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Type</Form.Label>
        <Form.Control onChange={handleInputChange} type="text" name="type" placeholder="Type" value={formData.type} />
      </Form.Group>
      {
        formData.skills && formData.skills.length > 0 ? <TagsInput tagStrings={formData.skills} handleTags={handleTags} /> : <TagsInput tagStrings={[]} handleTags={handleTags}/> 
      }
      <Button  className='mt-2' variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
  );
}

export default FormPokemon;