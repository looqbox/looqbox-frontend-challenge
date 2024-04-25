# Pokémon App

Here you can know better the Pokémons you like!

<p style="display:flex;flex:1;gap:20px">
  <img style="flex:1" src="https://res.cloudinary.com/jpbast/image/upload/v1713997903/Personal/d84a91e7-f268-44c0-b95a-3acb35785975.png" width="300" />
  <img style="flex:1" src="https://res.cloudinary.com/jpbast/image/upload/v1714005953/Personal/5338b74d-35e3-4566-a8ed-99712fcfdd80.png" width="300" /> 
</p>

## How to run the app

Make sure you are using Node version `>=18.x`.

On your terminal, run:

```
yarn install
```

Then:

```
yarn dev
```

Finally, the app should be running at:

```
http://localhost:3000
```

## Pages

For checking all the content within the app, you can visit the following pages:

- Home page (`/`)
- Pokémon detail (`/:name`)

## Home page

On the top of the page we have a search input where you can find a specific Pokémon by its `name` or
`id`. The search is only triggered if you hit the `Search` button. If the Pokémon exists, it will be
displayed below replacing the list. If it does not exist, a error message will be displayed.

If you have searched for a Pokémon but want to display the list again, simply erase the input value
or hit the Pokémon logo.

To improve performance, the list was implemented with `Infinite Scroll`. Pokémons are loaded every
20 as you scroll through the page. For better user experience, a `Skeleton` is displayed for each
card every time a request is ongoing. If you scrolls too much and decide to return to the top, just
hit the floating button on the bottom right.

To access detailed Pokémon info, just click on the card and you be sent to another page.

## Pokémon detail

Here you can find a more detailed information about the Pokémon you want. The entire page's color
scheme is dynamic and it depends on the Pokémon color type.

The entire page is responsive just like the Home page.

# Technical details

## Data and cache

In order to improve performance, user and development experience, I decided to go with
[TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview). All requests are
handled by the following custom hooks:

- `usePokemonList`: this hook gets all the Pokémon data needed on the home page and it's ready to
  use with infinite scroll. All the data needed is fetched here and then parsed to make it easier to
  consume through the components

- `usePokemon`: used for building the detail page and for getting the result from the search input.

Cache and overall performance were the main concerns so both hooks were developed with it in mind.
`usePokemon` has the same `queryKey` used on the `usePokemonList`, so the detail page is fully built
consuming the cache if it exists. The opposite might also happen: if you first visit Pikachu page,
for example, and then navigate to the list, Pikachu information will be pulled from the cache.

## Search input

In order to prevent unnecessary renders and requests, the search input was built using `ref`. I've
added a state to display the single card and trigger the search request, but that's it.

## Routes

The app router was built with [React Router Dom](https://reactrouter.com/en/main).

## Error handling

Every error is handled by the `Error Boundary` and the `React Router Dom`. If an unexpected error or
a response error from the requests happens, a error page is displayed. This page has a button so you
can reload the app.

<p>
<img src="https://res.cloudinary.com/jpbast/image/upload/v1713998791/Personal/4ed8cbe3-c600-41f1-a267-99d328ec5b07.png" style="width:50%;display:block">
</p>

For not found pages I created another page component that is quite similar to the error page.

<p>
<img src="https://res.cloudinary.com/jpbast/image/upload/v1713998764/Personal/0ea299a9-dfe0-4bf8-b906-7cc86850e830.png" style="width:50%;display:block">
</img>
</p>

If a searched Pokémon is not found, this is the feedback you'll see

<p>
<img src="https://res.cloudinary.com/jpbast/image/upload/v1714008118/c683c150-8344-4b52-90f3-70b5cc610bf2.png" style="width:50%;display:block">
</img>
</p>

## Styles

Most of the styles and components were made with [Tailwind](https://tailwindcss.com/) and
[Ant Design](https://ant.design/).

For the fonts, the whole app is consuming the Google Inter. For improving performance and avoiding
layout shift, I downloaded the `.ttf` files inside the `/assets` folder and loaded it from there.

Furthermore, every component and page is responsive.

<p style="display:flex;">
  <img src="https://res.cloudinary.com/jpbast/image/upload/v1713998917/Personal/4776eaf2-460a-4b1a-9a78-44bf0c6d489c.png" style="height:500px">
  </img>
  <img src="https://res.cloudinary.com/jpbast/image/upload/v1714000184/Personal/3ae8bb4b-12d5-427a-9af7-9cc858b27813.png" style="height:500px;margin-left:40px">
  </img>
</p>

For the animations, you can find it on the skeletons and the stats bar filling up on the detail page

<p>
<img src="https://res.cloudinary.com/jpbast/image/upload/v1714001061/Personal/c58cb9db-e809-408a-aed9-0361048400c8.png" style="width:50%;display:block">
</p>

## Linting

The linting is being handled by ESLint and Prettier with some rules I usually set.
