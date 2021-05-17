import React, { useCallback, useState } from 'react';

import { usePokemon } from 'shared/contexts/pokemon';

import SearchBar from 'shared/components/molecules/Search';

import * as s from './styles';

const Header = () => {
  const { searchForASinglePokemon, cleanSearchValue } = usePokemon();
  const [searchValue, setSearchValue] = useState('');

  const handleGetSearchValue = useCallback(
    e => {
      const { value } = e.target;

      setSearchValue(value);

      if (!value) {
        cleanSearchValue();
      }
    },
    [cleanSearchValue],
  );

  const handleSearch = useCallback(
    async (value: string) => {
      await searchForASinglePokemon(value);
    },
    [searchForASinglePokemon],
  );

  return (
    <s.Container>
      <s.Background>
        <h1>Pokedex</h1>
        <SearchBar
          onChange={handleGetSearchValue}
          onSearch={() => handleSearch(searchValue)}
        />
      </s.Background>
    </s.Container>
  );
};

export default Header;
