import React from "react";

import styles from "../../styles/CardInfo.module.css";

const CardInfo = ({ pokemon }) => {
  const { name, sprites, base_experience, species, weight, height } = pokemon;

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div>
            <h2>Weight</h2>
            <h3>{weight/10}Kg</h3>
            <h2>Height</h2>
            <h3>{height/10}m</h3>
          </div>
          <div>
            <h2>Base experience</h2>
            <h3>{base_experience} XP</h3>
            <h2>Specie name</h2>
            <h3>{species.name}</h3>
          </div>
        </div>

        <div className={styles.gridItem}>
          <img src={sprites.front_default} alt={`${name} image`} />
        </div>
      </div>
    </>
  );
};

export default CardInfo;
