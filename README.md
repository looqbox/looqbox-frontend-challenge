# Pokémon React Application

This is a Single Page Application (SPA) built with React, Material-UI, and TypeScript, using the PokeAPI to display a list of Pokémon. The app includes dynamic content loading, a search bar, and detailed Pokémon information.

This project was developed for the Looqbox Frontend Challenge.

## Features

- **Home Page**: Displays a list of Pokémon with their name and image.
- **Search Functionality**: Users can search for a Pokémon by name using the search bar.
- **Dynamic Routes**: Clicking on a Pokémon card will navigate to a detailed page with more information about the selected Pokémon.
- **Responsive UI**: The app uses Material-UI components and is designed to work across devices.

## Routes

- **Home Route (`/`)**: Displays the list of Pokémon. The user can search for Pokémon and view their basic details.
- **Details Route (`/pokemon/:id`)**: Displays detailed information for each Pokémon, including:
  - **PokeAPI Sprite**: The Pokémon's default sprite from the PokeAPI.
  - **Official Artwork**: The official artwork of the Pokémon.
  - **Height and Weight**: The Pokémon's height and weight.
  - **Abilities**: The Pokémon's abilities.
  - **Types**: The Pokémon's types.
  - **Generation**: The generation to which the Pokémon belongs.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Material-UI (MUI)**: UI component library for a responsive and clean interface.
- **Axios**: Promise-based HTTP client for making API requests.
- **PokeAPI**: Open API providing Pokémon data.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/carlsfi/looqbox-frontend-challenge
   ```

2. Navigate to the project directory:
   ```bash
   cd looqbox-frontend-challenge
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in the browser:
   ```
   http://localhost:3000
   ```

## Project Structure

- `src/components`: Contains reusable React components like `PokemonCard`, `PokemonDetails`, `AppNavigator`, and `Footer`.
- `src/containers`: Contains main pages of the application, such as `Pokedex` and `PokemonDetails`.
- `src/config`: Configuration files for API URLs.
- `src/App.js`: Main application file with route configuration.
- `src/index.js`: Entry point for the React application.
- `src/index.css`: Global styles for the application.

## Bonus Features Implemented

- **Error Handling**: Shows a loading spinner while fetching data and displays an error message if something goes wrong.
- **Styled Components**: The UI is styled using Material-UI's `sx` prop for styling flexibility.
- **Pagination**: Implemented pagination in the `Pokedex` component to manage the display of Pokémon.

## Future Improvements

- **Enhanced Search**: Improve search functionality with advanced filtering options.
- **Unit Testing**: Add unit tests using Jest or React Testing Library.
- **Charts**: Visualize Pokémon stats using charts for better user experience.
- **Performance Optimization**: Optimize the performance of the application for faster loading times.

## License

This project is licensed under the MIT License.