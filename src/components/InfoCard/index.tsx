import React from "react";

import styles from "../../styles/CardInfo.module.css";

const CardInfo = ({ pokemon }) => {
  const { name, sprites, base_experience, abilities, species, weight, height } =
    pokemon;

  const abilityName = abilities.map((ability) => {
    return (
      <ul key={ability.ability.name}>
        <li>{ability.ability.name}</li>
      </ul>
    );
  });

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <span>Weight: {weight}</span>
          <br />
          <span>Height: {height}</span>
          <br />
          <span>Base experience: {base_experience}</span>
          <br />
          <span>Specie name: {species.name}</span>
          <br />
          <span>AbilityName: {abilityName}</span>
        </div>

        <div className={styles.gridItem}>
          <img
            className={styles.image}
            src={sprites.front_default}
            alt={`${name} image`}
          />
        </div>
      </div>
    </>
  );
};

export default CardInfo;
