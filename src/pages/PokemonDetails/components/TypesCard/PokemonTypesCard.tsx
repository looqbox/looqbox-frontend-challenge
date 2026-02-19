import { Card, Tag } from "antd";
import type { Pokemon } from "../../../../store/pokemon/types";
import styles from "./PokemonTypesCard.module.scss";

const typeStyleMap: Record<string, string> = {
  normal: styles.typeNormal,
  fire: styles.typeFire,
  water: styles.typeWater,
  electric: styles.typeElectric,
  grass: styles.typeGrass,
  ice: styles.typeIce,
  fighting: styles.typeFighting,
  poison: styles.typePoison,
  ground: styles.typeGround,
  flying: styles.typeFlying,
  psychic: styles.typePsychic,
  bug: styles.typeBug,
  rock: styles.typeRock,
  ghost: styles.typeGhost,
  dragon: styles.typeDragon,
  dark: styles.typeDark,
  steel: styles.typeSteel,
  fairy: styles.typeFairy,
};

type Props = {
  pokemon: Pokemon;
};

export function PokemonTypesCard({ pokemon }: Props) {
  return (
    <Card className={styles.pokemonInfoCard} title="Types">
      <div className={styles.pokemonTypes}>
        {pokemon.types.map((typeInfo) => (
          <Tag
            key={typeInfo.type.name}
            className={`${styles.typeTag} ${typeStyleMap[typeInfo.type.name] ?? ""}`}
          >
            {typeInfo.type.name.toUpperCase()}
          </Tag>
        ))}
      </div>
    </Card>
  );
}
