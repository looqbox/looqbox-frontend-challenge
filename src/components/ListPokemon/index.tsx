import { List } from "antd";
import Pokemon from "../../models/Pokemon";
import CardPokemon from "../CardPokemon";

const imageBaseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

type Props = {
  data: Pokemon[];
  loading: boolean;
};

const ListPokemon = (props: Props) => {
  const { data, loading } = props;

  const getIdOfPokemon = (url: string) => {
    const splittedUrl = url.split("/");
    const id = splittedUrl[splittedUrl.length - 2];
    return id;
  };

  return (
    <List
      loading={loading}
      grid={{
        gutter: 40,
        xs: 2,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      }}
      dataSource={data}
      renderItem={(item) => {
        const id = getIdOfPokemon(item.url);
        const src = `${imageBaseUrl}/${id}.png`;
        return (
          <List.Item key={item.name}>
            <CardPokemon
              name={item.name}
              src={src}
              linkTo={`/details/${item.name}`}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default ListPokemon;
