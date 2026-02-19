import { Card, Image } from "antd";
import type { Pokemon } from "../../../../store/pokemon/types";
import styles from "./PokemonSpritesCard.module.scss";

type Props = {
  pokemon: Pokemon;
};

export function PokemonSpritesCard({ pokemon }: Props) {
  return (
    <Card className={styles.pokemonInfoCard} title="Sprites">
      <div className={styles.pokemonSprites}>
        {!pokemon.sprites.front_default && !pokemon.sprites.back_default ? (
          <span>No sprites available</span>
        ) : (
          <>
            {pokemon.sprites.front_default && (
              <Image
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} front`}
                className={styles.sprite}
                draggable={false}
                preview={false}
              />
            )}
            {pokemon.sprites.back_default && (
              <Image
                src={pokemon.sprites.back_default}
                alt={`${pokemon.name} back`}
                className={styles.sprite}
                draggable={false}
                preview={false}
              />
            )}
          </>
        )}
      </div>
    </Card>
  );
}
