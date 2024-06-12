import express from 'express'
import { allPokemons, createPokemon, pokemonById, update, removePokemon } from '../controllers/pokemons.controller'

const router = express.Router()

router.get('/', allPokemons)
router.get('/:id', pokemonById)
router.post('/', createPokemon)
router.put('/:id', update)
router.delete('/:id', removePokemon)

export default router
