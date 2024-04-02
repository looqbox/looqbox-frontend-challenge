## Pokédex

This project was done based on the [Looqbox FrontEnd Challenge](https://github.com/looqbox/looqbox-frontend-challenge).

#### 🚀 Start

Clone the project to your machine and run `npm install` to install the project's dependencies.
Once done, just hit `npm start` to see the Pokédex on your screen.

#### 📋 Test prerequisites

- Dynamic SPA App that shows a list of Pokémons, and search them, using the [Pokeapi](https://pokeapi.co/).
- In the main page you need a search bar and a loaded list of Pokémons (random or just hardcoded);
- Clicking on any Pokémon shows a card/modal/page with that Pokémon's info;
- Searching and pressing enter on the search bar will show the result instead of the list;
- The App needs at least two different routes.

#### 🛠️ How it was done

- HTML/CSS;
- React was used in the project through functional components, with arrow functions, also using `hooks`;
- Redux Toolkit was applied as suggested;
- The project was created with TypeScript formatting, however, not all objects were typed; I demonstrated how development should be done in the language - main reference of how I think it should be done is demonstrated in [this project](https://github.com/monbrey/pokeapi-typescript);
- The API call was made asynchronously, using Redux Toolkit `createAsyncThunk`;
- Responsiveness was a priority for the entire application;
- The routes were done as requested;
- No CSS framework was used beyond Styled Components and AntDesign, which was recommended.

#### ✒️ Observations

- Some comments were left on purpose for the test evaluator to read;

#### 💻 Quick preview

![Pokédex App](https://github.com/dthabata/pokedex/assets/97548859/c70a270d-69e3-4834-890d-2aecdd8a7c1d)

#### 📝 References

- [React](https://legacy.reactjs.org/docs/getting-started.html);
- [Redux](https://redux.js.org/);
- [Redux Toolkit](https://redux-toolkit.js.org/);
- [Redux Toolkit createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk);
- [Redux Toolkit Guide](https://www.smashingmagazine.com/2023/05/guide-redux-toolkit-typescript/);
- [Project for inspiration // TS](https://github.com/monbrey/pokeapi-typescript);
- [Project for inspiration // Design](https://github.com/Lorenalgm/pokedex?tab=readme-ov-file);
- [Pokédex App](https://github.com/dthabata/pokedex).

-- feito por @[dornelasthabata](https://github.com/dthabata) 😊
