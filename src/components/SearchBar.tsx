import { Input, message } from "antd";
import { useGetPokemonByNameQuery } from "../state/services/pokemon";
import { useEffect, useState } from "react";
import { useSubmit } from "react-router-dom";
const { Search } = Input;

export default function SearchBar() {
  const [messageApi, contextHolder] = message.useMessage();
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: pokemon,
    error: pokemonError,
    isLoading: pokemonLoading,
  } = useGetPokemonByNameQuery(searchTerm, { skip: searchTerm === "" });

  const submit = useSubmit();
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

  return (
    <>
      {contextHolder}
      <Search
        placeholder="Search for a specific pokémon..."
        enterButton="Search"
        size="large"
        loading={pokemonLoading}
        onSearch={(e) => setSearchTerm(e)}
        onPressEnter={(e) =>
          setSearchTerm((e?.target as HTMLInputElement)?.value)
        }
      />
    </>
  );
}
