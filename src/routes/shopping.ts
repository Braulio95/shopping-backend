import express from 'express'
import { getProducts } from '../services/shoppingServices';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getProducts())
})

router.post('/', (_req, res) => {
    res.send('Saving items')
})

export default router