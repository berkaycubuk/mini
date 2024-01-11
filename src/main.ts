import {IncomingMessage, ServerResponse, createServer} from 'http'

const host: string = 'localhost'
const port: number = 4000

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
		res.writeHead(200)
		res.end("hello!")
}

const server = createServer(requestListener)
server.listen(port, host, () => {
		console.log(`Server is running on http://${host}:${port}`)
})
