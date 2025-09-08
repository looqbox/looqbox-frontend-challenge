import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce as debounce } from '../hooks/debounce';

export function InputSearchPokemonComponent() {
  const [search, setSearch] = useState<string>('');
  const [, setSearchParams] = useSearchParams();

  const debouncedSearch = debounce(search, 500);

  useEffect(() => {
    setSearchParams((searchParam) => {
      const params = new URLSearchParams(searchParam);

      if (debouncedSearch) {
        params.set('name', debouncedSearch); // atualiza apenas a chave certa
      } else {
        params.delete('name'); // remove a chave se estiver vazio
      }

      return params;
    });
  }, [debouncedSearch, setSearchParams]);

  return (
    <Input.Search
      size="middle"
      style={{ fontWeight: 'medium', width: 400 }}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={'Buscar pokémon'}
      allowClear
    />
  );
}
