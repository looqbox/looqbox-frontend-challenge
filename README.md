# Pokédex - Looqbox (FrontEnd Challenge)
![Looqbox](https://github.com/looqbox/looqbox-frontend-challenge/blob/master/logo.png)

## Contents
+ [About](#about)
+ [Layout](#layout)
+ [Libraries](#libraries)
+ [Code Architecture](#code_architecture)
+ [Requirements](#requirements)
+ [Running the project](#running)

## About <a name = "about"></a>
This is a **S**ingle **P**age **A**pplication using [ReactJS](https://pt-br.reactjs.org/) and [PokéAPI](https://pokeapi.co/) for the [looqbox](https://www.looqbox.com/en/) front-end challenge.
In this project, you can search for pokémons and get some useful information about them!

## Layout <a name = "layout"></a>
You can see my layout made on Figma [here](https://www.figma.com/file/Vviha2GTIaAYAo4uJKeuCG/Pokedex?node-id=0%3A1).

## Libraries <a name = "libraries"></a>
- [Axios](https://github.com/axios/axios)
- [Bootstrap](https://getbootstrap.com/)
- [Chart.js](https://www.chartjs.org/docs/latest/)
- [ESLint](https://eslint.org/)
- [Prop-types](https://www.npmjs.com/package/prop-types)
- [React-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)

## Code Architecture <a name = "code_architecture"></a>
- `public`: folder which contains the HTML file used to render all the React components in the div with id=root.
- `src`: folder which contains all the source code used to create the interfaces.
  - `assets`: folder with images used in the project
  - `components`: folder with reusable components (building blocks that can accept inputs and returns React elements to render in the UI)
  - `pages`: folder with the complete pages of the project (Home and Details pages)
  - `services`: folder with the request configurations to the PokeAPI
  - `styles`: folder with all styles from the project, containing the global styles and the folders separated for each page and component
  - `utils`: folder with reusable functions (a function to standardize the Pokémon's ID and a function to convert string to capital letter)
  - `App.js`: file that import the routes to be rendered
  - `index.js`: file which renders the App.js in the HTML file
  - `routes.js`: file that defines the routes of the app and their respective React pages to be rendered

## Requirements <a name = "requirements"></a>
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)

## Running the project <a name = "running"></a>
1. Clone the repository in your machine

```
git clone https://github.com/mateusfugita/looqbox-frontend-challenge.git
```

2. Install the dependencies

```
yarn install
```

3. Start the project

```
yarn start
```

4. The project will be running in **http://localhost:3000/**.

### Linting (using ESLint)

```
yarn lint
```
