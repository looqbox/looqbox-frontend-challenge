<div align="center">
  <h1>
    Looqbox Frontend chalenge solution
  </h1>

This is my solution for the proposed frontend chalenge.

</div>

</br>

<p align="center">
  <img src="/public/logo.png" alt="Looqdex Logo" width="400" />
</p>

---

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Features](#features)
  - [Run the project](#run-the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [The journey](#the-journey)
- [Author](#author)

## Overview

### Screenshot

![Home page screenshot](/public/homepage-screenshot.png)
![Details page screenshot](/public/detailpage-screenshot.png)

## Features

- List of Pokémon in the home page
- Searchbar to search any Pokémon by name or ID
- Pagination to display more Pokémon
- Pokémon details page with:
  - Animated sprite
  - Description
  - Pokémon cry
  - Shiny sprite display
  - Height and Weight
  - Charts for base stats visualization
  - Type effectiveness
  - Evolution chain
- Navigations between two routes (`/` - home page, `/pokemon/:id` - Pokémon details)
- Error and loading handling
- Responsive layout

> See more running the project!

## Run the project

> Disclaimer: This project uses Vite for local hosting and building. Make sure you have Node.js version 22.12 or higher installed so it can work properly.

- Clone the repository in your machine
- Acces the dev branch running: `$ git checkout dev`
- Install the dependencies with `$ npm install`
- Run the project using `$ npm run dev`
- Access the provided localhost url and voilà! Have fun!

## My process

### Built with

- React
- TypeScript
- Vite
- Ant Design
- Recharts - for charts
- Axios - for data fetching
- Tanstack / React-query - for data management and chaching
- React Router - for navigation
- EsLint and Prettier - Linting

### The journey

After reading the chalenge description, I opened Figma to start designing my ideas of pages, layouts and components, so I could get a better base when coding it out. You can check the Figma project [here](https://www.figma.com/design/A5wc90dBVFydtFRyzmhWDr/Looqdex-%7C-Looqbox-Frontend-Chalenge?node-id=106-41&t=pVm6iuhT96ga1ifB-1).

After finishing the design, I started the project by cloning the repository in my machine and setting up Vite with React and Typescript and additional configurations for EsLint and Prettier linting.

Then, I divided my process in simple steps. For each page, I would:

- Create the page component
- Create components related to the page
- Mock data
- Implement responsiviness
- Fetch data from the PokéApi
- Check for possible refactoring and code enhancement

Following this steps, I was capable to finish the project in the estimated time and in a organized way.

## Author

This project was built with a lot of love (and coffee) by me, Laerte Quinui!

- [GitHub](https://github.com/laerte-quinui)
- [LinkedIn](https://www.linkedin.com/in/laerte-quinui/)
- [E-mail](mailto:laertequinuio@gmail.com)
