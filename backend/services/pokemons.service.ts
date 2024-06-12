
import { PokemonModel } from '../models';
import { PokemonRequest } from '../types';

export const getAllPokemons = async () => {
  // find each person with a last name matching 'Ghost'
  const query = PokemonModel.find()

  // execute the query at a later time
  const pokemon = await query.exec();

  return pokemon
}

export const savePokemon = async(request:PokemonRequest)  => {
  const pokemon = new PokemonModel(request)
  const createPokemon = await pokemon.save()
  console.log({createPokemon})
}

export const updatePokemon = async(pokemonId:any, request:PokemonRequest)  => {
  const id = pokemonId

  const updatePokemon = await PokemonModel.findByIdAndUpdate(id, { $set: request})
  console.log({updatePokemon})
}

export const getPokemonById = async(pokemonId:any)  => {
  const id = pokemonId

  const query = PokemonModel.findById(id)
  const pokemon = await query.exec();
  return pokemon
}

export const deletePokemon = async(pokemonId:string)  => {
  const id = pokemonId

  const query = PokemonModel.deleteOne({_id: pokemonId})
  const pokemon = await query.exec();
  return pokemon
}