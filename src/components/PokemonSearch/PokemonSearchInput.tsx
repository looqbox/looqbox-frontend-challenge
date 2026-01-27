import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

type Props = {
  placeholder?: string;
  query: string;
  onSubmitQuery: (q: string) => void;
  onClear?: () => void;
};

/**
 * Controlled search input for Pokémon search.
 *
 * Responsibilities:
 * - Sync input value with URL state
 * - Auto-clear search when input is emptied
 * - Delegate actual search handling to parent
 */
export function PokemonSearchInput({ placeholder, query, onSubmitQuery, onClear }: Props) {
  const [value, setValue] = useState(query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  function handleChange(next: string) {
    setValue(next);

    if (next === '') {
      onSubmitQuery('');
      onClear?.();
    }
  }

  function submit(raw: string) {
    onSubmitQuery(raw.trim());
  }

  function clear() {
    setValue('');
    onSubmitQuery('');
    onClear?.();
  }

  return (
    <SearchBar
      value={value}
      placeholder={placeholder ?? 'Search by name (e.g., pikachu, mr mime)'}
      onChange={handleChange}
      onSearch={submit}
      onClear={clear}
    />
  );
}
