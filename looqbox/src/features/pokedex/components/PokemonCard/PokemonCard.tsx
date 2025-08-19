import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { Cover } from "./PokemonCard.styles";

type Props = { name: string; imageUrl: string };
export default function PokemonCard({ name, imageUrl }: Props) {
  const nav = useNavigate();
  return (
    <Card
      hoverable
      onClick={() => nav(`/pokemon/${name}`)}
      style={{
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(111,79,242,.15)",
      }}
      cover={<Cover loading="lazy" src={imageUrl} alt={name} />}
    >
      <Typography.Text strong style={{ textTransform: "capitalize" }}>
        {name}
      </Typography.Text>
    </Card>
  );
}
