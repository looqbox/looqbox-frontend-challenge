import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Empty, Typography, Button, Skeleton } from 'antd';
import { getPokemonByName } from '../api/pokemonApi';
import PokemonTypes from '../components/PokemonTypes';
import PokemonStats from '../components/PokemonStats';

const { Title } = Typography;

const Details = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const data = await getPokemonByName(name!);
        setPokemon(data);
        setError(null);
      } catch {
        setError('Pokémon não encontrado.');
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [name]);

  if (loading) {
    return (
      <div style={{ maxWidth: 600, margin: '2rem auto' }}>
        <Skeleton active avatar paragraph={{ rows: 8 }} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ maxWidth: 500, margin: '2rem auto', textAlign: 'center' }}>
        <Link to="/">
          <Button type="default" style={{ marginTop: '1rem' }}>
            ← Voltar
          </Button>
        </Link>
        <Empty
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          imageStyle={{ height: 80 }}
          description="Nenhum Pokémon encontrado"
        />
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <Link to="/">
        <Button type="default" style={{ marginBottom: '1rem' }}>
          ← Voltar
        </Button>
      </Link>

      <div
        style={{
          maxWidth: 600,
          margin: '0 auto',
          padding: '2rem',
          borderRadius: '12px',
          background: '#fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          style={{ height: 200, objectFit: 'contain' }}
        />

        <Title level={2} style={{ textTransform: 'capitalize' }}>
          {pokemon.name} <span style={{ fontSize: '1rem', color: '#888' }}>#{pokemon.id}</span>
        </Title>

        <PokemonTypes types={pokemon.types.map((t: any) => t.type.name)} />

        <p>
          <strong>Altura:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Peso:</strong> {pokemon.weight / 10} kg
        </p>

        <Title level={4}>Habilidades</Title>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {pokemon.abilities.map((a: any) => (
            <li key={a.ability.name}>{a.ability.name}</li>
          ))}
        </ul>

        <PokemonStats
          stats={pokemon.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat,
          }))}
        />
      </div>
    </div>
  );
};

export default Details;
