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
- [x] Unit Testing
- [ ] Ant Design

## Running

### Dev

`pnpm i`, then `pnpm dev`.

### Prod

`pnpm build`

### Preview

`pnpm preview`

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
- pnpm

## About

This is the v2 release, developed after identifying the enhancement oportunities after tests conducted in v1.

**TailwindCSS** and **shadcn** were selected to speed up development, guarantee consistency and ease the development of high-quality interfaces. **shadcn** implements several solutions related to accessibility out-of-the-box, a bonus in several key metrics.

**React Query** (also known as **Tanstack Query**) was selected because the majority of the application state originates from the server. Beyond managing state, it's efficient in caching, memoization and deduplication, also offering several ways to easily deal with the request status. Integration with **Axios** offers a better error handling and further improves reliability of the results.

**Zod** offers schema validation, allowing stronger type checking than TypeScript em key aspects.

**React Hook Form** was selected for its ease of use and performance advantages during form handling.

**Vitest** offers a very significant performance impact in comparison to Jest, while maintaining a very similar API. Integrating with **Testing Library** offers a deeper layer of testing, while **user-event** allows triggering user events.

**pnpm** is a fast and stable package manager, reusing packages efficiently across several projects.

Ps.: During testing, it was identified that **GraphQL** would've been useful for typing and other functionalities, however it was not implemented due to time constraints.

## Folder Structure

```
└── 📁looqbox-frontend-challenge
    └── .env.local
    └── .eslintrc.cjs
    └── .gitignore
    └── .prettierrc
    └── 📁.vscode
        └── settings.json
    └── components.json
    └── index.html
    └── package.json
    └── pnpm-lock.yaml
    └── postcss.config.js
    └── 📁public
        └── vite.svg
    └── README.md
    └── 📁src
        └── 📁api
            └── getPokemon.ts
            └── searchPokemon.ts
        └── App.tsx
        └── 📁assets
            └── loader.svg
            └── missingno.gif
            └── pokeball.png
            └── react.svg
        └── 📁components
            └── heading.tsx
            └── 📁home
                └── pokemon-card.tsx
                └── pokemon-list.tsx
            └── 📁internal
                └── 📁pokemon-details
                    └── abilities.tsx
                    └── charts.tsx
                    └── description.tsx
                    └── index.tsx
                    └── moves.tsx
                    └── name.tsx
                    └── root.tsx
                    └── stats.tsx
                    └── types.tsx
            └── loader.tsx
            └── search.tsx
            └── 📁ui
                └── badge.tsx
                └── button.tsx
                └── card.tsx
                └── input.tsx
                └── sonner.tsx
        └── env.ts
        └── index.css
        └── 📁lib
            └── axios.ts
            └── react-query.ts
            └── utils.ts
        └── main.tsx
        └── 📁modules
            └── replaceDashWithWhiteSpace.ts
        └── 📁pages
            └── 404.tsx
            └── home.tsx
            └── 📁layouts
                └── base-layout.tsx
            └── pokemon.tsx
        └── routes.tsx
        └── 📁tests
            └── heading.spec.tsx
            └── pokemon-card.spec.tsx
            └── pokemon-details.spec.tsx
        └── vite-env.d.ts
    └── tailwind.config.js
    └── 📁test
        └── setup.ts
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```

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

**Lighthouse** was essential for development. Along with a anonymous window and **preview** mode supplied by **Vite**, it's easier to obtain reliable results, without external interference (extensions, for example).

- Key optimizations were made in several aspects, such as fixed height and width of each image to prevent **layout shifts**.

- CSS bundle size is impacted positively by tailwindCSS' reuse of utility classes across the entire project.

- The objective was to target a 90 score (minimum) in each metric. However, there may be random variance related to network or other causes.

- The Home displays 41 pokémon, as rendering the first 151 pokémon from Kanto affected Lighthouse's metrics.

- Another key aspect relates to modern image formats: .webp and .avif are not applicable, due to the server providing png image assets in real time.

## Patterns

Composition Patterns were used frequently, by shadcn and my application's custom components. The intent is slicing each part of a component and importing it in a modular manner, facilitating maintenance, improving code legibility and allowing reuse of code.

## Useful links

https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/

https://stackoverflow.com/questions/71275687/type-of-handlesubmit-parameter-in-react-hook-form

https://web.dev/articles/code-splitting-suspense?hl=pt-br

https://tkdodo.eu/blog/practical-react-query#treat-the-query-key-like-a-dependency-array

https://stackoverflow.com/questions/71967007/how-to-fetch-with-parameters-using-react-query

https://stackoverflow.com/questions/76081552/typeerror-cannot-destructure-property-basename-of-react-namespace-usecontex
