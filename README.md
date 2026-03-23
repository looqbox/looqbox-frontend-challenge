# ⚡ Pokédex SPA

A modern, fully-featured Single Page Application for browsing and searching Pokémon, built with React + TypeScript and powered by [PokéAPI](https://pokeapi.co).

---

##  Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/username/pokedex-spa.git
cd pokedex-spa

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.tsx
│   ├── PokemonCard.tsx
│   ├── SearchBar.tsx
│   ├── TypeBadge.tsx
│   ├── StatBar.tsx
│   ├── StatsChart.tsx
│   └── ErrorMessage.tsx
├── pages/             # Route-level pages
│   ├── Home.tsx
│   ├── Details.tsx
│   ├── About.tsx
│   └── NotFound.tsx
├── hooks/             # Custom React hooks
│   └── usePokemon.ts
├── services/          # API layer
│   └── pokemonService.ts
├── types/             # TypeScript interfaces
│   └── index.ts
├── utils/             # Utility functions + constants
│   └── index.ts
```
---

##  Routes

| Route            | Description                              |
| ---------------- | ---------------------------------------- |
| `/`              | Redirects to `/home`                     |
| `/home`          | Main list with search bar and pagination |
| `/details/:name` | Detailed Pokémon page                    |
| `/about`         | Project info and tech stack              |
| `*`              | 404 Not Found                            |

---

##  Features

### Core Requirements
- ✅ **SPA** — No page reloads, all navigation handled client-side via React Router v6
- ✅ **Search bar** — Type and press Enter to search by name
- ✅ **Preloaded list** — 20 Pokémon loaded on the home page
- ✅ **Pokémon detail card** — Click any card to navigate to `/details/:name`
- ✅ **Multiple routes** — `/home`, `/details/:name`, `/about`

### Bonus Features
- ✅ **Pagination** — Browse all Pokémons across pages
- ✅ **Error handling** — User-friendly error messages for failed fetches and invalid searches
- ✅ **Documentation** — This README
- ✅ **Linting** — ESLint with TypeScript + React Hooks rules
- ✅ **Charts** — Radar chart (Recharts) and stat bars on the detail page
- ✅ **Ant Design** — Ant Design 5 used throughout the UI

---

##  Linting

```bash
# Check for lint errors
npm run lint

# Auto-fix fixable errors
npm run lint:fix
```

---

##  Build for Production

```bash
npm run build
```

Outputs optimized files to the `build/` directory.

---

##  API

This app uses [PokéAPI](https://pokeapi.co) — a free, open RESTful Pokémon API.

Key endpoints used:
- `GET /pokemon?limit=20&offset=0` — paginated list
- `GET /pokemon/{name}` — Pokémon details
- `GET /pokemon-species/{id}` — Species info (description, legendary status)
