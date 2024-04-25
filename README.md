# Pokémon SPA

## Overview

This single-page application (SPA) offers a dynamic interface for searching and viewing Pokémon data using the Pokeapi. The application is designed to operate without page reloads, ensuring a seamless user experience.

## Features

- **Search Bar**: Users can search for Pokémon using a search bar on the main page.
- **Pokémon List**: A list of fetched Pokémon is displayed on the main page.
- **Pokémon Details**: Clicking on a Pokémon displays its details in a separate page.
- **Routing**: The application includes two different routes (`/home` and `/pokemon/:name`).
- **Dependencies**: Utilizes `Redux Toolkit`, `Ant Design`, `React Router Dom`, `TypeScript`, and `Vite` for development.

## Technical Choices

- **Redux Toolkit**: Chosen for efficient state management, marking my first venture into creating a project with Redux from scratch.
- **React Router Dom**: Implemented for seamless routing throughout the SPA and great integration with Redux; also my first time building a project with it from scratch.
- **Ant Design**: My first time using at all. Really enjoyed the developer experience.
- **TypeScript**: Ensured type safety and improved developer experience.
- **Vite**: Accelerated development with its fast build tool.

## Acknowledgements

- As you can see, I'm open to using any technology provided there is documentation available, with or without prior knowledge in it.
- I apologize for the absence of unit testing and refined CSS due to time constraints. My focus was on features critical for a BI company, such as lazy loading, shareable queries, data caching, and, in Looqbox case, integrating Ant Design.

## Future Improvements

- **Unit Testing**: To ensure code reliability and maintainability.
- **CSS Enhancements**: To improve the visual appeal and user interface design.
- **List virtualization**: in case of massive data display, a virtualized list would be in order to maximize performance.

Thank you for considering my submission. I look forward to any feedback and the opportunity to discuss my approach further.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

This project was developed and tested on Linux using Node.js v21.5.1 and NPM 10.5.0. While previous versions might work, I cannot guarantee compatibility.

### Installation

1. **Clone the repo**:

   ```sh
   git clone https://github.com/guicalmeida/looqbox-frontend-challenge.git
   ```

2. **Install NPM packages**:

   ```sh
   npm install
   ```

### Development

To start the development server, run the following command:

```sh
npm run dev
```

This will start the Vite development server, allowing you to see your changes in real-time.

### Build

To build the application for production, use:

```sh
npm run build
```

This command will first compile the TypeScript files and then build the application using Vite.

Thank you for considering my submission. I look forward to any feedback and the opportunity to discuss my approach further.
