import express, { Application, Request, Response } from 'express';
import productRouter from './routes/product'

const app: Application = express();
app.use(express.json())
app.use('/api/v1', productRouter);

app.get('/', (_req: Request, res: Response) => {
    res.send("Hola mundoooooooooooooooo")
})

export default app;