import express from 'express'
import { MessageResponse } from '../common/reponses.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json(MessageResponse('Welcome to my server'))
})

export default router
