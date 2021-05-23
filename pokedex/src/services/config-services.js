import axios from "axios"; // import the library AXIOS

// connection with URL of our API

// create a const with API's address
const BASE_URL = "https://pokeapi.co/api/v2/";

// exports a const that containt the API's URL
// with method create we can instance of axios
const API = axios.create({
  baseURL: BASE_URL,
});

// export the API to use in the other files
export default API;
