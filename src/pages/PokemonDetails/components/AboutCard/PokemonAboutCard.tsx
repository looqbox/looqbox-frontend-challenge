import { Card, Divider, Spin, Tag, Typography } from "antd";
import type { Pokemon } from "../../../../store/pokemon/types";
import styles from "./PokemonAboutCard.module.scss";

const { Text } = Typography;

export type SpeciesDetails = {
  loading: boolean;
  flavorText: string | null;
  genus: string | null;
  habitat: string | null;
  growthRate: string | null;
  captureRate: number | null;
};

type Props = {
  pokemon: Pokemon;
  speciesDetails: SpeciesDetails;
};

export function PokemonAboutCard({ pokemon, speciesDetails }: Props) {
  const { loading, flavorText, genus, habitat, growthRate, captureRate } = speciesDetails;
  const weightKg = (pokemon.weight / 10).toFixed(1);
  const heightM = (pokemon.height / 10).toFixed(1);

  return (
    <Card className={styles.pokemonInfoCard} title="About">
      {loading ? (
        <div className={styles.pokemonSubloading}>
          <Spin size="small" />
        </div>
      ) : (
        <div className={styles.pokemonAboutGrid}>
          <div className={styles.pokemonAboutItem}>
            <span>Height</span>
            <strong>{heightM} m</strong>
          </div>
          <div className={styles.pokemonAboutItem}>
            <span>Weight</span>
            <strong>{weightKg} kg</strong>
          </div>
          <div className={styles.pokemonAboutItem}>
            <span>Base Exp</span>
            <strong>{pokemon.base_experience}</strong>
          </div>
          <div className={styles.pokemonAboutItem}>
            <span>Capture Rate</span>
            <strong>{captureRate ?? "-"}</strong>
          </div>
          <div className={styles.pokemonAboutItem}>
            <span>Habitat</span>
            <strong>{habitat ?? "-"}</strong>
          </div>
          <div className={styles.pokemonAboutItem}>
            <span>Growth Rate</span>
            <strong>{growthRate ?? "-"}</strong>
          </div>
          {genus && (
            <div className={`${styles.pokemonAboutItem} ${styles.pokemonAboutItemFull}`}>
              <span>Genus</span>
              <strong>{genus}</strong>
            </div>
          )}
        </div>
      )}

      <Divider style={{ margin: "12px 0" }} />
      <Text className={styles.pokemonFlavorText}>{flavorText}</Text>

      <Divider style={{ margin: "12px 0" }} />
      <div className={styles.pokemonAbilities}>
        {pokemon.abilities.map((ability) => (
          <Tag key={ability.ability.name} className={styles.abilityTag}>
            {ability.ability.name.toUpperCase()}
          </Tag>
        ))}
      </div>
    </Card>
  );
}
