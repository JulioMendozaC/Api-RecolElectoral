import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { connectDB } from './db.js'
import authRoutes from './routes/auth.routes.js'
import dataRoutes from './routes/data.routes.js'
 
const app = express()

connectDB()

app.use(cors({
    origin: 'http://localhost:1420',
    credentials: true

}));
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());


app.use('/api', authRoutes)
app.use('/api', dataRoutes)

export default app