import {IncomingMessage, ServerResponse, createServer} from 'http'
import { load_page } from './template'
import {parse} from 'querystring'

function get_request_data(req: IncomingMessage, callback: Function): void {
	// doing this because they said just relying on data
	// may end up losing some more data
	let body: Buffer[] = []
	req.on('data', chunk => {
		body.push(chunk)
	}).on('end', () => {
		var data = Buffer.concat(body)
		var parsed_data = parse(data.toString())
		callback(parsed_data)
	})
}

function home_page(req: IncomingMessage, res: ServerResponse): void {
	res.writeHead(200, { 'Content-Type': 'text/html'})
	res.write(load_page("index.html", {username: "berkay"}))
	res.end()
}

function login_view(req: IncomingMessage, res: ServerResponse): void {
	res.writeHead(200, { 'Content-Type': 'text/html'})
	res.write(load_page("login.html", {email: "", errors: []}))
	res.end()
}

interface LoginRequest {
	email: string
	password: string
}

interface LoginValidation {
	email: string | null
	password: string | null
}

function login_request(req: IncomingMessage, res: ServerResponse): void {
	get_request_data(req, (data: LoginRequest) => {
		let validated = true
		let validation_errors: LoginValidation = {email: null, password: null}
		if (data.email == "") {
			validation_errors.email = 'E-mail field is required'
			validated = false
		}
		if (data.password == "") {
			validation_errors.password = 'Password field is required'
			validated = false
		}

		if (validated == false) {
			res.writeHead(400, { 'Content-Type': 'text/html'})
			res.write(load_page("login.html", {email: data.email, errors: validation_errors}))
			res.end()
			return
		}

		res.writeHead(301, {
			location: '/'
		}).end()
	})
}

function four_o_four(req: IncomingMessage, res: ServerResponse) {
	res.statusCode = 404
	res.end()
}

export function init_server(host: string, port: number): void {
	const server = createServer(function (req: IncomingMessage, res: ServerResponse) {
		if (req.url == '/' && req.method == "GET") home_page(req, res)
		else if (req.url == '/login' && req.method == "GET") login_view(req, res)
		else if (req.url == '/login' && req.method == "POST") login_request(req, res)
		else four_o_four(req, res)
	})
	server.listen(port, host, () => {
		console.log(`Mini is running on http://${host}:${port}`)
	})
}
