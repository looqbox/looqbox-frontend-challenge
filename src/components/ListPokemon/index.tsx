import { List } from "antd";
import { Pokemon } from "../../models/Pokemon";
import { CardPokemon } from "../CardPokemon";

type Props = {
    data: Pokemon[],
}

export const ListPokemon = (props: Props) => {
    const { data } = props;
    return (
        <List
            grid={{
                gutter: 40, 
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
            <List.Item key={item.name}>
                <CardPokemon item={item} />
            </List.Item>
            )}
        />
    )
}