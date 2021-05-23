import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PokeList } from "./components/PokeList";
import NavItems from "./components/NavItems";
import { PokeCard } from "./components/PokeCard";
import TrainerProfile from "./components/TrainerProfile";
import Pokedex from "./components/Pokedex";

function App() {
  const [searchedPokmeon, setSearchedPokmeon] = useState("");
  const handleSubmit = (pokemon) => {
    setSearchedPokmeon(pokemon);
  };
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavItems handleSubmit={handleSubmit} />

          <Route path="/" exact>
            <PokeList searchedPokemon={searchedPokmeon} />
          </Route>
          <Route path="/pokedex" exact>
            <Pokedex searchedPokemon={searchedPokmeon} />
          </Route>
          <Route path="/myProfile" exact>
            <TrainerProfile />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
