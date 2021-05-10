# PokéList @ looqbox (FrontEnd Challenge)
![Looqbox](https://github.com/looqbox/looqbox-frontend-challenge/blob/master/logo.png)

---

## Table of Contents
+ [About](#about)
+ [Code Architecture](#code_architecture)
+ [Getting Started](#getting_started)
+ [Usage](#usage)
+ [Contributing](../CONTRIBUTING.md)

---

## About <a name = "about"></a>
This is my project called PokéList for the [looqbox](https://www.looqbox.com/en/) front-end challenge.
It is a list of pokemons made from the [PokéAPI](https://pokeapi.co/). Enjoy! (:

---

## Code Architecture <a name = "code_architecture"></a>
The project has a simple **SPA**  (Single Page Application) architecture. It started with the [create-react-app](https://create-react-app.dev/) and then I made small changes to the initial base.


The only two routes `'/'` and `'/:pokemonId/'` work via [Axios](https://axios-http.com/) and [react-router-dom](https://reactrouter.com/), and the responsible for the UI is [Material UI](https://material-ui.com/).

The folder architecture comes down to: `root`, `node_modules`, `public` and `src`. The `src` subfolders are: `assets`, `components`, `constants`, `services`, `styles` and `themes`.

The main page has a navbar, breadcumb, search input and the list with **898** pokemons. I know it would be ideal to have a pagination, but the listing is complete due to the way the search is done.

When you click on a pokemon card, you are directed to an internal page with more information about it. If the user chooses to return to the main page, the reload is made without a new request to the server (API).

The application has [ESLint](https://eslint.org/) as a linter, but unfortunately I was unable to apply the unit tests in time, even though I knew the total importance.

---

## Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

#### You’ll need to have:

```
Node.js >= 10.16
npm >= 5.6
Yarn >= 1.22.5
Web Browser == Chrome, Firefox, Edge, IE 9/10/11
```

### Installing

#### Here are some links for installing the prerequisites:

[Node.js](https://nodejs.org/en/download/)

[npm](https://docs.npmjs.com/cli/v7/configuring-npm/install)

[Yarn](https://classic.yarnpkg.com/en/docs/install)

[Web Browsers](https://www.google.com/search?q=web+browsers+download&ei=jyOZYJDDIoTX1sQPs9mWoAI&oq=web+browsers+download&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABBHELADOgcIABCwAxBDOgQIABBDOgQIABAKOggIABAWEAoQHlDzE1iBHGDjHGgBcAJ4AIABygGIAbALkgEFMC44LjGYAQCgAQGqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwjQxvW2i7_wAhWEq5UCHbOsBSQQ4dUDCA4&uact=5)


#### Clone the project into a local folder:
```
git clone git@github.com:rwtrecs/looqbox-frontend-challenge.git
```


#### Start the project with npm or Yarn:
```
npm start
```
```
yarn
```

#### A new tab in the browser will start automatically, but if it doesn't open this URL:
```
http://localhost:3000
```


---
## Usage <a name = "usage"></a>

#### You can:

+ List all 898 pokemons.
+ Search pokemon by name.
+ View more details about a pokemon.


---
## looqbox ~ just ask
[Learn about](https://www.looqbox.com/en/empresa/)
