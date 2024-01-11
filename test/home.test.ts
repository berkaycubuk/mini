import { assert, test} from 'vitest'
import '../src/main'

test('home page should render', async () => {
	const response = await fetch("http://localhost:4000")
	const response_text = await response.text()
	assert.equal(response_text, "hello!")
})
