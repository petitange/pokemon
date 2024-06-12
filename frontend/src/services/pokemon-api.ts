export const retriveAllPokemons = async() => {
  const response = await fetch('http://localhost:4000/pokemons')
  const data = await response.json()

  return data
}

export const deletePokemon = async(id:string) => { 
  const response = fetch('http://localhost:4000/pokemons/' + id, {
      method: 'DELETE'
    })

  const data = await response

  return data
}

export const retrivePokemonById = async(id:string) => { 
  const response = await fetch('http://localhost:4000/pokemons/' + id)
  const data = await response.json()

  return data
}

export const createPokemon = async(pokemon:any) => { 
  const response = await fetch('http://localhost:4000/pokemons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
      })
  const data = await response

  return data
}

export const updatePokemon = async(id:string, pokemon:any) => { 
  const response = await fetch('http://localhost:4000/pokemons/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
      })
  const data = await response

  return data
}