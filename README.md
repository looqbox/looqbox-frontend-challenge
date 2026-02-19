# Pokédex SPA - Looqbox Challenge

A Single Page Application built with React to search and browse Pokémon using the [PokeAPI](https://pokeapi.co/docs/v2).

## Stack

- React
- TypeScript
- Redux Toolkit
- React Router
- Ant Design
- Ant Design Charts
- Vitest (unit testing)

## Features

### Main requirements

- Home page includes:
  - name search (`Enter` key or `Start` button)
  - preloaded Pokémon list
- Clicking a Pokémon opens the details page
- SPA routing without page reload:
  - `/` (Home)
  - `/pokemon/:name` (Details)
  - `*` (NotFound)

### Bonus features implemented

- Mobile version available (responsive layout)
- Pagination on the main list
- Pagination on type-filtered results
- Friendly error handling for name search
- Linting with ESLint
- Stats chart in details page (`Pie`)
- Unit tests for slice and thunks
- UI built with Ant Design

## Project structure (summary)

```txt
src/
  pages/
    Home/
      components/
        searchPokemon/
        pokeList/
    PokemonDetails/
  store/
    pokemon/
      slice.ts
      selectors.ts
      thunks.ts
      types.ts
```

## Application flow

- **Home**
  - name search via Redux thunk `searchPokemonByName`
  - type filter via `fetchPokemonByType`
  - pagination using `page`, `pageSize`, and `total`
- **Details**
  - loads Pokémon based on route (`/pokemon/:name`)
  - displays official artwork, types, sprites, and status chart

## Scripts

```bash
# development
npm run dev

# production build
npm run build

# preview build
npm run preview

# lint
npm run lint

# unit tests
npm test
npm run test:watch
npm run test:coverage
```

## Running locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the URL shown in terminal (usually `http://localhost:5173`).

## Unit tests

Main test files:

- `src/store/pokemon/slice.test.ts`
- `src/store/pokemon/thunks.test.ts`

They cover reducers, async actions, error handling, and payload mapping.

## Notes

- Name search handles PokeAPI `404` with a friendly message: `Pokémon not found`.
- Images use a fallback to avoid broken sprites when some URLs fail.
