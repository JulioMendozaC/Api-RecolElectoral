
import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { connectDB } from './db.js'
import authRoutes from './routes/auth.routes.js'
import dataRoutes from './routes/data.routes.js'

import 'dotenv/config'
const app = express()

connectDB()

app.use(cors({
    // origin: process.env.URL_FORNT,
    credentials: true,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }

}));
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());


app.use('/api', authRoutes)
app.use('/api', dataRoutes)

export default app