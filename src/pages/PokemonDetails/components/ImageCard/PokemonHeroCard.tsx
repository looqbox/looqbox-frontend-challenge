import { Card, Typography, Image } from "antd";
import type { Pokemon } from "../../../../store/pokemon/types";
import { imageNotFound } from "../../../../assets/const/imageNotFound";
import styles from "./PokemonHeroCard.module.scss";

const { Title, Text } = Typography;

type Props = {
  pokemon: Pokemon;
};

export function PokemonHeroCard({ pokemon }: Props) {
  const imageUrl =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.front_default ||
    "";

  return (
    <Card
      className={styles.pokemonCard}
      cover={
        <div className={styles.pokemonImageContainer}>
          <Image
            alt={pokemon.name}
            src={imageUrl}
            className={styles.pokemonImage}
            preview={false}
            fallback={imageNotFound}
          />
        </div>
      }
    >
      <Title level={2} className={styles.pokemonName}>
        {pokemon.name.toUpperCase()}
      </Title>
      <Text type="secondary" className={styles.pokemonId}>
        #{pokemon.id.toString().padStart(3, "0")}
      </Text>
    </Card>
  );
}
