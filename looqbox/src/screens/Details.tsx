import { ArrowLeftOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, Card, Descriptions, Space, Tag, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { toggleFavorite } from "../features/favoritesSlice";
import Container from "../shared/ui/Container/Container";

import { useGetPokemonByNameQuery } from "../features/pokeapi";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

export default function Details() {
  const { name = "" } = useParams();
  const { data, isLoading, isError } = useGetPokemonByNameQuery(name);
  const favs = useAppSelector((s) => s.favorites.names);
  const dispatch = useAppDispatch();

  if (isLoading)
    return (
      <Container>
        <Typography.Text>Carregando…</Typography.Text>
      </Container>
    );
  if (isError || !data)
    return (
      <Container>
        <Typography.Text>Erro ao carregar.</Typography.Text>
      </Container>
    );

  const img = data.sprites.other?.["official-artwork"]?.front_default;
  const stats = data.stats.map((s) => ({
    stat: s.stat.name,
    value: s.base_stat,
  }));

  const isFav = favs.includes(data.name.toLowerCase());

  return (
    <div className="container" style={{ padding: "24px 16px 48px" }}>
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Space>
          <Link to="/">
            <Button icon={<ArrowLeftOutlined />}>Voltar</Button>
          </Link>
          <Typography.Title level={2} style={{ margin: 0, textTransform: "capitalize" }}>
            {data.name}
          </Typography.Title>
          <Button
            type={isFav ? "primary" : "default"}
            icon={isFav ? <StarFilled /> : <StarOutlined />}
            onClick={() => dispatch(toggleFavorite(data.name))}
          >
            {isFav ? "Favorito" : "Favoritar"}
          </Button>
        </Space>

        <Card className="glow-card">
          <Space direction="vertical" size={24} style={{ width: "100%" }}>
            {img && (
              <img
                src={img}
                alt={data.name}
                style={{ width: 260, height: 260, objectFit: "contain" }}
              />
            )}
            <Descriptions column={1} title="Informações">
              <Descriptions.Item label="Tipos">
                <Space wrap>
                  {data.types.map((t) => (
                    <Tag key={t.type.name} color="purple">
                      {t.type.name}
                    </Tag>
                  ))}
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="Habilidades">
                <Space wrap>
                  {data.abilities.map((a) => (
                    <Tag key={a.ability.name}>{a.ability.name}</Tag>
                  ))}
                </Space>
              </Descriptions.Item>
            </Descriptions>

            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats}>
                  <XAxis dataKey="stat" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Space>
        </Card>
      </Space>
    </div>
  );
}
