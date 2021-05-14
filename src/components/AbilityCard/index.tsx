import React from "react";

import styles from "../../styles/AbilityCard.module.css";

const AbilityCard = ({ abilities }) => {
  const abilityName = abilities.map((ability) => {
    return (
      <div className={styles.abilitiesInfo} key={ability.ability.name}>
        <h2>{ability.ability.name}</h2>
        <h3>{ability.is_hidden === true ? "Hidden" : "Not hidden"}</h3>
      </div>
    );
  });

  return (
    <>
      <span>{abilityName}</span>
    </>
  );
};

export default AbilityCard;
