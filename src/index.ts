import express from 'express'
import shoppingRouter from './routes/shopping'

const app = express()
app.use(express.json())
const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('hola')
    res.send('hola mundo')
})

app.use('/api/shopping', shoppingRouter)

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`)
})