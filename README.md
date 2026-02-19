# Looqbox FrontEnd Challenge

### Would you like to work with us? Apply [here](https://looqbox.gupy.io/)!

This project is a solution for the FrontEnd technical challenge proposed by Looqbox. It consists of a Single Page Application (SPA) that consumes the PokeAPI to provide a dynamic interface for listing and searching Pokémon.

## Objective

The primary goal of this project is to build a robust application using ReactJS, demonstrating proficiency in state management, routing, and external API consumption. The application allows users to view a preloaded list, search by name or ID, and access detailed information for each Pokémon without reloading the page.

## Project Structure

The project follows a modular architecture to ensure a clear separation of concerns:

```text
.
├── src/
    ├── assets/          # Media files and icons
    ├── components/
    │   ├── common/      # Shared UI components like Error and Empty states
    │   └── pokemon/     # Domain-specific Pokémon components
    ├── config/          # Theme configurations and Design Tokens
    ├── context/         # React Contexts for global theme management
    ├── hooks/           # Custom hooks for Redux and UI logic
    ├── pages/           # High-level views (Home and Details)
    ├── routes/          # Routing configuration
    ├── services/        # API communication layer
    ├── store/           # Global state management with Redux Toolkit
    ├── types/           # TypeScript interface and type definitions
    └── utils/           # Utility functions for formatting and color mapping

```

## Stack and Libraries

- **ReactJS & TypeScript**
- **Redux Toolkit**
- **Ant Design (antd)**
- **React Router Dom**
- **Recharts**
- **Vite**

## Features

- **Dynamic Search**
- **Pagination**
- **Dark Mode**
- **Error Handling**
- **Data Visualization**

## Missing

- **80% coverage for tests**

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- Yarn or NPM

### Installation

1. Clone the repository:

```bash
git clone <repository-url>

```

2. Navigate to the project directory:

```bash
cd looqbox-frontend-challenge

```

3. Install the dependencies:

```bash
yarn install

```

### Running the Project

To start the development server, run:

```bash
yarn dev

```

The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build, run:

```bash
yarn build

```
