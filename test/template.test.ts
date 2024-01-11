import { assert, test} from 'vitest'
import { load_template, load_page } from '../src/template'

test('should load and return template', () => {
	const output = load_template("test.html")
	assert.notEqual(output, "")
	assert.notEqual(output, undefined)
})

test('should load and return page', () => {
	const output = load_page("test.html", {})
	assert.notEqual(output, "")
	assert.notEqual(output, undefined)
})
