import { Card, Flex } from "antd";
import { useNavigate } from "react-router-dom";

interface IPokeCardRootProps {
    children: React.ReactNode;
    type: string;
    id: number;
}

export default function PokeCardRoot ({children, type, id}: IPokeCardRootProps) {
    const navigate = useNavigate();

    function handleClickCard(id: number) {
        navigate(`/pokemon/${id}`)
    }

    return(
        <Card
            className="pokemon-card"
            data-type={type}
            style={{position: "relative"}}
            onClick={() => handleClickCard(id)}
        >
            <Flex gap={8} align="center">
                {children}
            </Flex>
        </Card>
    )
}