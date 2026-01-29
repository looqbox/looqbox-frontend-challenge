# LooqDex

LooqDex is a Single Page Application built for the **Looqbox Frontend Challenge**.

It allows users to search, browse and explore Pokémon data using the public **PokeAPI**, focusing on performance, usability and clean architecture — without page reloads.

---

### Tech Stack

- **React**
- **TypeScript**
- **Redux Toolkit**
- **React Router**
- **Ant Design**
- **Axios**
- **Vitest + Testing Library**
- **ESLint + Prettier**

---

### Challenge Requirements

This project fulfills all required items from the challenge:

- Main page with a search bar and a preloaded Pokémon list
- Search behavior: typing and pressing **Enter** replaces the list with results
- Pokémon details view (SPA, no reloads)
- Multiple routes using React Router
- README documentation

---

### Bonus Points Covered

- Pagination
- Error handling
- Documentation
- Linting
- Charts (stats visualization)
- Unit testing
- Ant Design

---

### Features

- **Home page** with featured Pokémon list
- **Search by name** (case-insensitive, partial match)
  - Press **Enter** to search and replace the default list with results
  - Clear search to return to the default list
- **Pokémon list page** with:
  - Search
  - Pagination
  - URL query params support (`q` and `page`)
- **Pokémon details page** with:
  - Description, height, weight, abilities and types
  - Base stats visualization
  - Evolution chain navigation
- **Image fallback strategy**
  - Tries `artwork`, falls back to `sprite`, then placeholder
- **Responsive layout**
  - Works down to **280px** width

---

### Architecture Overview

- **Redux Toolkit** manages shared state and caching (index, details, species and evolution).
- The Pokémon **index is fetched once** and reused for searching and pagination, minimizing network requests.
- Search and pagination logic are encapsulated in **custom hooks**, enabling reuse between pages.
- Details page is structured with small, reusable components to keep the view layer clean.
- URL query parameters keep search and pagination state navigable and shareable.

---

### Performance Notes

- Cached index enables local search (reduced API calls).
- Lazy loading for non-critical images and fixed image dimensions to avoid layout shift.
- Production build is code-split by route to reduce initial bundle cost.

---

### Tests

Unit tests were implemented using **Vitest** and **Testing Library**, focusing on:

- Utility functions
- Custom hooks
- Reusable UI components

Tests validate behavior and edge cases rather than implementation details.


## Getting Started
### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run tests

```bash
npm run test
```

### Run tests (CI mode)

```bash
npm run test:run
```

### Coverage

```bash
npm run test:coverage
```
