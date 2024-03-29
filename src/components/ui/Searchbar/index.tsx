import { Input } from 'antd/lib';
const { Search } = Input;
import { useState } from 'react';

type SearchbarProps = {
    // eslint-disable-next-line
    onSearch: (_name: string) => void;
    placeholder?: string;
}

export default function Searchbar({placeholder, onSearch}: SearchbarProps) {
  const [name, setName] = useState('');

  return (
    <Search
      onSearch={() => onSearch(name)}
      placeholder={placeholder ?? 'Search here'}
      value={name}
      onChange={(e) => setName(e.target.value)}
      size='large'
      style={{marginBottom: '10px'}}
    />);
}