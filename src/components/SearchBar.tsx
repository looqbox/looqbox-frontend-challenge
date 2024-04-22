import { useState } from "react";
import { AutoComplete, Input } from "antd";
import { IconPokeball } from "@tabler/icons-react";
import PokemonNames from "../data/pokemon_names.json";

const { Search } = Input;

type Options = {
  value: string;
  label: string;
};

const initialOptions: Options[] = PokemonNames.map((pokemon) => ({
  value: pokemon.name,
  label: pokemon.name,
}));

const searchResult = (query: string): Options[] => {
  return PokemonNames.filter((pokemon) =>
    pokemon.name
      .toLowerCase()
      .split(" ")
      .some((word) => word.includes(query.toLowerCase()))
  ).map((pokemon) => ({
    value: pokemon.name,
    label: pokemon.name,
  }));
};

interface SearchBarProps {
  onSubmitSearch: (name: string) => void;
  placeholder?: string;
}

function SearchBar({ onSubmitSearch, placeholder }: SearchBarProps) {
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState<Options[]>(initialOptions);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <div className="w-full max-w-[480px]">
      <AutoComplete
        className="w-full"
        value={value}
        options={options}
        onChange={setValue}
        onSelect={(value) => onSubmitSearch(value.toLowerCase())}
        onSearch={handleSearch}>
        <Search
          size="large"
          placeholder={placeholder}
          enterButton={
            <IconPokeball
              size={30}
              className="text-slate-100"
              onClick={() => onSubmitSearch(value.toLowerCase())}
            />
          }
        />
      </AutoComplete>
    </div>
  );
}

export default SearchBar;
