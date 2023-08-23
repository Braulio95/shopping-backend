import express from 'express'
import productRouter from './routes/product'

const app = express()
app.use(express.json())
const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('hola')
    res.send('hola mundo')
})

app.use('/api/products', productRouter)

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`)
})