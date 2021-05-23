
# Pokedex - Pokemon App

  

This SPA is used to look up any type of Pokemon, using the PokeApi.


## Features

  

Among the features in this SPA:

  

1. Home page: Where you can view a list of the first 151 pokemons (Gen I). Clicking on any will show details about the pokemon in classic TGC style. At the bottom there is a pagination to look through all the pokemons.

2. View my profile: Takes the user to their profile view, where they can see their name, won badges and favorite Pokemon.

3. Explore with Pokedex: In this view, we simulate the usage of the Pokedex, we can see details about a specific Pokemon. (Hint: Touch the button!)

  

What could be improved:

  

1. Style of the SPA.

2. Addition of a "Trainer login system".

3. Trainer battle system
4. Testing.

  

This is took a total time of 15h to make, credits to user @oryamne for his awesome Pokedex style!

## Code info

There are 3 main folders:
1. Components: Where all the components are, it could be divided by section or functionality but I decided to simplify it because it is an small app.

2. Resources: Where all the media files are, most of them are exported through the `media-file.js` file to be easily accessed from other components (and avoiding some webpack problems in the process)

3. Services: Where all API related files are, firstly we have `config-services.js` file where our axios is configured and `pokemon-services.js` file where all the Endpoints related to the PokeApi are set.

App.jsx contains all the components and routing for the SPA, styles are in App.css.

### List of dependencies:

 - Axios
 - FontAwesome
 - React Router DOM
 - SweetAlerts 2 

## How to start
Type `npm install` in terminal (in root folder), to firstly install all dependencies and then `npm start`
