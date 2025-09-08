import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, Col, Flex, Image, Row, Skeleton, Tag, Typography } from "antd";
import { useTranslation } from "react-i18next";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/design-system/ui/chart";

import { capitalize } from "@/core/utils/capitalize";
import { PokemonDto } from "../dtos/pokemon.dto";

type PokemonDetailsProps = {
  pokemon: PokemonDto;
  pokemonIsLoading: boolean;
};

export function PokemonDetails({
  pokemon,
  pokemonIsLoading,
}: PokemonDetailsProps) {
  const { t } = useTranslation();
  const chartData = pokemon?.stats?.map((s) => ({
    stat: capitalize(s?.stat?.name?.split("-")?.join(" ")),
    value: s?.base_stat,
  }));
  const bestStat = pokemon?.stats?.reduce((max, current) => {
    return current?.base_stat > max?.base_stat ? current : max;
  }, pokemon?.stats[0]);

  const chartConfig = {
    value: {
      label: "Value",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  if (pokemonIsLoading) return <Skeleton.Image active />;

  return (
    <Flex vertical gap={40}>
      <Row gutter={20}>
        <Col xs={24} lg={6}>
          <Flex vertical align="center">
            <Flex align="center" gap={40}>
              <Typography.Title className="m-0!">
                {capitalize(pokemon?.name)}
                <br />
              </Typography.Title>
              <Typography.Title className="m-0!">
                {t("features.pokemon.id")} {pokemon?.id}
              </Typography.Title>
            </Flex>

            <Image
              preview={false}
              width={400}
              height={400}
              src={pokemon?.sprites?.front_default}
            />
          </Flex>
        </Col>

        <Col xs={24} lg={18}>
          <Flex vertical gap={40}>
            <Card>
              <Flex vertical gap={30}>
                <Row className="w-full">
                  <Col xs={12}>
                    <Typography.Text className="text-xl!">
                      {t("features.pokemon.height")}:{" "}
                    </Typography.Text>
                    <Typography.Text className="text-xl! font-extrabold">
                      {pokemon?.height / 10}m
                    </Typography.Text>
                  </Col>

                  <Col xs={12}>
                    <Typography.Text className="text-xl!">
                      {t("features.pokemon.base_experience")}:{" "}
                    </Typography.Text>

                    <Typography.Text className="text-xl! font-extrabold">
                      {pokemon?.base_experience}
                    </Typography.Text>
                  </Col>
                </Row>

                <Row className="w-full">
                  <Col xs={12}>
                    <Typography.Text className="text-xl!">
                      {t("features.pokemon.weight")}:{" "}
                    </Typography.Text>
                    <Typography.Text className="text-xl! font-extrabold">
                      {pokemon?.weight / 10}kg
                    </Typography.Text>
                  </Col>

                  <Col xs={12}>
                    <Typography.Text className="text-xl!">
                      {t("features.pokemon.default")}:{" "}
                    </Typography.Text>

                    {pokemon?.is_default ? (
                      <Tag className="text-lg! font-extrabold" color="success">
                        {t("features.pokemon.yes")}
                      </Tag>
                    ) : (
                      <Tag className="text-lg! font-extrabold" color="error">
                        {t("features.pokemon.no")}
                      </Tag>
                    )}
                  </Col>
                </Row>

                <Row className="w-full">
                  <Col xs={12}>
                    <Typography.Text className="text-xl!">
                      {t("features.pokemon.species")}:{" "}
                    </Typography.Text>

                    <Tag color="geekblue" className="text-lg! font-extrabold">
                      {capitalize(pokemon?.species?.name)}
                    </Tag>
                  </Col>
                </Row>
              </Flex>
            </Card>

            <div>
              <Typography.Title level={3}>
                {t("features.pokemon.types")}:
              </Typography.Title>

              <Flex gap={24}>
                {pokemon?.types?.map((t, idx) => (
                  <Tag
                    key={idx}
                    className="text-lg! font-extrabold"
                    color={idx % 2 !== 0 ? "blue" : "cyan"}
                  >
                    {capitalize(t?.type?.name)}
                  </Tag>
                ))}
              </Flex>
            </div>
          </Flex>
        </Col>
      </Row>

      <Card>
        <Typography.Title className="text-center" level={3}>
          {t("features.pokemon.best_stat")}:{" "}
          <Tag color="blue-inverse">
            <Typography.Text className="text-lg!">
              {capitalize(bestStat?.stat?.name)?.split("-")?.join(" ")}
            </Typography.Text>
          </Tag>
        </Typography.Title>

        <ChartContainer
          config={chartConfig}
          className="mx-auto! aspect-square! max-h-[300px]! lg:max-h-[500px]!"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent labelClassName="text-neutral-500! text-lg!" />
              }
            />
            <PolarAngleAxis dataKey="stat" />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="var(--chart-pokemon-2)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </Card>
    </Flex>
  );
}
