import type React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { searchPokemon } from "../store/pokemonSlice";
import { message, Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.pokemon);

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        await dispatch(searchPokemon(searchTerm.trim())).unwrap();
        message.success(`Found ${searchTerm}`);
      } catch (err) {
        message.error("Pokemon not found. try another name or ID");
      }
    } else {
      message.warning("Please enter a Pokemon name or ID");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <form
      onKeyDown={handleKeyPress}
      className="relative mx-auto justify-center flex items-center"
    >
      <Space.Compact className="relative h-10 w-100 text-(--muted-foreground)">
        <Input
          style={{
            borderColor: "hsl(0 72% 51%)",
            borderRadius: "2rem 0 0 2rem",
            paddingLeft: "1rem",
          }}
          placeholder="Search Pokémon by name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="large"
          disabled={loading}
          allowClear
        />
        <Button
          style={{
            borderColor: "hsl(0 72% 51%)",
            borderRadius: "0 2rem 2rem 0",
          }}
          icon={<SearchOutlined />}
          onClick={handleSearch}
          size="large"
          loading={loading}
        />
      </Space.Compact>
    </form>
  );
};

export default SearchBar;
