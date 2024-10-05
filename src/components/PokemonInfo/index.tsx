import { getPokemonDetails } from "@/api/get-pokemon-details";
import { useQuery } from "@tanstack/react-query";
import {
  BaseInfoContainer,
  ImageCarouselContainer,
  DrawerContainer,
  BaseStatsContainer,
  TypeTag,
  Container,
  ChartContainer,
  TypesColorMap,
} from "./styles";
import { Skeleton, Spin } from "antd";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface PokemonInfoProps {
  isOpen: boolean;
  pokemonId: number;
  pokemonName: string;
  close: () => void;
}

export function PokemonInfo({
  isOpen,
  pokemonId,
  pokemonName,
  close,
}: PokemonInfoProps) {
  const { data, isLoading } = useQuery({
    queryFn: () => getPokemonDetails({ pokemonId }),
    queryKey: ["get-details", pokemonId],
    enabled: isOpen,
  });

  const statsData = data?.stats.map((stat) => {
    return {
      name: stat.stat.name,
      value: stat.base_stat,
    };
  });

  return (
    <DrawerContainer
      width={700}
      closable
      title={pokemonName}
      open={isOpen}
      onClose={close}
      aria-describedby={data?.types[0].type.name}
    >
      <BaseInfoContainer>
        {!isLoading && data ? (
          <ImageCarouselContainer arrows infinite>
            <div>
              <img src={data.sprites.front_default} />
            </div>
            <div>
              <img src={data.sprites.back_default} />
            </div>
          </ImageCarouselContainer>
        ) : (
          <Container>
            <Skeleton.Image active />
          </Container>
        )}

        <BaseStatsContainer>
          <section>
            <div>
              <h3>Height</h3>
              {!isLoading && data ? (
                <span>{data.height / 10} m.</span>
              ) : (
                <Skeleton.Button size="small" active />
              )}
            </div>
            <div>
              <h3>Weight</h3>
              {!isLoading && data ? (
                <span>{data.weight / 10} kg</span>
              ) : (
                <Skeleton.Button size="small" active />
              )}
            </div>
            <div>
              <h3>Base Experience</h3>
              {!isLoading && data ? (
                <span>{data.base_experience}</span>
              ) : (
                <Skeleton.Button size="small" active />
              )}
            </div>
          </section>
          <section>
            {!isLoading && data ? (
              <>
                {data.types.map((slot) => (
                  <TypeTag key={slot.type.name} type={slot.type.name} />
                ))}
              </>
            ) : (
              <Skeleton.Input active />
            )}
          </section>
        </BaseStatsContainer>
      </BaseInfoContainer>

      <ChartContainer>
        {!isLoading && data ? (
          <>
            <h3>Base stats</h3>
            <ResponsiveContainer>
              <RadarChart outerRadius="80%" data={statsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <Tooltip />
                <Radar
                  name={pokemonName}
                  dataKey="value"
                  stroke={TypesColorMap[data.types[0].type.name]}
                  fill={TypesColorMap[data.types[0].type.name]}
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </>
        ) : (
          <Spin size="large" />
        )}
      </ChartContainer>
    </DrawerContainer>
  );
}
