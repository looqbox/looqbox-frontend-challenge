import { Link } from "react-router-dom";
import { Image } from "antd";
import { CardDetails } from "./styles";

type Props = {
  id: string,
  name: string,
};

const imageBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

const CardPokemon = (props: Props) => {
  const { name, id } = props;
  const title = `#${id} ${name}`;
  const src = `${imageBaseUrl}/${id}.png`;

  return (
    <Link to={`/details/${name}`}>
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