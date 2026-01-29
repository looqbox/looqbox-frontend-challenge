import { useEffect, useMemo } from 'react';
import {
  Alert,
  Button,
  Card,
  Descriptions,
  Divider,
  Progress,
  Skeleton,
  Space,
  Tag,
  Typography,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { fetchPokemonDetails } from '../../features/pokemon/pokemonThunks';
import { PokemonImage } from '../../components/PokemonImage/PokemonImage';
import { formatPokemonName } from '../../shared/utils/formatPokemonName';

const { Title, Text } = Typography;

function statPercent(baseStat: number) {
  // Most Pokémon base stats fit within ~1..255
  const MAX = 255;
  const pct = Math.round((baseStat / MAX) * 100);
  return Math.max(0, Math.min(100, pct));
}

export function PokemonDetails() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name } = useParams<{ name: string }>();
  const normalized = name ? name.toLowerCase() : '';

  const details = useAppSelector((s) => s.pokemon.detailsByName[normalized]);
  const status = useAppSelector((s) => s.pokemon.detailsStatusByName[normalized] ?? 'idle');
  const error = useAppSelector((s) => s.pokemon.detailsErrorByName[normalized] ?? null);

  const displayName = useMemo(
    () => formatPokemonName(details?.name ?? normalized),
    [details?.name, normalized],
  );

  useEffect(() => {
    if (!normalized) return;

    if (!details && status === 'idle') {
      dispatch(fetchPokemonDetails({ name: normalized }));
    }
  }, [dispatch, normalized, details, status]);

  if (!normalized) {
    return (
      <Alert
        type="warning"
        showIcon
        title="Invalid Pokémon name"
        className="looq-alert looq-alert--warning"
      />
    );
  }

  if (status === 'failed') {
    return (
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 16 }}>
        <Space orientation="vertical" size={16} style={{ width: '100%' }}>
          <Button onClick={() => navigate(-1)}>Back</Button>
          <Alert
            type="error"
            showIcon
            title="Failed to load Pokémon details"
            description={error ?? 'Unknown error'}
            className="looq-alert"
          />
          <Button
            type="primary"
            onClick={() => dispatch(fetchPokemonDetails({ name: normalized }))}
          >
            Retry
          </Button>
        </Space>
      </section>
    );
  }

  if (!details) {
    return (
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 16 }}>
        <Space orientation="vertical" size={16} style={{ width: '100%' }}>
          <Skeleton active />
        </Space>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: 16 }}>
      <Space orientation="vertical" size={16} style={{ width: '100%' }}>
        <Space wrap align="center" style={{ justifyContent: 'space-between', width: '100%' }}>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </Space>

        <Card>
          <Space orientation="vertical" size={12} style={{ width: '100%' }}>
            <Space wrap align="center" style={{ justifyContent: 'space-between', width: '100%' }}>
              <Space orientation="vertical" size={0}>
                <Title level={2} style={{ margin: 0 }}>
                  {displayName}
                </Title>
                <Text type="secondary">#{details.id}</Text>
              </Space>

              <div aria-label={`${displayName} image`}>
                <PokemonImage
                  id={details.id}
                  name={displayName}
                  height={220}
                  variant="artwork"
                  priority
                />
              </div>
            </Space>

            <Descriptions size="small" column={1} bordered>
              <Descriptions.Item label="Types">
                <Space wrap>
                  {details.types
                    .slice()
                    .sort((a, b) => a.slot - b.slot)
                    .map((t) => (
                      <Tag key={t.type.name}>{t.type.name}</Tag>
                    ))}
                </Space>
              </Descriptions.Item>

              <Descriptions.Item label="Abilities">
                <Space wrap>
                  {details.abilities.map((a) => (
                    <Tag key={a.ability.name}>
                      {a.ability.name}
                      {a.is_hidden ? ' (hidden)' : ''}
                    </Tag>
                  ))}
                </Space>
              </Descriptions.Item>
            </Descriptions>

            <Divider style={{ margin: '8px 0' }} />

            <Title level={4} style={{ margin: 0 }}>
              Base stats
            </Title>

            <Space orientation="vertical" size={10} style={{ width: '100%' }}>
              {details.stats.map((s) => {
                const label = s.stat.name.replaceAll('-', ' ');
                const pct = statPercent(s.base_stat);

                return (
                  <div key={s.stat.name}>
                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                      <Text>{label}</Text>
                      <Text type="secondary">{s.base_stat}</Text>
                    </Space>
                    <Progress percent={pct} showInfo={false} />
                  </div>
                );
              })}
            </Space>
          </Space>
        </Card>
      </Space>
    </section>
  );
}
