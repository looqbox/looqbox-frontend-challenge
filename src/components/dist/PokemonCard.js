"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var PokemonCard = function (_a) {
    var pokemon = _a.pokemon, id = _a.id;
    return (React.createElement(antd_1.Card, { hoverable: true, cover: React.createElement("img", { alt: pokemon.name, src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png", style: { height: 120, objectFit: "contain" } }) },
        React.createElement(antd_1.Card.Meta, { title: pokemon.name, description: "ID: " + id })));
};
exports["default"] = PokemonCard;
