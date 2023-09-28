// ===== Imports =====
import overwriteResponseJSON from './middlewares/overwriteResponseJSON.js'
import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import checkDate from './routes/checkDateTime.js'
import testPostmanRouter from './routes/testPostman.js'

// ===== Config =====
const server = express()
const PORT = process.env.PORT || 3000
server.use(bodyParser.urlencoded({extended: true}))
// server.use(overwriteResponseJSON)
// ===== Middlewares =====
server.use(cors())
server.use(bodyParser.json())

// ===== Routes =====

server.use('/checkDateTime', checkDate)
server.use('', testPostmanRouter)
server.listen(PORT, () => {
    console.log(`Server is listening at PORT=${PORT}`)
})
