import { assert, test} from 'vitest'
import '../src/main'

test('home page should load', async () => {
	const response = await fetch("http://localhost:4000")
	assert.equal(response.status, 200)
})
