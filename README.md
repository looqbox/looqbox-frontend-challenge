# Pokédex

## Overview

- This project is a technical challenge for the Frontend Developer position.
- The main goal is to build a Pokemon search app that uses the PokeAPI to fetch Pokemon data and display display it. Full details are available in the `ASSIGNMENT.md` file.

## How to run this project

### Prerequisites
- Node.js >= 18
- pnpm

### Steps
```bash
pnpm install
pnpm dev
```

## Project structure

- `src/components/base`: Presentational components (Pure).
- `src/components/layout`: Layout components.
- `src/components/`: Logical components (Smart).
- `src/views`: Page components.
- `src/api`: API services.
- `src/index.css`: Global styles override.
- `src/utils`: Helper functions and constants.

## Requirements and bonus points attended:

Requirements:

- [x] On the main page, include a search bar and a preloaded list of Pokémon.
- [x] Clicking on any Pokémon should display a card, modal, or page with that Pokémon’s information.
- [x] Typing in the search bar and pressing Enter should display the search result instead of the list.
- [x] Your app must include at least two different routes (e.g., /home, /details — be creative!).
- [x] Add a README file to document your project.

Bonus points:

- [x] Pagination
- [x] Error handling
- [x] Documentation
- [x] Linting
- [x] Unit Testing
- [x] Ant Design
- [ ] Charts

## Technologies used

- React
- React Router
- Redux & RTK
- Ant Design
- TypeScript
- Vite
- ESLint
- Prettier
- Vitest

## Implementation

- **Organization by responsibility**: The project structure have a clear separation between concerns, making the codebase easier to maintain and extend:
    - _Logical Components_ (Smart): Handle state, and business logic (e.g., `PokeCardGrid`, `PokeDetails`).
    - _Presentational Components_ (Pure): Focused solely on rendering UI based on props (e.g. `UiTag`, `UiContainer`, `UiSearchBar`), ensuring a scalable and testable architecture `/src/components/base`.
    - _State Management_ (Redux & RTK): Manage application state and provide a global state management solution `/src/store`.
    - _API Services_ (Redux & RTK): Manage API calls and provide a global state management solution `/src/api`.

## What I would change if I had more time

- Show all available images in the pokemons details view
- Compare stats between pokemons with charts
- Improve the responsive design

## Design decisions

- Minimal dependencies: I preferred to use only the antd libraries to retain full control over layout behavior and styling.
- Component organization: I used a component organization strategy that separates concerns between logical and presentational components, making the codebase easier to maintain and extend.
- Inspiration: The visual identity was inspired by:

![Design inspiration](https://cdn.dribbble.com/userupload/30658222/file/original-8b4161c80979570ab0070a85bee765f7.gif)
