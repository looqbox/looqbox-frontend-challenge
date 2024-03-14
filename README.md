# National Pokédex

A web application meant to exhibit items returned from PokéAPI (https://pokeapi.co/docs/v2).

It's possible to navigate in pages offering info regarding each pokémon, and also search for specific pocket monsters.

## Minimum requirements

- [x] In the main page you need a search bar and a loaded list of pokemons (random or just hardcoded)
- [x] Clicking on any pokemon shows a card/modal/page with that pokemon's info
- [x] Searching and pressing enter on the search bar will show the result instead of the list
- [x] Your app needs at least two different routes (/home /more for example -> be creative!)

You can use any dependency you want, (axios, bootstrap, material ui...)

### Bonus points!

- [x] Documentation
- [x] Linting
- [x] Charts
- [ ] Unit Testing
- [ ] Ant Design

## Running

### Dev

`pnpm i`, then `pnpm dev`.

### Prod

`pnpm build`

### Testing

`pnpm test`

## Stack

- React
- TypeScript
- Vite
- ESLint/Prettier
- TailwindCSS
- shadcn
- Axios
- React Query
- Recharts
- Vitest/Testing Library

## About

This is the v2 release, developed after identifying the enhancement oportunities after tests conducted during the v1.

**TailwindCSS** and **shadcn** were selected with the aim of speeding up development, guarantee consistency and ease the development of high-quality interfaces. **shadcn** implements several solutions related to accessibility out-of-the-box, a bonus in several key metrics.

**React Query** (also known as **Tanstack Query**) was chosen due to how almost 100% of the state of the application comes from the servidor. Beyond managing state, it's also efficient on caching, memoization and deduplication, also offering several ways to easily deal with the request status. Integration with **Axios** offers a better error handling and further improves reliability of the results.

**Zod** offers schema validation, allowing a stronger type checking than TypeScript em key aspects.

**React Hook Form** was chosen, due to ease of use and performance gain during form handling.

**Vitest** offers a very significant performance impact in comparison to Jest, while maintaining a very similar API.

Ps.: **GraphQL**, even though it has beta support by the API and facilitates typing, was not implemented due to currently lacking experience with such.

## Folder Structure

### api

Stores reusable functions, always related to API requests.

### assets

General usage images and icons.

### components

Contains several components of the application.

- Has subfolders associated to each page or category: for example, "ui" stores components installed by shadcn.

- Componentes reused in all pages do not belong to any subdivision. If there were more than 3, a "miscellaneous" folder would be appropriate.

### lib

Has the configuration files for each library, as needed.

### pages

Stores the pages navigated by the user.

- The subfolder "layouts" contains a template reused by all pages.

### Others

env.ts: used for validation of environment variables.

test/setup.ts: folder meant to setup the integration between Vitest and Testing Library.

## Performance

**Lighthouse** was essential for development. Along with a anonymous window and **preview** mode supplied by **Vite**, it's easier to obtain a reliable results, without external interference (extensions, for example).

- Key optimizations were made in several aspects, such as fixed height and width of each image to prevent **layout shifts**.

- CSS bundle size is impacted positively by tailwindCSS' reuse of utility classes across the entire project.

- My objective: target a 90 score (minimum) in each metric, considering the possibilities of a random variance related to network or other causes.

- However, a compromise was needed: Home only shows 41 pokémon, since even rendering only the first 151 pokémon from Kanto affected Lighthouse's metrics significantly.

- Another key aspect relates to image formats: modern formats such as .webp and .avif are not applicable, due to the server serving png images assets in real time.

## Patterns

Composition Patterns was employed frequently, by shadcn and my own custom components. The intent is slicing each part of a component and importing it in a modular manner, facilitating maintance and improving code legibility, meanwhile allowing reuse of code.

## Useful links

https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/

https://stackoverflow.com/questions/71275687/type-of-handlesubmit-parameter-in-react-hook-form

https://web.dev/articles/code-splitting-suspense?hl=pt-br

https://tkdodo.eu/blog/practical-react-query#treat-the-query-key-like-a-dependency-array

https://stackoverflow.com/questions/71967007/how-to-fetch-with-parameters-using-react-query

https://stackoverflow.com/questions/76081552/typeerror-cannot-destructure-property-basename-of-react-namespace-usecontex
