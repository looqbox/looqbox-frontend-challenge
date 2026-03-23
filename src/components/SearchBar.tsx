import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClear, loading }) => {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
    onClear();
  }

  const handleSearch = () => {
    if (value.trim()) onSearch(value.trim())
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }
  return (
    <div style={{
      display: 'flex',
      maxWidth: 500,
      width: '100%',
      gap: 8
    }}>
      <Input
        placeholder="Pesquise Pokémon por nome ou número..."
        size='large'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,0.25)' }} />}
        suffix={
          value ? (
            <CloseOutlined
              onClick={handleClear}
              style={{ color: 'rgba(0,0,0,0.25)', cursor: 'pointer' }}
            />
          ) : null
        }
        style={{
          border: '2px solid rgba(0,0,0,0.07)',
          borderRadius: 50,
          fontFamily: "'Nunito', sans-serif",
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          fontSize: 15,
        }}
        aria-label='Procurar Pokémon'
      />
      <Button
        type="primary"
        size='large'
        loading={loading}
        onClick={handleSearch}
        style={{
          borderRadius: 50,
          fontWeight: 700,
          fontFamily: "'Nunito', sans-serif",
          background: 'linear-gradient(135deg, #EF5350, #FF7043)',
          border: 'none',
          boxShadow: '0 4px 12px rgba(239,83,80,0.4)',
          minWidth: 120
        }}
        aria-label='Pesquisar'
      >
        Pesquisar
      </Button>
    </div>
  );
};

export default SearchBar;
