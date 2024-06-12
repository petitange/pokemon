import mongoose from "mongoose";
 
const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  skills: {
    type: Array
  },
  image: {
    type: String,
  }
});
 
const PokemonModel = mongoose.model("pokemons", PokemonSchema);


export {PokemonModel};