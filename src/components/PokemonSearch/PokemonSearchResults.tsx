import { Alert, Empty, Skeleton, Space, Typography } from 'antd';
import type { PokemonIndexItem } from '../../services/pokeapi';
import { PokemonGrid } from '../PokemonGrid/PokemonGrid';

const { Title } = Typography;

type Props = {
  title?: string;
  loading: boolean;
  error?: string | null;
  items: PokemonIndexItem[];
  emptyText?: string;
  showEmpty?: boolean;
  extra?: React.ReactNode;
  detailsPath: (name: string) => string;
};

export function PokemonSearchResults({
  title,
  loading,
  error,
  items,
  emptyText = 'No results found',
  showEmpty = false,
  extra,
  detailsPath,
}: Props) {
  if (loading) return <Skeleton active />;

  if (error) {
    return <Alert type="warning" showIcon title="Something went wrong" description={error} />;
  }

  if (showEmpty && items.length === 0) {
    return <Empty description={emptyText} />;
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
