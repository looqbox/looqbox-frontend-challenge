import { List } from "antd";
import Pokemon from "../../models/Pokemon";
import CardPokemon from "../CardPokemon";

type Props = {
    data: Pokemon[],
    loading: boolean,
}

const ListPokemon = (props: Props) => {
  const { data, loading } = props;
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
          <CardPokemon item={item} />
        </List.Item>
      )}
    />
  );
};

export default ListPokemon;