import { init_server } from './server'
import 'dotenv/config'

const host: string = process.env.HOST ? process.env.HOST : "localhost"
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 4000

// start server
init_server(host, port)
