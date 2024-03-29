import { Input } from 'antd/lib';
const { Search } = Input;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PokemonService from '@/modules/pokemon/service';
import { setPokemon, removePokemon } from '@/modules/pokemon/store';

type SearchbarProps = {
    placeholder?: string;
}

export default function Searchbar({placeholder}: SearchbarProps) {
  const [name, setName] = useState('');
  const service = new PokemonService();
  const dispatch = useDispatch();

  async function handleSearch() {
    try{
      const pokemon = await service.getDetails(name);
      dispatch(setPokemon(pokemon));
    }catch(e) {
      dispatch(removePokemon());
    }
  }

  return (
    <Search
      onSearch={handleSearch}
      placeholder={placeholder ?? 'Search here'}
      value={name}
      onChange={(e) => setName(e.target.value)}
      size='large'
      style={{marginBottom: '10px'}}
    />);
}