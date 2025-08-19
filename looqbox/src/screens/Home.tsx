import { Card, Col, Empty, Pagination, Row, Spin, Typography, message } from "antd";
import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetPokemonByNameQuery, useGetPokemonListQuery } from "../features/pokeapi";
import Hero from "../features/pokedex/components/Hero/Hero";
import Container from "../shared/ui/Container/Container";

const PAGE_SIZE = 24;

export default function Home() {
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const page = Number(params.get("page") ?? "1");
  const offset = (page - 1) * PAGE_SIZE;

  const listQ = useGetPokemonListQuery({ offset, limit: PAGE_SIZE }, { skip: !!q });
  const singleQ = useGetPokemonByNameQuery(q, { skip: !q });

  const isLoading = listQ.isLoading || singleQ.isLoading;
  const error = listQ.error || singleQ.error;

  const data = useMemo(() => {
    if (q) {
      if (singleQ.data) {
        return {
          count: 1,
          results: [
            {
              name: singleQ.data.name,
              url: `https://pokeapi.co/api/v2/pokemon/${singleQ.data.id}/`,
            },
          ],
        };
      }
      return { count: 0, results: [] };
    }
    return listQ.data ?? { count: 0, results: [] };
  }, [q, singleQ.data, listQ.data]);

  if (error) message.error("Falha ao carregar. Tente novamente.");

  return (
    <>
      <Hero />
      <Container>
        {isLoading ? (
          <div style={{ display: "grid", placeItems: "center", height: 200 }}>
            <Spin />
          </div>
        ) : data.results.length === 0 ? (
          <Empty description={q ? "Nada encontrado" : "Sem dados"} />
        ) : (
          <>
            <Row gutter={[16, 16]}>
              {data.results.map((p) => {
                const name = p.name;
                const id = parseInt(p.url.split("/").filter(Boolean).pop() || "0", 10);
                const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id || ""}.png`;
                return (
                  <Col xs={12} sm={8} md={6} lg={4} key={name}>
                    <Card
                      hoverable
                      className="glow-card"
                      onClick={() => nav(`/pokemon/${name}`)}
                      cover={
                        <img
                          loading="lazy"
                          src={img}
                          alt={name}
                          style={{
                            padding: 16,
                            height: 180,
                            objectFit: "contain",
                          }}
                        />
                      }
                    >
                      <Typography.Text strong style={{ textTransform: "capitalize" }}>
                        {name}
                      </Typography.Text>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            {!q && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 24,
                }}
              >
                <Pagination
                  current={page}
                  pageSize={PAGE_SIZE}
                  total={data.count}
                  showSizeChanger={false}
                  onChange={(p) => setParams({ page: String(p) })}
                />
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
}
