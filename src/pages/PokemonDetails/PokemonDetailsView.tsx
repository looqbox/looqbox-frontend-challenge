import { Alert, Button, Card, Divider, Skeleton, Space, Typography } from 'antd';

import { PokemonImage } from '../../components/PokemonImage/PokemonImage';
import { formatPokemonName } from '../../shared/utils/formatPokemonName';
import { dmToMeters, hgToKg, padDex } from './utils';
import { StatsRings } from './components/StatsRings';
import { EvolutionRow } from './components/EvolutionRow';
import { PokemonTypeTag } from '../../components/PokemonTypeTag';
import type { PokemonType } from '../../shared/pokemon/types';

const { Title, Text, Paragraph } = Typography;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export type DetailsBlock<T> = {
  data: T | undefined;
  status: Status;
  error: string | null;
};

export type PokemonDetailsViewProps = {
  normalized: string;

  details: DetailsBlock<{
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Array<{ slot: number; type: { name: PokemonType } }>;
    abilities: Array<{ ability: { name: string }; is_hidden: boolean }>;
    stats: Array<{ base_stat: number; stat: { name: string } }>;
  }>;

  species: DetailsBlock<{
    description: string;
    captureRate: number | null;
  }>;

  evolution: DetailsBlock<string[]>;

  displayName: string;
  onBack: () => void;

  getPokemonIdByName: (name: string) => number | null;
};

export function PokemonDetailsView({
  normalized,
  details,
  species,
  evolution,
  displayName,
  onBack,
  getPokemonIdByName,
}: PokemonDetailsViewProps) {
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

  const anyFailed =
    details.status === 'failed' || species.status === 'failed' || evolution.status === 'failed';

  const anyError = details.error ?? species.error ?? evolution.error ?? 'Unknown error';

  if (anyFailed) {
    return (
      <section className="section-container">
        <Space orientation="vertical" size={16} style={{ width: '100%' }}>
          <Button onClick={onBack}>Back</Button>

          <Alert
            type="error"
            showIcon
            title="Failed to load Pokémon details"
            description={anyError}
            className="looq-alert"
          />
        </Space>
      </section>
    );
  }

  if (!details.data) {
    return (
      <section className="section-container">
        <Skeleton active />
      </section>
    );
  }

  const d = details.data;
  const topTypes = d.types
    .slice()
    .sort((a, b) => a.slot - b.slot)
    .map((t) => t.type.name);

  const description = species.data?.description ?? '';
  const captureRate = species.data?.captureRate ?? null;

  return (
    <section className="section-container">
      <Card className="pokemon-details-card">
        <div className="back-btn-container">
          <Button onClick={onBack} className='back-btn-container'>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 5.4937H2.8437L6.91037 1.42704C7.23537 1.10204 7.23537 0.568703 6.91037 0.243703C6.83328 0.16645 6.7417 0.105161 6.64089 0.0633426C6.54008 0.0215248 6.43201 0 6.32287 0C6.21373 0 6.10566 0.0215248 6.00485 0.0633426C5.90404 0.105161 5.81246 0.16645 5.73537 0.243703L0.243704 5.73537C0.166451 5.81246 0.105161 5.90404 0.063343 6.00485C0.0215252 6.10566 0 6.21373 0 6.32287C0 6.43201 0.0215252 6.54008 0.063343 6.64089C0.105161 6.7417 0.166451 6.83328 0.243704 6.91037L5.73537 12.402C5.81252 12.4792 5.90411 12.5404 6.00492 12.5821C6.10572 12.6239 6.21376 12.6454 6.32287 12.6454C6.43198 12.6454 6.54002 12.6239 6.64082 12.5821C6.74163 12.5404 6.83322 12.4792 6.91037 12.402C6.98752 12.3249 7.04872 12.2333 7.09048 12.1325C7.13223 12.0317 7.15372 11.9236 7.15372 11.8145C7.15372 11.7054 7.13223 11.5974 7.09048 11.4966C7.04872 11.3958 6.98752 11.3042 6.91037 11.227L2.8437 7.16037H12.152C12.6104 7.16037 12.9854 6.78537 12.9854 6.32704C12.9854 5.8687 12.6104 5.4937 12.152 5.4937Z" fill="black"/>
            </svg>
            Back
          </Button>
        </div>

        <div className="pokemon-details-top">
          <div className="pokemon-details-image">
            <PokemonImage
              id={d.id}
              name={displayName}
              priority
              width={378}
              height={378}
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          <div className="pokemon-details-info">
            <Text type="secondary">{padDex(d.id)}</Text>

            <Title level={2} className="pokemon-details-title">
              {displayName}
            </Title>

            <Space wrap size={8}>
              {topTypes.map((t) => (
                <PokemonTypeTag key={t} type={t} />
              ))}
            </Space>

            {species.status === 'loading' ? (
              <Skeleton active paragraph={{ rows: 2 }} />
            ) : (
              <Paragraph className="pokemon-details-description">
                {description || 'No description available.'}
              </Paragraph>
            )}

            <div className="pokemon-details-metrics">
              <div className="metric">
                <Text type="secondary">Height</Text>
                <Text strong>{dmToMeters(d.height)}</Text>
              </div>

              <div className="metric">
                <Text type="secondary">Weight</Text>
                <Text strong>{hgToKg(d.weight)}</Text>
              </div>
            </div>

            <Divider style={{ margin: '24px 0' }} />

            <Title level={4} style={{ margin: 0 }}>
              Abilities
            </Title>

            <div className="pokemon-details-abilities">
              {d.abilities.map((a) => (
                <div key={a.ability.name} className="ability-pill">
                  {formatPokemonName(a.ability.name)}
                  {a.is_hidden ? ' (hidden)' : ''}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pokemon-details-stats">
          <StatsRings stats={d.stats} captureRate={captureRate} />
        </div>

        <Divider />

        <Title
          level={3}
          style={{ margin: 0, textAlign: 'center' }}
          className="pokemon-details-title"
        >
          Evolution
        </Title>

        {evolution.status === 'loading' ? (
          <Skeleton active paragraph={{ rows: 2 }} />
        ) : evolution.data?.length ? (
          <EvolutionRow names={evolution.data} getPokemonIdByName={getPokemonIdByName} />
        ) : (
          <Text type="secondary">No evolution data available.</Text>
        )}
      </Card>
    </section>
  );
}
