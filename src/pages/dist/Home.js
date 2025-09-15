"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var pokemonSlice_1 = require("../store/pokemonSlice");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var PokemonCard_1 = require("../components/PokemonCard");
var Title = antd_1.Typography.Title;
var Search = antd_1.Input.Search;
var Home = function () {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.pokemon; }), list = _a.list, loading = _a.loading, count = _a.count;
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    var _c = react_1.useState(false), showSkeleton = _c[0], setShowSkeleton = _c[1];
    var pageSize = 15;
    react_1.useEffect(function () {
        dispatch(pokemonSlice_1.fetchPokemons({ limit: pageSize, offset: (page - 1) * pageSize }));
    }, [dispatch, page]);
    react_1.useEffect(function () {
        var timeout;
        if (loading) {
            setShowSkeleton(true);
        }
        else {
            timeout = setTimeout(function () { return setShowSkeleton(false); }, 400); // delay mínimo
        }
        return function () { return clearTimeout(timeout); };
    }, [loading]);
    var onSearch = function (value) {
        if (value.trim() === '') {
            dispatch(pokemonSlice_1.fetchPokemons({ limit: pageSize, offset: (page - 1) * pageSize }));
        }
        else {
            dispatch(pokemonSlice_1.fetchPokemonByName(value.toLowerCase()));
        }
    };
    var getPokemonId = function (url) {
        var parts = url.split('/').filter(Boolean);
        return parts[parts.length - 1];
    };
    return (React.createElement("div", { style: { padding: '1rem' } },
        React.createElement(Title, { level: 2, style: { textAlign: 'center', marginBottom: '1.5rem' } },
            "Pok\u00E9dex (",
            count,
            ")"),
        React.createElement(Search, { placeholder: "Buscar Pok\u00E9mon", onSearch: onSearch, enterButton: true, allowClear: true, style: {
                maxWidth: 400,
                margin: '0 auto 2rem auto',
                display: 'block'
            } }),
        showSkeleton ? (React.createElement(antd_1.Row, { gutter: [16, 16] }, Array.from({ length: pageSize }).map(function (_, index) { return (React.createElement(antd_1.Col, { xs: 24, sm: 12, md: 8, lg: 6, key: index },
            React.createElement(antd_1.Skeleton, { active: true, avatar: true, paragraph: { rows: 2 } }))); }))) : list.length === 0 ? (React.createElement("div", { style: { marginTop: '2rem' } },
            React.createElement(antd_1.Empty, { image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png", styles: { image: { height: 80 } }, description: "Nenhum Pok\u00E9mon encontrado" }))) : (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Row, { gutter: [16, 16] }, list.map(function (pokemon) {
                var id = getPokemonId(pokemon.url);
                return (React.createElement(antd_1.Col, { xs: 24, sm: 12, md: 8, lg: 6, key: pokemon.name },
                    React.createElement(react_router_dom_1.Link, { to: "/pokemon/" + pokemon.name, key: pokemon.name },
                        React.createElement(PokemonCard_1["default"], { pokemon: pokemon, id: id }))));
            })),
            React.createElement("div", { style: { display: 'flex', justifyContent: 'center', marginTop: '2rem' } },
                React.createElement(antd_1.Pagination, { current: page, pageSize: pageSize, total: count, onChange: function (p) { return setPage(p); }, showSizeChanger: false, simple: true }))))));
};
exports["default"] = Home;
