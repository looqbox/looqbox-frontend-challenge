import { Link } from "react-router-dom";
import { Image } from "antd";
import { CardDetails } from "./styles";

export type CardPokemonProps = {
  id: string,
  name: string,
};

const imageBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

const CardPokemon = (props: CardPokemonProps) => {
  const { name, id } = props;
  const title = `#${id} ${name}`;
  const src = `${imageBaseUrl}/${id}.png`;

  return (
    <Link data-testid={`card-link-${name}`} key={title} to={`/details/${name}`}>
      <CardDetails
        hoverable
        title={title}
        cover={
          <Image
            preview={false}
            alt={title}
            src={src}
          />
        }
      />
    </Link>
  );
};

export default CardPokemon;