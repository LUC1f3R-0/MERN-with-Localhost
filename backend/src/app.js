import express from 'express'
import rootRoutes from './routes/root.routes.js'
import cors from 'cors'
export const app = express()

const host = process.env.FRONTEND_HOST
const port = process.env.FRONTEND_PORT

app.use(express.json())
app.use(cors({ origin: `http://${host}:${port}`, credentials: true, }));
app.use('/', rootRoutes)