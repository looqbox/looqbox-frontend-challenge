# Pokeverse

Pokeverse is a **React + TypeScript** Single Page Application integrated with the [PokéAPI](https://pokeapi.co/).  
It allows users to browse Pokémon data with pagination, theming (light/dark/system), and styled UI using **TailwindCSS v4** and **Ant Design**.

This project was built as part of a **technical challenge** and demonstrates clean code, reusable logic, and modern frontend practices as container/presentational, render prop, DDD, Clean Code and SOLID. It's ready to scale and easy to maintain.

---

## 🚀 Features

- **Pokémon list with pagination** (offset-based pagination aligned with backend requirements).
- **Pokémon details page** fetched from PokéAPI.
- **Custom theme system**:
  - Light, Dark and System mode.
  - Persistence via `localStorage`.
- **Design system** integrated with Tailwind v4 and Ant Design.
- **Reusable hooks and utilities** (`useTheme`, `usePagination`, `localStorage utils`).
- **Unit and integration testing** with Vitest + React Testing Library.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: TailwindCSS v4, Ant Design
- **Data fetching**: React Query (@tanstack/react-query)
- **State management**: React Context API + custom hooks
- **Testing**: Vitest, React Testing Library, jsdom
- **Linting/Formatting**: ESLint, Prettier

---

## 📦 Project Setup

### 1. Clone the repository

```bash
git clone --branch feature/pokeverse --single-branch git@github.com:andreddavies/looqbox-frontend-challenge.git
cd pokeverse
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
```

---

## 🧪 Running Tests

We use **Vitest** with **React Testing Library**.

Run all tests:

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

Coverage report:

```bash
npm run coverage
```

## 📂 Project Structure

```
src/
├── core/
│   ├── constants/      # Application level shared constants (times, locales, etc.)
│   ├── contexts/       # Theme context, any other local context
│   ├── hooks/          # Custom hooks (useTheme, usePagination, etc.)
│   ├── queries/        # Application level shared queries hooks (use-query-core, etc.)
│   ├── types/          # Application level shared typed (pagination, etc.)
│   └── utils/          # LocalStorage helpers, shared utilities
│
├── design-system/
│   ├── config/         # Configuration for design-system (colors, spacing, etc.)
│   ├── icons/          # Component based icons
│   ├── layouts/        # Layout components wrapped with logic and rules
│   └── ui/             # Single or native components that doesn't require rules
│
├── features/
│   └── pokemon/        # Pokemon domain (components, queries, mappers, dtos, etc.)
│
├── infra/
│   ├── clients/        # Configuration for HTTP client
│   └── Intl/           # Configuration for internationalization
│
├── __tests__/          # Unit and integration tests
│
├── App.tsx             # App entry point
├── main.tsx            # Vite entry
└── index.css           # Tailwind + custom styles
```

---

## ⏱️ Performance

For detailed guidelines and best practices on optimizing React performance in this project, check the [React Performance Guide](./docs/react-performance.md).

---

## 🌗 Theme System

The app supports **Light / Dark / System** themes.

- Theme preference is stored in `localStorage`.
- Default mode: System (follows OS preference).
- Uses Ant Design’s `ConfigProvider` + Tailwind classes.

---

## 📡 PokéAPI Integration

- Pokémon list fetched via:
  ```
  GET /pokemon?offset={offset}&limit={limit}
  ```
- Pokémon details fetched via:
  ```
  GET /pokemon/{id}
  ```
- Data handled through React Query with caching.

---

## 🤝 Submitting (Challenge Instructions)

To submit this project for the technical challenge:

1. **Fork** the original repository.
2. Create a new branch for your solution:
   ```bash
   git checkout -b feature/solution
   ```
3. Make an initial commit (`Initial commit`).
4. Implement your solution.
5. Make a final commit (`Final commit`).
6. Open a **Pull Request to the original repository**.

---

## 📸 Screenshots

![alt text](image.png)

---

## 📜 License

This project was created for a **technical challenge**. You are free to use it for learning or as part of your portfolio.
