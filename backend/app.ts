import express from 'express'
import cors from 'cors'
import pokemonRouter from './routes/pokemon.route'
import connectDB from './db'

const app = express()
connectDB()
app.use(cors())
app.use(express.json())

app.use('/pokemons', pokemonRouter)

export default app
