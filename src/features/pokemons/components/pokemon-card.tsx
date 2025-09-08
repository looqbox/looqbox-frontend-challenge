import { Card, Col, Flex, Image, Row, Tag, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { capitalize } from "@/core/utils/capitalize";
import { useNavigate } from "@tanstack/react-router";
import { usePokemonDetails } from "../use-cases/use-pokemon-details";
import { pokemonsKeys } from "../constants/pokemons.keys";
import { pokemonsEndpoints } from "../constants/pokemons.endpoints";
import { PokemonDto } from "../dtos/pokemon.dto";

type PokemonCardProps = Partial<PokemonDto>;

export function PokemonCard({ id, name, order, ...rest }: PokemonCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pokemon, pokemonIsLoading } = usePokemonDetails({
    key: [pokemonsKeys.byId, id],
    path: pokemonsEndpoints.byId(id as number),
    enabled: !!id && !order,
  });
  const pokemonDetails = !order ? pokemon : { id, name, order, ...rest };

  return (
    <Card
      loading={pokemonIsLoading}
      onClick={() =>
        navigate({
          to: `/details/${id}`,
        })
      }
      hoverable
      className="hover:scale-95 px-4! md:px-10!"
    >
      <Flex vertical align="center">
        <Image
          height={150}
          preview={false}
          src={pokemonDetails?.sprites?.front_default}
        />

        <Typography.Title level={3}>{capitalize(name)}</Typography.Title>

        <Row gutter={6} className="w-full mt-10">
          <Col span={12} className="text-left">
            <Typography.Text className="font-bold text-lg!">
              {t("features.pokemon.id")}:
            </Typography.Text>

            <Typography.Text>{id}</Typography.Text>
          </Col>

          <Col span={12} className="text-right">
            <Typography.Text className="font-bold text-lg!">
              {t("features.pokemon.type")}:{" "}
            </Typography.Text>

            <Typography.Text>
              {pokemonDetails?.types
                ?.map((t) => capitalize(t.type?.name))
                .join("/")}
            </Typography.Text>
          </Col>
        </Row>

        <Row gutter={6} className="w-full mt-10">
          <Col span={12} className="text-left">
            <Typography.Text className="font-bold text-lg!">
              {t("features.pokemon.species")}:
            </Typography.Text>

            <Tag color="#3B4CCA">
              {capitalize(pokemonDetails?.species?.name)}
            </Tag>
          </Col>

          <Col span={12} className="text-right">
            <Typography.Text className="font-bold text-lg!">
              {t("features.pokemon.base_experience")}:
            </Typography.Text>

            <Typography.Text>{pokemonDetails?.base_experience}</Typography.Text>
          </Col>
        </Row>
      </Flex>
    </Card>
  );
}
