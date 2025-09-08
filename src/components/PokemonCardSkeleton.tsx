import { Card, Skeleton } from 'antd';

const PokemonCardSkeleton = () => {
  return (
    <Card
      data-testid="pokemon-card-skeleton"
      className="relative w-64 overflow-hidden"
      style={{
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
      }}
      cover={
        <div className="!flex h-full w-full !items-center !justify-center bg-gray-100 p-4">
          <Skeleton.Image active style={{ width: 200, height: 200 }} />
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Skeleton.Input active style={{ width: '100%', height: 20 }} />
        </div>

        <div className="flex gap-2">
          <Skeleton active style={{ width: '100%', height: 40 }} />
          <Skeleton active style={{ width: '100%', height: 40 }} />
          <Skeleton active style={{ width: '100%', height: 40 }} />
        </div>

        <div className="flex gap-2">
          <Skeleton.Input active style={{ width: '100%', height: 20 }} />
        </div>
      </div>
    </Card>
  );
};

export default PokemonCardSkeleton;
