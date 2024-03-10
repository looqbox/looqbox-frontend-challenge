import { Card } from "antd";
import { Pokemon } from "../../models/Pokemon";
import { Link } from "react-router-dom";

type Props = {
    item: Pokemon
}

const imageBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export const CardPokemon = (props: Props) => {
    const { name, url } = props.item;

    const getIdFromUrl = () => {
        const splittedUrl = url.split('/');
        const id = splittedUrl[splittedUrl.length - 2];
        return id;
    }

    return (
        <Link to={`/details/${name}`}>
            <Card
                hoverable
                title={`#${getIdFromUrl()} ${name}`}
                style={{ textTransform: 'capitalize', textAlign: 'center', borderColor: '#e5e5e5' }}
                cover={
                    <img
                        alt="example"
                        src={`${imageBaseUrl}/${getIdFromUrl()}.png`}
                    />
                }
            />
        </Link>
    )
}