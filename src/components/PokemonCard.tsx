import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../state/services/pokemon";
import { Card, Flex, Skeleton, Tooltip } from "antd";
import svgMap from "../utils/svgMap";
import { useEffect, useRef, useState } from "react";

export default function PokemonCard({ name }: { name: string }) {
  const targetElement = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const {
    data: pokemon,
    error,
    isLoading,
  } = useGetPokemonByNameQuery(name, { skip: !isInView });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    });
    if (targetElement?.current) observer.observe(targetElement?.current);
    return () => observer.disconnect();
  }, []);

  if (error) return <div>Error: failed to fetch {name}</div>;

  return (
    <Link to={`pokemon/${pokemon?.name}`}>
      <Card
        title={pokemon?.name}
        style={{ width: "376px", height: "400px" }}
        extra={pokemon?.id}
        ref={targetElement}
      >
        <Skeleton loading={!isInView || isLoading} active></Skeleton>
        <img
          style={{ width: `50%`, margin: `auto`, display: "block" }}
          src={pokemon?.sprites.front_default}
        />
        <Flex gap="12px" justify="center" align="center">
          {pokemon?.types.map((type) => {
            return (
              <Tooltip title={type.type.name} key={type.type.name}>
                <div
                  style={{
                    background: svgMap[type.type.name].color,
                    width: `36px`,
                    height: "36px",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    src={svgMap[type.type.name].svg}
                    style={{
                      background: svgMap[type.type.name].color,
                      width: `60%`,
                      margin: " 20%",
                      objectFit: "contain",
                      height: "60%",
                    }}
                  />
                </div>
              </Tooltip>
            );
          })}
        </Flex>
      </Card>
    </Link>
  );
}
