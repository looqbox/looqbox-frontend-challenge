import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { fetchPokemonByName, pokemonsFiltered, resetToInitial, setIsTyping } from "../store/pokemonSlice";


const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
      const text = inputValue.trim().toLowerCase();

      if (!text) {
        dispatch(resetToInitial());
        dispatch(setIsTyping(false));
        return;
      }
      if (text.length >= 3) {
        dispatch(setIsTyping(true));
      } else {
        dispatch(pokemonsFiltered(text));
        dispatch(setIsTyping(false));
      }
    }, [inputValue, dispatch]);

    const handlePressEnter = () => {
      const text = inputValue.trim().toLowerCase();
      if (text.length > 0) {
        dispatch(setIsTyping(false));
        dispatch(fetchPokemonByName(text));
      }
    };

  return (
    <div className="max-w-md mx-auto mb-10">
      <Input
        placeholder="Gotta type the full name, then hit Enter!"
        size="large"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={handlePressEnter}
        prefix={<SearchOutlined className="text-gray-400" />}
        className="rounded-full px-6 shadow-md"
        allowClear
      />
    </div>
  );
};

export default SearchBar;