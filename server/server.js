// ===== Imports =====
import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import indexRouter from './routes/index.js'

// ===== Config =====
const server = express()
const PORT = process.env.PORT || 3000

// ===== Middlewares =====
server.use(cors())
server.use(bodyParser.json())

// ===== Routes =====
server.use('/', indexRouter)

server.listen(PORT, () => {
    console.log(`Server is listening at PORT=${PORT}`)
})
