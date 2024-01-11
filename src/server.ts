import {IncomingMessage, ServerResponse, createServer} from 'http'
import { load_page } from './template'

function home_page(req: IncomingMessage, res: ServerResponse): void {
	res.writeHead(200, { 'Content-Type': 'text/html'})
	res.write(load_page("index.html", {username: "berkay"}))
	res.end()
}

function login_page(req: IncomingMessage, res: ServerResponse): void {
	res.writeHead(200, { 'Content-Type': 'text/html'})
	res.write(load_page("login.html", {username: "berkay"}))
	res.end()
}

export function init_server(host: string, port: number): void {
	const server = createServer(function (req: IncomingMessage, res: ServerResponse) {
		if (req.url == '/' && req.method == "GET") home_page(req, res)
		else if (req.url == '/login' && req.method == "GET") login_page(req, res)
	})
	server.listen(port, host, () => {
		console.log(`Mini is running on http://${host}:${port}`)
	})
}
