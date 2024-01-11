import fs from 'node:fs'
import ejs from 'ejs'

export function load_template(template_path: string): string {
	try {
		return fs.readFileSync("src/templates/" + template_path, 'utf8')
	} catch(err) {
		return ""
	}
}

export function load_page(template_path: string, values: object): string {
	var output = ""
	output += load_template("partials/header.html")
	output += load_template(template_path)
	output += load_template("partials/footer.html")

	return ejs.render(output, values)
}
