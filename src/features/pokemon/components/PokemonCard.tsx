import { Image, Card, Flex, Typography } from 'antd';
import { useState } from 'react';

const { Text } = Typography;

interface Props {
  name: string;
  url: string;
  onOpenDetails: (id: string) => void;
}

export function PokemonCard({ name, url, onOpenDetails }: Props) {
  const id = url.split('/').filter(Boolean).pop();
  const [imageUrl, setImageUrl] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`
  );
  const [imageError, setImageError] = useState(0);

  const handleImageError = () => {
    if (imageError === 0) {
      setImageUrl(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      );
      setImageError(1);
    } else {
      setImageUrl('');
    }
  };

  return (
    <Card
      onClick={() => onOpenDetails(id!)}
      hoverable
      style={{
        background: 'linear-gradient(145deg, rgb(17, 17, 17), rgb(22, 22, 37))',
        cursor: 'pointer',
        border: 'none',
        height: '100%',
      }}
    >
      <Flex
        vertical
        align="center"
        justify="space-between"
        style={{ height: '100%' }}
        gap={12}
      >
        <div
          style={{
            width: 120,
            height: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {imageUrl ? (
            <Image
              width={120}
              height={120}
              src={imageUrl}
              alt={`pokemon ${name}`}
              preview={false}
              onError={handleImageError}
              style={{
                objectFit: 'contain',
              }}
            />
          ) : (
            <div
              style={{
                width: 120,
                height: 120,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#333',
                borderRadius: 8,
              }}
            >
              <Text style={{ color: '#666', fontSize: 40 }}>?</Text>
            </div>
          )}
        </div>

        <Flex vertical align="center" gap={4}>
          <Text
            style={{
              color: '#888',
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            #{id?.padStart(3, '0')}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              textTransform: 'capitalize',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            {name}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
