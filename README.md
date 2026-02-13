## Looqbox Frontend Challenge

> [Portuguese Version](./README_BR.md)

Frontend application built as part of the **Looqbox technical challenge**, using a modern stack with **React**, **TypeScript**, **Vite**, **Redux Toolkit** and **Tailwind CSS**, plus visual components from **Ant Design**.

The main goals of this project are to provide an experience that is:

- **Fast** (Vite build, React 19)
- **Scalable** (Redux Toolkit, organized architecture)
- **Modern and intuitive** (consistent design, reusable components, good UX practices)

---

## Tech stack

- **React 19** (`react`, `react-dom`)
- **TypeScript**
- **Vite** (build tool and dev server)
- **Redux Toolkit** (`@reduxjs/toolkit`, `react-redux`)
- **React Router** (`react-router`) for navigation
- **Ant Design** (`antd`) for UI components
- **Tailwind CSS 4** (`tailwindcss`, `@tailwindcss/vite`, `tailwind-merge`) for utility‑first styling
- **Axios** for HTTP requests
- **React Player** (`react-player`) for media/video when needed

---

## Dependencies

**Production (`dependencies`)**

- `@reduxjs/toolkit`
- `@tailwindcss/vite`
- `antd`
- `axios`
- `lucide-react`
- `react`
- `react-dom`
- `react-player`
- `react-redux`
- `react-router`
- `tailwind-merge`
- `tailwindcss`

**Development (`devDependencies`)**

- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `typescript-eslint`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`
- `@types/node`
- `@types/react`
- `@types/react-dom`

---

## Prerequisites

Before running the project, make sure you have:

- **Node.js** (LTS version recommended, e.g. 20.x)
- **npm** (or another compatible package manager such as `pnpm` or `yarn`)
- Internet access to install dependencies

---

## How to run the project

### 1. Clone the repository

```bash
git clone https://github.com/NattanSilva/looqbox-frontend-challenge.git
cd looqbox-frontend-challenge
```

### 2. Install dependencies

Using **npm**:

```bash
npm install
```

_(If you prefer `pnpm` or `yarn`, adjust the command accordingly.)_

### 3. Start the development server

```bash
npm run dev
```

Vite will display the local address in the terminal, usually something like:

```bash
http://localhost:5173
```

Open this URL in your browser to see the application.

### 4. Build for production

```bash
npm run build
```

The final bundle will be generated in the `dist/` folder.

### 5. Preview the production build

```bash
npm run preview
```

This command runs a local server that serves the production build, which is useful to test before deploying.

---

## Available scripts

- **`npm run dev`**: starts the Vite development server.
- **`npm run build`**: builds the project for production.
- **`npm run preview`**: runs a local server serving the built app.
- **`npm run lint`**: runs ESLint across the project.

---

## Architecture (overview)

The project follows a typical React + Vite structure:

- **`src/`**: application source code
  - **`components/`**: reusable UI components
  - **`pages/`** (or similar): main pages/views
  - **`store/`** (or `redux/`): Redux Toolkit store and slices
  - **`routes/`**: route configuration with `react-router` (if applicable)
  - **`styles/`**: global styles and Tailwind configuration (when not in root files)

If you are reviewing the challenge, a good starting point is the main entry file (usually `main.tsx` or equivalent) and then follow the imports to understand the flow.

---

## Code style and quality

- **TypeScript** for static typing and better maintainability.
- **ESLint** to enforce a consistent style and catch common issues.
- **React Hooks** with `eslint-plugin-react-hooks` for best practices.
- **Global state management** with Redux Toolkit, focusing on lean reducers and well‑defined actions.

To run static analysis:

```bash
npm run lint
```

---

## User experience (UX)

The application is designed to be:

- **Responsive**: adapts to different screen sizes.
- **Clear**: text, icons (`lucide-react`) and visual components (`antd`) help guide the user.
- **Consistent**: Tailwind and Ant Design help keep a unified design across screens.

Feel free to tweak colors, spacing and typography in the style/Tailwind configuration files to match the desired visual identity.

---

## How to extend or adapt

- **Fork** the repository or create a new branch.
- Make your changes following the existing code style.
- Run `npm run lint` and `npm run build` to ensure everything is still working.
- Open a Pull Request describing the changes you made.

---

## License

This project is intended for the **Looqbox technical challenge**. Check with the repository maintainer before reusing the code in other contexts.
