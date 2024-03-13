import { List } from "antd";
import Pokemon from "../../models/Pokemon";
import CardPokemon from "../CardPokemon";

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
      renderItem={(item) => (
        <List.Item key={item.name}>
          <CardPokemon id={getIdOfPokemon(item.url)} name={item.name} />
        </List.Item>
      )}
    />
  );
};

export default ListPokemon;
