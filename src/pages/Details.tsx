import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemon';
import { formatPokemonId, getEmojiFromColor, getTypeColor } from '../utils.ts';
import { PokemonSpecies } from '../types';
import { pokemonService } from '../services/pokemonService';
import { Spin, Button, Typography, Tag, Card, Row, Col, Divider, Tabs } from 'antd';
import ErrorMessage from '../components/ErrorMessage';
import { ArrowLeftOutlined, StarFilled } from '@ant-design/icons';
import TypeBadge from '../components/TypeBadge';
import StatusBar from '../components/StatusBar';
import StatusChart from '../components/StatusChart';

const { Text, Title } = Typography;

const Details: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { pokemon, loading, error } = usePokemonDetails(name || '');
  const [species, setSpecies] = useState<PokemonSpecies | null>(null);
  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    if (pokemon) {
      pokemonService.getSpecies(pokemon.id).then(setSpecies).catch(() => setSpecies(null));
    }
  }, [pokemon]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <Spin size='large' tip="Carregando..." />;
      </div>
    )
  }

  if (error || !pokemon) {
    return (
      <div style={{ padding: 60 }}>
        <ErrorMessage message={error || 'Pokemon não encontrado'} onRetry={() => navigate('/home')} />
      </div>
    )
  }

  const primaryColor = pokemon?.types[0].type.name || 'normal';
  const color = getTypeColor(primaryColor);

  const image = shiny
    ? pokemon.sprites.other['official-artwork'].front_shiny || pokemon.sprites.front_shiny
    : pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  const genus = species?.genera.find((g) => g.language.name === 'en')?.genus || 'Unknown';

  const totalStats = pokemon.stats.reduce((sum, s) => sum + s.base_stat, 0);

  const description = species?.flavor_text_entries.find((e) => e.language.name === 'en')?.flavor_text.replace(/\f/g, ' ') || "Descrição Indisponível";


  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fc' }}>
      <div style={{
        background: `linear-gradient(135deg, ${color}dd 0%, ${color} 100%)`,
        padding: '24px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: -60,
          right: -40,
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: '50px solid rgba(255,255,255, 0.08)',
          pointerEvents: 'none',
        }}
        />
        <div style={{
          position: 'absolute',
          bottom: -80,
          left: '-30%',
          width: 220,
          height: 220,
          borderRadius: '50%',
          border: '35px solid rgba(255,255,255, 0.06)',
          pointerEvents: 'none',
        }}
        />

        <Button
          onClick={() => navigate('/home')}
          icon={<ArrowLeftOutlined />}
          style={{
            marginBottom: 24,
            marginTop: 16,
            background: 'rgba(255,255,255, 0.2)',
            color: '#fff',
            fontWeight: 700,
            fontFamily: "'Nunito', sans-serif",
            border: 'none',
            borderRadius: 50,
          }}
        >
          Voltar
        </Button>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
        >
          <div >
            <Text style={{ color: 'rgba(255,255,255, 0.9)', fontSize: 13, fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>
              {formatPokemonId(pokemon.id)}
            </Text>
            <Title style={{
              color: '#fff',
              fontSize: 36,
              fontWeight: 900,
              fontFamily: "'Nunito', sans-serif",
              margin: '4px 0 8px',
              textTransform: 'capitalize',
              textShadow: '0px 2px 10px rgba(0,0,0,0.2)',
            }}>
              {pokemon.name}
            </Title>
            {genus && (
              <Text style={{ color: 'rgba(255,255,255, 0.9)', fontSize: 16, fontStyle: 'italic', fontFamily: "'Nunito', sans-serif" }}>
                {genus}
              </Text>
            )}
            <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap', }}>
              {pokemon.types.map((t) => (
                <TypeBadge key={t.type.name} type={t.type.name} />
              ))}
              {species?.is_legendary && <Tag color='gold' style={{ borderRadius: 20, fontWeight: 700 }}>⭐ Legendary</Tag>}
              {species?.is_mythical && <Tag color='purple' style={{ borderRadius: 20, fontWeight: 700 }}>✨ Mythical</Tag>}

            </div>
          </div>
          {image ? (<div style={{ position: 'relative' }}>
            <Button
              onClick={() => setShiny(!shiny)}
              icon={<StarFilled />}
              size='small'
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: shiny ? '#FFD700' : 'rgba(255,255,255, 0.3)',
                color: shiny ? '#333' : '#fff',
                border: 'none',
                borderRadius: 50,
                fontWeight: 700,
                fontFamily: "'Nunito', sans-serif",
                zIndex: 1,
              }}
              title={shiny ? 'Alterar para Normal' : 'Alterar para Shiny'}
            >
              {shiny ? 'Shiny' : 'Normal'}
            </Button>
            <img
              src={image || 'Imagem indisponível'}
              alt={pokemon.name}
              style={{
                width: 160,
                height: 160,
                objectFit: 'contain',
                marginTop: 20,
              }}
            />
          </div>) : (
            <Text
              style={{
                display: 'block',
                color: '#000',
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 0.8
              }}
            >Imagem indisponível
            </Text>
          )}
        </div>
      </div>
      <div style={{
        maxWidth: 900,
        margin: '-40px auto 40px',
        padding: '0 16px'
      }}>
        <Card
          style={{
            border: 'none',
            borderRadius: 24,
            boxShadow: '0 8px 40px rgba(0,0,0,0.1)'
          }}
          styles={{ body: { padding: '24px 28px' } }}
        >
          <Row gutter={16} style={{ marginBottom: 24 }}>
            {
              [
                { label: 'Altura', value: `${(pokemon.height / 10).toFixed(1) || 'Indiponível'} m` },
                { label: 'Peso', value: `${(pokemon.weight / 10).toFixed(1) || 'Indiponível'} kg` },
                { label: 'XP Base', value: `${pokemon.base_experience || "Indiponível"}` },
                { label: 'Status Total', value: `${totalStats || 'Indiponível'}` },

                {}
              ].map(({ label, value }) => (
                <Col key={label} span={6}>
                  <div style={{ textAlign: 'center', padding: '12 8px', background: `${color}22`, borderRadius: 14 }}>
                    <Text style={{ display: 'block', color: '#999', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                      {label}
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 900, color: color, fontFamily: "'Space Mono', monospace" }}>
                      {value}
                    </Text>
                  </div>
                </Col>
              ))
            }
          </Row>
          {description && (
            <div style={{ marginBottom: 24 }}>
              <Text style={{ fontSize: 14, fontFamily: "'Nunito', sans-serif", fontStyle: 'italic' }}>
                {`"${description}"`}
              </Text>
              <Divider />
            </div>
          )}
          <Tabs
            defaultActiveKey='stats'
            items={[
              {
                key: 'stats',
                label: '📊 status',
                children: (
                  <Row gutter={32}>
                    <Col xs={24} md={12}>
                      {pokemon.stats.map((s) => (
                        <StatusBar key={s.stat.name} name={s.stat.name} value={s.base_stat} color={color} />
                      ))}
                    </Col>
                    <Col xs={24} md={12}>
                      <StatusChart stats={pokemon.stats} color={color} />
                    </Col>
                  </Row>
                ),
              },
              {
                key: 'abilities',
                label: `${getEmojiFromColor(color)} Habilidades`,
                children: (
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {pokemon.abilities?.length ? (
                      pokemon.abilities.map((a) => (
                        <Card
                          key={a.ability.name}
                          size='small'
                          style={{
                            borderRadius: '12',
                            border: `1px solid ${a.isHidden ? '#9E9E9E' : `${color}`}`,
                            background: `${a.isHidden ? '#9E9E9E' : `${color}`}`
                          }}
                        >
                          <Text style={{ fontWeight: 700, textTransform: 'capitalize', fontFamily: "'Nunito', sans-serif" }}>
                            {a.ability.name}
                          </Text>
                          {a.isHidden && (
                            <Tag style={{ marginLeft: 8, fontSize: 10 }} color='default'>
                              Hidden
                            </Tag>
                          )}
                        </Card>
                      ))
                    ) : (
                      <Text style={{ color: '#999' }}>Habilidades não encontradas</Text>
                    )}
                  </div>
                ),
              },
              {
                key: 'moves',
                label: `⚔️ Ataques`,
                children: (
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxHeight: 300, overflow: 'auto' }}>
                    {pokemon.moves?.length ? (
                      <>
                        {pokemon.moves.slice(0, 40).map((m) => (
                          <Tag
                            key={m.move.name}
                            style={{
                              border: `1px solid ${color}44`,
                              borderRadius: 20,
                              fontFamily: "'Nunito', sans-serif",
                              fontWeight: 600,
                              fontSize: 12,
                              textTransform: 'capitalize',
                            }}
                          >
                            {m.move.name}
                          </Tag>
                        ))}
                        {pokemon.moves.length > 40 && (
                          <Text style={{ color: '#999', fontSize: 12, alignSelf: 'center' }}>
                            + {pokemon.moves.length - 40} More moves
                          </Text>
                        )}
                      </>
                    ) : (
                      <Text style={{ color: '#999' }}>Ataques não encontrados</Text>
                    )}
                  </div>
                ),
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
}

export default Details;