import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { searchButton } from "../actions/pokemonAction";
import "../App.css";
import "../assets/FontAwesomeIcons";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonList } from "../components/PokemonList";

class HomeScreen extends React.Component {
  state = {
    inputValue: "",
    pokemon: null,
  };

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { pokemon, searchButton } = this.props;

    const { inputValue } = this.state;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    return (
      <div className="container">
        <input
          className="input"
          onChange={this.inputChange}
          value={this.state.inputValue}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              searchButton(this.state.inputValue);
            }
          }}
        />
        <FontAwesomeIcon
          icon="search"
          size="lg"
          onClick={() => searchButton(this.state.inputValue)}
        />

        <FontAwesomeIcon
          icon="dice"
          size="lg"
          onClick={() => searchButton(random(0, 1170))}
        />

        {(() => {
          if (pokemon.sprites) {
            return (
              <div>
                <PokemonCard></PokemonCard>
              </div>
            );
          } else {
            return <PokemonList />;
          }
        })()}

        <footer className="footer">
          <Link className="navbar-brand" to="/about">
            <h1>Sobre</h1>
          </Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  pokemon: store.clickState.pokemon,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ searchButton }, dispatch);

const conectado = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export { conectado as HomeScreen };
