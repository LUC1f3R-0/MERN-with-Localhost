import 'dotenv/config'
import { app } from './src/app.js'

const host = process.env.BACKEND_PORT
const port = process.env.BACKEND_HOST

app.listen(port, host, () => { console.log(`server runs on http://${host}:${port}`) })

