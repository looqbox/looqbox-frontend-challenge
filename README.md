
# Looqbox Pokédex - Front-End Challenge

  

![Looqbox Pokédex Screenshot](https://i.imgur.com/link-to-your-screenshot.png) ## 📋 About The Project

  

This project is a Single Page Application (SPA) developed as a solution to the Looqbox Front-End Challenge. The application is a modern and interactive Pokédex that consumes data from the [PokeAPI](https://pokeapi.co/), allowing users to view, search, and filter a comprehensive list of Pokémon.

  

The development was focused on creating a robust, scalable application with an excellent user experience, utilizing best practices from the React ecosystem and aligning with the Looqbox tech stack.

  

---

  

## ✨ Features

  

This project implements all the mandatory and bonus requirements from the challenge:

  

-  **List & Pagination:** Browse the entire Pokémon list with pagination controls and a "quick jump" feature.

-  **Direct Search:** Search for a specific Pokémon by name and navigate directly to its details page.

-  **Combined Filters:** Filter the list by Pokémon type, generation, or both simultaneously.

-  **Comprehensive Details Page:** View detailed information for each Pokémon, including types, height, weight, and stats.

-  **Interactive Stats View:** Choose between viewing stats in a dynamic radar chart or as classic progress bars.

-  **Responsive Design:** The application is fully responsive and adapts to all screen sizes, from mobile to desktop.

-  **Dark/Light Mode:** Toggle between a light and dark theme, with the user's preference saved in local storage.

-  **Internationalization (i18n):** Full support for both English (en) and Portuguese (pt-BR).

  

---

  

## 🚀 Tech Stack

  

The project stack was chosen to be modern, performant, and aligned with the technologies used by Looqbox.

  

-  **[React](https://react.dev/)**: The core library for building the user interface.

-  **[Vite](https://vitejs.dev/)**: An extremely fast build tool and development server.

-  **[TypeScript](https://www.typescriptlang.org/)**: For static typing and code safety.

-  **[Ant Design](https://ant.design/)**: A comprehensive UI component library for an elegant and consistent design.

-  **[Redux Toolkit](https://redux-toolkit.js.org/)**: For efficient and scalable global state management.

-  **[React Router](https://reactrouter.com/)**: For handling routing and navigation within the SPA.

-  **[i18next](https://www.i18next.com/)**: For implementing internationalization.

-  **[Axios](https://axios-http.com/)**: For making HTTP requests to the PokeAPI.

-  **[Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)**: For writing unit and component tests.

-  **[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)**: For ensuring code quality and consistent formatting.

  

---

  

## 📦 Getting Started

  

To run this project locally, follow these steps:

  

```bash

# 1. Clone the repository (or your fork)

git  clone [https://github.com/your-username/looqbox-frontend-challenge.git](https://github.com/your-username/looqbox-frontend-challenge.git)

  

# 2. Navigate to the project directory

cd  looqbox-frontend-challenge

  

# 3. Install dependencies

npm  install

  

# 4. Create the environment file

# Create a .env file in the root directory and add the following line:

VITE_POKEAPI_BASE_URL="[https://pokeapi.co/api/v2](https://pokeapi.co/api/v2)"

```

  

> ⚠️ **Important Note on `.env` files:**

> In a typical production environment, `.env` files contain sensitive information (like API keys) and should **never** be committed to a Git repository. They are always listed in the `.gitignore` file.

>

> The instruction to create this file here is for demonstrating the professional practice of separating configuration from code. In this specific case, the variable contains a public URL, which is not a secret.

  

```bash

# 5. Run the application in development mode

npm  run  dev

  

# The application will be available at http://localhost:5173

```

  

### Available Scripts

  

In the project directory, you can also run:

  

```bash

# Run the unit tests

npm  run  test

  

# Check for linting errors

npm  run  lint

  

# Format the entire codebase

npm  run  format

```

  

---

  

## 👨‍💻 Author

  

**Maxwell Paulo da Silva**

  

-  **LinkedIn:**  [https://www.linkedin.com/in/-maxpaulo/](https://www.linkedin.com/in/-maxpaulo/)

-  **Portfolio:**  [https://maxpaulo.com/](https://maxpaulo.com/)