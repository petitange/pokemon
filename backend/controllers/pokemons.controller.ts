import { Request, Response } from 'express'

import { getAllPokemons, savePokemon, getPokemonById, updatePokemon, deletePokemon } from '../services/pokemons.service'

export const allPokemons = async (req: Request, res: Response) => {
  try {
    const result = await getAllPokemons()
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: 'Something went wrong' })
  }
}

export const createPokemon = async (req: Request, res: Response) => {
  try {
    const result = await savePokemon(req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const pokemonById = async (req: Request, res: Response) => {
  try {
    const result = await getPokemonById(req.params.id)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const result = await updatePokemon(req.params.id, req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}

export const removePokemon = async (req: Request, res: Response) => {
  try {
    const result = await deletePokemon(req.params.id)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}