import { Alert, Empty, Skeleton, Space, Typography } from 'antd';
import type { PokemonIndexItem } from '../../services/pokeapi';
import { PokemonGrid } from '../PokemonGrid/PokemonGrid';
import emptySearchImg from '../../assets/icons/search_empty_icon.svg';

const { Title, Text } = Typography;

type Props = {
  title?: string;
  loading: boolean;
  error?: string | null;
  items: PokemonIndexItem[];
  showEmpty?: boolean;
  extra?: React.ReactNode;
  detailsPath: (name: string) => string;
};

export function SearchEmptyState() {
  return (
    <Empty
      image={emptySearchImg}
      description={
        <div style={{ textAlign: 'center' }}>
          <Title level={3} style={{ margin: 0 }}>
            No Pokémon Found
          </Title>
          <Text type="secondary">Try adjusting your search or filters</Text>
        </div>
      }
      className="pokemon-search-empty-state"
    />
  );
}

export function PokemonSearchResults({
  title,
  loading,
  error,
  items,
  showEmpty = false,
  extra,
  detailsPath,
}: Props) {
  if (loading) return <Skeleton active />;

  if (error) {
    return (
      <Alert
        type="warning"
        showIcon
        title="Something went wrong"
        description={error}
        className="looq-alert looq-alert--warning"
      />
    );
  }

  if (showEmpty && items.length === 0) {
    return <SearchEmptyState />;
  }

  return (
    <Space orientation="vertical" size={12} style={{ width: '100%' }}>
      {title ? (
        <Title level={4} style={{ margin: 0 }}>
          {title}
        </Title>
      ) : null}
      {items.length > 0 ? <PokemonGrid items={items} detailsPath={detailsPath} /> : null}
      {extra}
    </Space>
  );
}
