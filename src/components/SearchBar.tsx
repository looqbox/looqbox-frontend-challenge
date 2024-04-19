import { IconPokeball } from "@tabler/icons-react";
import { Input } from "antd";

const { Search } = Input;

function SearchBar() {
  return (
    <div className="w-full max-w-[480px]">
      <Search
        placeholder="Buscar pokémon"
        size="large"
        enterButton={<IconPokeball size={30} className="text-slate-100" />}
      />
    </div>
  );
}

export default SearchBar;
