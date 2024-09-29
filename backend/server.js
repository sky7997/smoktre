import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
import { connectDb } from './config/dB.js'
import addressRouter from './routes/addressRoute.js'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000;

connectDb()

app.use('/api/user', userRouter)
app.use('/api/address', addressRouter)

app.get('/', (req, res) => {
    res.send("API is working")
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

