import { Card, Spin, Typography } from "antd";
import styles from "./PokemonEvolutionCard.module.scss";

const { Text } = Typography;

type Props = {
  loading: boolean;
  evolutionNames: string[];
  currentPokemonName: string;
  onEvolutionClick: (pokemonName: string) => void;
};

export function PokemonEvolutionCard({
  loading,
  evolutionNames,
  currentPokemonName,
  onEvolutionClick,
}: Props) {
  return (
    <Card className={styles.pokemonInfoCard} title="Evolution Chain">
      {loading ? (
        <div className={styles.pokemonSubloading}>
          <Spin size="small" />
        </div>
      ) : evolutionNames.length > 0 ? (
        <div className={styles.pokemonEvolutionList}>
          {evolutionNames.map((evolutionName) => (
            <button
              key={evolutionName}
              type="button"
              className={`${styles.evolutionChip} ${evolutionName === currentPokemonName ? styles.evolutionChipActive : ""}`}
              onClick={() => onEvolutionClick(evolutionName)}
            >
              {evolutionName}
            </button>
          ))}
        </div>
      ) : (
        <Text type="secondary">No evolution data available.</Text>
      )}
    </Card>
  );
}
