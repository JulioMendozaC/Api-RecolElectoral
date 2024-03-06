
import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { connectDB } from './db.js'
import authRoutes from './routes/auth.routes.js'
import dataRoutes from './routes/data.routes.js'
import promotorRoutes from './routes/promotor.routes.js'
import coordinadorRoutes from './routes/coordinador.routes.js'
import seccionRoutes from './routes/seccion.routes.js'

import 'dotenv/config'
const app = express()

connectDB()

app.use(cors({
    origin: process.env.URL_FORNT,
    credentials: true

}));
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());


app.use('/api', authRoutes)
app.use('/api', dataRoutes)
app.use('/api', promotorRoutes)
app.use('/api', coordinadorRoutes)
app.use('/api', seccionRoutes)

export default app