import React from "react";

import trainerImage from "../resources/trainercard-jorge.png";

const TrainerProfile = () => {
  const pokeID = 3;

  return (
    <div className="trainer-profile">
      <h2 className="trainer-title">This is Jorge's trainer profile</h2>
      <div className="trainer-info">
        <h1>Name:</h1>
        <p>Jorge</p>
      </div>
      <div className="trainer-image">
        <img src={trainerImage} alt="trainer" />
      </div>
      <div className="trainer-fav-pokemon">
        <h1>Favorite pokemon:</h1>
        <img
          alt="fav-poke"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`}
        />
        <h4>Venusaur</h4>
      </div>
    </div>
  );
};
export default TrainerProfile;
