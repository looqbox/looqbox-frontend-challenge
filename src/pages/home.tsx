import {
  Button,
  Card,
  Divider,
  Dropdown,
  Flex,
  Input,
  Layout,
  PaginationProps,
  Space,
} from "antd";
import {
  useGetPokemonByNameQuery,
  useGetPokemonHabitatByNameQuery,
  useGetPokemonHabitatsListQuery,
  useGetPokemonListQuery,
} from "../services/pokemon";
import { Link, useSubmit } from "react-router-dom";
import { Dispatch, cloneElement, useEffect, useState } from "react";
const { Search } = Input;
const { Content } = Layout;
import { message } from "antd";
import { Pagination } from "antd";
import { ReferenceToEndpoint } from "../models/pokemon.model";

export default function Home() {
  const [pagination, setPagination] = useState({
    offset: 0,
    pageSize: 12,
  });
  const { offset, pageSize } = pagination;
  const [searchTerm, setSearchTerm] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [qParams, setQParams] = useState<string | null>(`limit=${pageSize}`);

  const {
    data: pokemonList,
    isLoading: loadingPokemonList,
    error: pokemonListError,
  } = useGetPokemonListQuery(qParams);

  const [selectedHabitat, setSelectedHabitat] = useState("");
  const { data: habitatInfo, error: habitatInfoError } =
    useGetPokemonHabitatByNameQuery(selectedHabitat, {
      skip: selectedHabitat === "",
    });

  const [pokemons, setPokemons] = useState<{
    renderPokemons: ReferenceToEndpoint[];
    totalCount: number;
  }>({
    renderPokemons: pokemonList?.results ?? [],
    totalCount: pokemonList?.count ?? 0,
  });

  useEffect(() => {
    if (selectedHabitat === "") {
      setPokemons({
        renderPokemons:
          pokemonList?.results ?? [],
        totalCount: pokemonList?.count ?? 0,
      });
    }
  }, [offset, pageSize, pokemonList, selectedHabitat]);

  const {
    data: pokemon,
    error: pokemonError,
    isLoading: pokemonLoading,
  } = useGetPokemonByNameQuery(searchTerm, { skip: searchTerm === "" });

  useEffect(() => {
    if (selectedHabitat !== "") {
      const pokesToQuery =
        habitatInfo?.pokemon_species.slice(offset, offset + pageSize) ?? [];
      setPokemons({
        renderPokemons: pokesToQuery,
        totalCount: habitatInfo?.pokemon_species?.length ?? 0,
      });
    }
  }, [habitatInfo?.pokemon_species, offset, pageSize, selectedHabitat]);

  const submit = useSubmit();

  const goToPokemon = (nameOrId: string) => {
    setSearchTerm(nameOrId);
  };

  useEffect(() => {
    if (pokemon) {
      submit(searchTerm, {
        method: "post",
        action: `pokemon/${searchTerm}`,
        encType: "text/plain",
      });
    }
    if (pokemonError) {
      messageApi.open({
        type: "error",
        content:
          "Pokémon not found. Check your spelling\nor try a different one.",
      });
    }
  }, [messageApi, pokemon, pokemonError, searchTerm, submit]);

  const onPageChange: PaginationProps["onChange"] = (page, pageSize) => {
    const offset = (page - 1) * pageSize;

    const searchParams = new URLSearchParams({
      offset: offset.toString(),
      limit: pageSize.toString(),
    });

    setPagination({ offset, pageSize });

    if (selectedHabitat === "") {
      setQParams(searchParams.toString());
    }
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  if (loadingPokemonList) return <p>Loading pókemons...</p>;
  if (pokemonListError)
    return (
      <p>
        Error fetching pokémons. Check your internet connection and reload the
        page.
      </p>
    );

  return (
    <Layout>
      <Content style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Sorter setSelectedHabitat={setSelectedHabitat} />
        <Search
          placeholder="Search for a specific pokémon..."
          enterButton="Search"
          size="large"
          loading={pokemonLoading}
          onSearch={(e) => goToPokemon(e)}
          onPressEnter={(e) =>
            goToPokemon((e?.target as HTMLInputElement)?.value)
          }
        />
        <Flex wrap="wrap" justify="center" gap="24px">
          {pokemons?.renderPokemons.map((poke) => {
            return <PokemonCard name={poke?.name} key={poke.name} />;
          })}
        </Flex>
        <Pagination
          pageSizeOptions={[12, 24, 36, 60, 96]}
          defaultPageSize={pageSize}
          defaultCurrent={1}
          total={pokemons?.totalCount}
          onChange={onPageChange}
          showSizeChanger
        />
      </Content>
      {contextHolder}
    </Layout>
  );
}

function PokemonCard({ name }: { name: string }) {
  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) return <div>Loading {name}...</div>;
  if (error) return <div>Error: failed to fetch {name}</div>;

  return (
    <Link to={`pokemon/${pokemon?.name}`}>
      <Card
        title={pokemon?.name}
        style={{ width: "376px" }}
        extra={pokemon?.id}
      >
        <p>{pokemon?.name}</p>
      </Card>
    </Link>
  );
}

function Sorter({
  setSelectedHabitat,
}: {
  setSelectedHabitat: Dispatch<string>;
}) {
  const { data: habitatList, error: habitatListError } =
    useGetPokemonHabitatsListQuery();

  const items = habitatList?.results.map((result, i) => ({
    key: i,
    label: result.name,
  }));

  const contentStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "10px 12px 10px -15px rgba(0,0,0,0.75)",
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
  };

  return (
    <Flex>
      <Dropdown
        menu={{
          items,
          selectable: true,
          onSelect: ({ key }) => {
            setSelectedHabitat(habitatList?.results?.[Number(key)].name ?? "");
          },
        }}
        placement="bottom"
        dropdownRender={(menu) => (
          <div style={contentStyle}>
            {cloneElement(menu as React.ReactElement, { style: menuStyle })}
            <Divider style={{ margin: 0 }} />
            <Space style={{ padding: 8 }}>
              <Button type="default" onClick={() => setSelectedHabitat("")}>
                Clear
              </Button>
            </Space>
          </div>
        )}
      >
        <Button>Habitats</Button>
      </Dropdown>
    </Flex>
  );
}
