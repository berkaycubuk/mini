# Mini (Work in progress)
Mini is a web based e-course publishing program. With Mini you can sell your video courses without relying on third-party course sharing platforms.

## Technology
I needed a course publishing program but do not require more javascript in my life. I used Node.js and Typescript for this project just to show that I'm capable of using it and it's not the optimal solution for the problem. Whatever :^)

- Node.js & Typescript
- SQLite
- Ejs for html templates
- Vitest for testing (I tried to use built-in node:test but using it with Typescript is not smooth)
- CSS for styling
- HTMX if UI related magic needed (But u need to use React, it how web works T-T. NO!)

## How to use it
It's not production ready (yet) so first install required packages (I respect our resourceful computers so this project is using minimal packages possible) with `npm i`. Build it with `npm run build` then start it with `npm run start`. That's it.

## Testing
Mini uses Vitest for testing. You can run all the test with `npm run test` command. All the tests are available under `test` folder.

## Contributing
You're free to contribute to the project, but there is no guideline available (yet). So Berkay may not accept your PR :^)
