import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Button, Tag, Typography, Card, Space } from 'antd';
import {
  ArrowLeftOutlined,
  ColumnWidthOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  RadarChartOutlined,
} from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchPokemonDetails } from '../../store/pokemonSlice';
import { PokemonStats } from '../../components/pokemon/PokemonStats';
import { StatBar } from '../../components/pokemon/StatBar';
import { typeColors } from '../../utils/typeColors';
import { formatPokemonName } from '../../utils/formatName';
import { useTheme } from '../../hooks/useTheme';

const { Title, Text } = Typography;

export const Details: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isDarkMode } = useTheme();
  const { selectedPokemon, loading } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    if (name) dispatch(fetchPokemonDetails(name));
  }, [name, dispatch]);

  if (loading || !selectedPokemon)
    return <div style={{ padding: 100, textAlign: 'center' }}>Loading...</div>;

  const mainType = selectedPokemon.types[0].type.name;
  const color = typeColors[mainType];
  const totalStats = selectedPokemon.stats.reduce((acc, s) => acc + s.base_stat, 0);

  return (
    <div>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        style={{ marginBottom: 24, borderRadius: 6 }}
      >
        Back to list
      </Button>

      <Row gutter={[32, 32]}>
        <Col xs={24} lg={9}>
          <Card
            bordered={false}
            style={{
              borderRadius: 8,
              overflow: 'hidden',
              background: isDarkMode ? '#1F1F1F' : '#FFF',
            }}
            bodyStyle={{ padding: 0 }}
          >
            <div
              style={{
                background: `${color}26`,
                height: 220,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <img
                src={selectedPokemon.sprites.other['official-artwork'].front_default}
                style={{ width: '220px', zIndex: 1 }}
                alt=''
              />
              <div style={{ position: 'absolute', top: 20, right: 20 }}>
                <Text
                  style={{
                    color: isDarkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
                    fontWeight: 600,
                  }}
                >
                  #{String(selectedPokemon.id).padStart(3, '0')}
                </Text>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <Title level={1} style={{ margin: '0 0 8px 0', fontSize: 24 }}>
                {formatPokemonName(selectedPokemon.name)}
              </Title>
              <Space style={{ marginBottom: 24 }}>
                {selectedPokemon.types.map((t) => (
                  <Tag
                    key={t.type.name}
                    color={typeColors[t.type.name]}
                    style={{ borderRadius: 6, border: 'none', fontWeight: 600 }}
                  >
                    {t.type.name.toUpperCase()}
                  </Tag>
                ))}
              </Space>

              <Row gutter={16} style={{ marginBottom: 24 }}>
                <Col span={12}>
                  <div
                    style={{
                      padding: '12px',
                      background: isDarkMode ? '#141414' : '#F5F5F5',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <ColumnWidthOutlined style={{ color }} />
                    <Text strong>{selectedPokemon.height / 10} m</Text>
                    <Text type='secondary' style={{ fontSize: 12 }}>
                      Height
                    </Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    style={{
                      padding: '12px',
                      background: isDarkMode ? '#141414' : '#F5F5F5',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <ExperimentOutlined style={{ color }} />
                    <Text strong>{selectedPokemon.weight / 10} kg</Text>
                    <Text type='secondary' style={{ fontSize: 12 }}>
                      Weight
                    </Text>
                  </div>
                </Col>
              </Row>

              <Space direction='vertical' size={20} style={{ width: '100%' }}>
                <div>
                  <Text
                    type='secondary'
                    style={{ display: 'block', marginBottom: 8, fontSize: 12 }}
                  >
                    Abilities
                  </Text>
                  <Space wrap>
                    {selectedPokemon.abilities.map((a) => (
                      <Tag
                        key={a.ability.name}
                        style={{
                          borderRadius: 6,
                          background: isDarkMode ? '#141414' : '#F5F5F5',
                          border: 'none',
                          color: isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
                        }}
                      >
                        {formatPokemonName(a.ability.name)}
                      </Tag>
                    ))}
                  </Space>
                </div>

                <div>
                  <Text
                    type='secondary'
                    style={{ display: 'block', marginBottom: 8, fontSize: 12 }}
                  >
                    Moves
                  </Text>
                  <Space wrap>
                    {selectedPokemon.moves.slice(0, 8).map((m) => (
                      <Tag
                        key={m.move.name}
                        style={{
                          borderRadius: 6,
                          background: isDarkMode ? '#141414' : '#F5F5F5',
                          border: 'none',
                          color: isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
                        }}
                      >
                        {formatPokemonName(m.move.name)}
                      </Tag>
                    ))}
                  </Space>
                </div>
              </Space>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={15}>
          <Space direction='vertical' size={24} style={{ width: '100%' }}>
            <Card
              title={
                <Space>
                  <ThunderboltOutlined style={{ color: color }} /> Base Stats
                </Space>
              }
              bordered={false}
              style={{ borderRadius: 8, background: isDarkMode ? '#1F1F1F' : '#FFF' }}
            >
              {selectedPokemon.stats.map((s) => (
                <StatBar
                  key={s.stat.name}
                  label={s.stat.name}
                  value={s.base_stat}
                  isDarkMode={isDarkMode}
                />
              ))}
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 16,
                  borderTop: `1px solid ${isDarkMode ? '#333' : '#F0F0F0'}`,
                }}
              >
                <Text strong>
                  Total: <span style={{ color: color }}>{totalStats}</span>
                </Text>
              </div>
            </Card>

            <Card
              title={
                <Space>
                  <RadarChartOutlined style={{ color: color }} /> Stats Overview
                </Space>
              }
              bordered={false}
              style={{ borderRadius: 8, background: isDarkMode ? '#1F1F1F' : '#FFF' }}
            >
              <PokemonStats stats={selectedPokemon.stats} color={color} />
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
