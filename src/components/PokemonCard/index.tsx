import { Pokemon } from "../../DTOs/Pokemon";
import { pokemonTypes } from "../../constants/pokemonTypes";
import PokemonTypeCard from "../PokemonTypeCard";
import { ReactComponent as WeightIcon } from "../../assets/icon-weight.svg";
import { ReactComponent as RulerIcon } from "../../assets/icon-ruler.svg";
import { ReactComponent as BoltIcon } from "../../assets/icon-bolt.svg";
import {
  CardOverlay,
  Container,
  MoreDetailsButton,
  PokemonFeatures,
  PokemonHeight,
  PokemonImg,
  PokemonName,
  PokemonNumber,
  PokemonType,
  PokemonWeight,
} from "./styles";
import { formatPokemonId } from "../../utils/formatPokemonId";
import ImgCardSkeleton from "./ImgCardSkeleton";
import { basePokemonImgUrl } from "../../constants/basePokemonImgUrl";

interface Props {
  goToDetails: () => void;
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon, goToDetails }: Props) {
  const [{ color }] = pokemonTypes.filter(
    (type) => pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  const pokemonImg = basePokemonImgUrl + `${pokemon.id}.png`

  return (
    <Container>
      <CardOverlay color={color} />
      <PokemonImg>
        <ImgCardSkeleton src={pokemonImg} alt={pokemon.name} />
      </PokemonImg>
      <PokemonNumber>{formatPokemonId(pokemon.id)}</PokemonNumber>
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonType>
        {pokemon.types.map(({ type }) => (
          <PokemonTypeCard
            key={type.name}
            value={type.name}
            isSelected
            styles={{ cursor: "initial" }}
          />
        ))}
      </PokemonType>
      <PokemonFeatures>
        <PokemonWeight>
          <div>
            <WeightIcon />
            <span>{`${pokemon.weight / 10}`} kg</span>
          </div>
          <span>Peso</span>
        </PokemonWeight>
        <PokemonHeight>
          <div>
            <RulerIcon />
            <span>{`${pokemon.height / 10}`} m</span>
          </div>
          <span>Altura</span>
        </PokemonHeight>
      </PokemonFeatures>
      <MoreDetailsButton color={color} onClick={goToDetails}>
        <BoltIcon />
        Mais Detalhes
      </MoreDetailsButton>
    </Container>
  );
}
