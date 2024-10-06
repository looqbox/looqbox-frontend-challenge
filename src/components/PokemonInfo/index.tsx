import { getPokemonDetails } from "@/api/get-pokemon-details";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
  BaseInfoContainer,
  ImageCarouselContainer,
  DrawerContainer,
  BaseStatsContainer,
  TypeTag,
  Container,
  ChartContainer,
  TypesColorMap,
  TitleText,
  AbilitiesContainer,
  Ability,
  ErrorContainer,
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
import { fetchPokemonAbility } from "@/api/fetch-pokemon-abilities";
import { useCallback } from "react";

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
  const { data, isLoading, fetchStatus } = useQuery({
    queryFn: () => getPokemonDetails({ pokemonId }),
    queryKey: ["get-details", pokemonId],
    enabled: isOpen,
  });

  const abilitiesQueries = useCallback(() => {
    if (data) {
      const queries = data?.abilities.map((item) => {
        return {
          queryFn: () => fetchPokemonAbility(item.ability.name),
          queryKey: ["fetch-ability", item.ability.name],
          staletime: Infinity,
        };
      });

      return {
        queries,
      };
    }

    return {
      queries: [],
    };
  }, [data]);

  const abilitiesFetchResults = useQueries(abilitiesQueries());

  const abilitiesData = abilitiesFetchResults.map((item) => {
    return {
      data: item.data,
      isLoading: item.isLoading,
    };
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
      {fetchStatus === "paused" && !data ? (
        <ErrorContainer>
          Failed to fetch Pokémon details... Try again later
        </ErrorContainer>
      ) : (
        <>
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
                  <TitleText type={data?.types[0].type.name}>Height</TitleText>
                  {!isLoading && data ? (
                    <span>{data.height / 10} m.</span>
                  ) : (
                    <Skeleton.Button size="small" active />
                  )}
                </div>
                <div>
                  <TitleText type={data?.types[0].type.name}>Weight</TitleText>
                  {!isLoading && data ? (
                    <span>{data.weight / 10} kg</span>
                  ) : (
                    <Skeleton.Button size="small" active />
                  )}
                </div>
                <div>
                  <TitleText type={data?.types[0].type.name}>
                    Base Experience
                  </TitleText>
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
                <TitleText type={data?.types[0].type.name}>
                  Base stats
                </TitleText>
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

          <AbilitiesContainer>
            <TitleText type={data?.types[0].type.name}>Abilities</TitleText>

            <div>
              {abilitiesData.map((item) => (
                <div key={item.data?.id}>
                  {!item.isLoading && item.data ? (
                    <Ability>
                      <span>{item?.data.name.replace("-", " ")}</span>
                      <span>{item?.data.effect_entries[1]?.effect}</span>
                    </Ability>
                  ) : (
                    <Skeleton />
                  )}
                </div>
              ))}
            </div>
          </AbilitiesContainer>
        </>
      )}
    </DrawerContainer>
  );
}
