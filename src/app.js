
import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { connectDB } from './db.js'
import { noFound } from './middlewares/validator.middleware.js'

import authRoutes from './routes/auth.routes.js'
import dataRoutes from './routes/data.routes.js'
import promotorRoutes from './routes/promotor.routes.js'
import coordinadorRoutes from './routes/coordinador.routes.js'
import seccionRoutes from './routes/seccion.routes.js'
import filtrosRoutes from './routes/filtros.routes.js'

import 'dotenv/config'
const app = express()

connectDB()

app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());



app.use('/api', authRoutes)
app.use('/api', dataRoutes)
app.use('/api', promotorRoutes)
app.use('/api', coordinadorRoutes)
app.use('/api', seccionRoutes)
app.use('/api', filtrosRoutes)

app.use(noFound());
export default app