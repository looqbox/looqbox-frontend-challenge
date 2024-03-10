import { List } from "antd";
import { Pokemon } from "../../models/Pokemon";
import { CardPokemon } from "../CardPokemon";

type Props = {
    data: Pokemon[],
    column?: number,
}

export const ListPokemon = (props: Props) => {
    const { data, column } = props;
    return (
        <List
            grid={{ gutter: 40, column: column || 5 }}
            dataSource={data}
            renderItem={(item) => (
            <List.Item key={item.name}>
                <CardPokemon item={item} />
            </List.Item>
            )}
        />
    )
}