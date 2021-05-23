import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavItems = (props) => {
  const { handleSubmit } = props;
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };
  const submitPokemon = (e) => {
    e.preventDefault();
    handleSubmit(searchText);
  };
  return (
    <>
      <div className="nav-bar">
        <div className="search-bar">
          <form onSubmit={submitPokemon}>
            <input
              placeholder="Search for a pokemon..."
              className="search-txt"
              name="q"
              type="text"
              onChange={handleChange}
            />
            <button className="search-btn" type="submit">
              <FontAwesomeIcon icon={faSearch} color="white" />
            </button>
          </form>
        </div>
        <div className="nav-links-container">
          <div className="nav-link-profile">
            <Link to="/myProfile">View my profile</Link>
          </div>
          <div className="nav-link-home">
            <Link to="/pokedex" className="nav-home-link">
              Explore with Pokedex!
            </Link>
          </div>
          <div className="nav-link-home">
            <Link to="/" className="nav-home-link">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavItems;
