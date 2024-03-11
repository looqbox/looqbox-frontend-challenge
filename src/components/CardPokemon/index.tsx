import { Link } from "react-router-dom";
import { Image } from "antd";
import { Pokemon } from "../../models/Pokemon";
import { CardDetails } from "./styles";

type Props = {
    item: Pokemon
}

const imageBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const CardPokemon = (props: Props) => {
  const { name, url } = props.item;

  const getIdFromUrl = () => {
    const splittedUrl = url.split("/");
    const id = splittedUrl[splittedUrl.length - 2];
    return id;
  };

  return (
    <Link to={`/details/${name}`}>
      <CardDetails
        hoverable
        title={`#${getIdFromUrl()} ${name}`}
        cover={
          <Image
            preview={false}
            alt="example"
            src={`${imageBaseUrl}/${getIdFromUrl()}.png`}
          />
        }
      />
    </Link>
  );
};