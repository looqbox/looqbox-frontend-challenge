import { Input } from 'antd';
import { useState } from 'react';
import * as S from './styles';
type Props = {
  onResult: (name: string) => void;
};

function SearchBar({ onResult }: Props) {
  const [value, setValue] = useState('');

  function handleSearch(raw?: string) {
    const name = (raw ?? value).trim().toLowerCase();
    onResult(name);
  }

  return (
    <S.Container data-testid="search-input">
      <Input.Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={handleSearch}
        allowClear
        placeholder="Pesquisar Pokémon"
        enterButton
      />
    </S.Container>
  );
}

export default SearchBar;
