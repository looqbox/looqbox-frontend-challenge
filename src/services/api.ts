import axios from "axios";

const pokeAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json;charset=UTF-8"
    }
});

export default pokeAPI;