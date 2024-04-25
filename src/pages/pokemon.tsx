import { Link, useLocation, useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../state/services/pokemon";
import { Card, Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import svgMap from "../utils/svgMap";
import { CSSProperties } from "react";
import chevronLeft from "../assets/chevronLeft.svg";

export default function PokemonPage() {
  const { name } = useParams();
  const { data, isLoading, isError } = useGetPokemonByNameQuery(name ?? "");
  const { state } = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  const typeColor = svgMap[data?.types[0].type.name ?? "normal"].color;

  const types = data?.types.map((type) => type.type.name);

  return (
    <Layout
      style={{ minHeight: "100vh", minWidth: "100vw", position: "relative" }}
    >
      <Link to={`/?${state}`}>
        <Flex
          justify="center"
          align="center"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            backgroundColor: "white",
            borderRadius: "100%",
            padding: "8px",
            width: "36px",
            height: "36px",
            boxShadow: "rgba(0, 0, 0, 0.75) 0px 0 4px 0px",
          }}
        >
          <img src={chevronLeft} />
        </Flex>
      </Link>
      <Content>
        <Card
          style={{
            maxWidth: `450px`,
            margin: "24px auto",
            boxShadow: `${typeColor} 2px 5px 8px 0px`,
            border: `6px solid ${typeColor}`,
          }}
        >
          <div
            style={{
              textAlign: `center`,
              letterSpacing: `2px`,
              marginBottom: "24px",
            }}
          >
            <Title>{data?.name.toUpperCase()}</Title>
            <p>{types?.join(" & ")}</p>
          </div>
          <Flex
            justify="center"
            align="center"
            style={{
              width: `180px`,
              height: `180px`,
              margin: "0 auto",
              borderRadius: `100%`,
              boxShadow: "rgba(0, 0, 0, 0.75) 2px 5px 8px 0px",
              border: `4px solid ${typeColor}`,
            }}
          >
            <img
              style={{
                width: `70%`,
                height: `70%`,
                display: `block`,
                objectFit: "cover",
              }}
              src={data?.sprites.front_default}
              alt={data?.name}
            />
          </Flex>
          <Flex vertical gap="10px" style={{ marginTop: "24px" }}>
            {data?.stats.map((stat) => (
              <ColoredBar
                typeColor={typeColor}
                title={stat.stat.name}
                key={stat.stat.name}
                value={stat.base_stat}
              />
            ))}
          </Flex>
        </Card>
      </Content>
    </Layout>
  );
}

const ColoredBar = ({
  title,
  value,
  typeColor,
}: {
  title: string;
  value: number;
  typeColor: string;
}) => {
  const percent = (value / 255) * 100;
  const barStyle: CSSProperties = {
    backgroundColor: typeColor,
    width: "100%",
    borderRadius: "12px",
    border: `3px solid ${typeColor}`,
    height: "20px",
    display: "inline-block",
    position: "relative",
    zIndex: 1,
  };
  const fillStyle: CSSProperties = {
    width: `${percent}%`,
    height: "100%",
    opacity: `40%`,
    position: "absolute",
    backgroundColor: "black",
    left: "0",
    top: "0",
    borderRadius: "12px",
    zIndex: 2,
  };

  return (
    <div>
      <Flex
        justify="space-between"
        style={{ fontSize: "10px", fontWeight: "bold" }}
      >
        <span>
          {title.toUpperCase()} · <span>{value}</span>
        </span>
        <span>255</span>
      </Flex>
      <div style={barStyle}>
        <div style={fillStyle}></div>
      </div>
    </div>
  );
};
