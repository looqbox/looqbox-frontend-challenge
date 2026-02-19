import { Card, Tag, Flex, Typography, Divider } from 'antd';
import { useAppSelector } from '@/app/hooks';
import { typeColors } from '@/utils/pokemonColors';

const { Text, Title } = Typography;

export function TypeDetailsCard() {
  const typeDetails = useAppSelector((state) => state.pokemon.typeDetails);

  if (!typeDetails) return null;

  return (
    <Card
      style={{
        marginTop: 16,
        background: 'linear-gradient(145deg, rgb(17, 17, 17), rgb(22, 22, 37))',
      }}
    >
      <Title level={4} style={{ color: '#fff', textTransform: 'capitalize' }}>
        Tipo: {typeDetails.name}
      </Title>

      <Divider style={{ borderColor: '#444' }} />

      <Flex vertical gap={12}>
        <div>
          <Text strong style={{ color: '#fff' }}>
            🔴 Fraco contra:
          </Text>
          <Flex gap={4} wrap="wrap" style={{ marginTop: 8 }}>
            {typeDetails.damage_relations.double_damage_from.map((type) => (
              <Tag
                key={type.name}
                color={typeColors[type.name as keyof typeof typeColors]}
              >
                {type.name}
              </Tag>
            ))}
          </Flex>
        </div>

        <div>
          <Text strong style={{ color: '#fff' }}>
            🟢 Forte contra:
          </Text>
          <Flex gap={4} wrap="wrap" style={{ marginTop: 8 }}>
            {typeDetails.damage_relations.double_damage_to.map((type) => (
              <Tag
                key={type.name}
                color={typeColors[type.name as keyof typeof typeColors]}
              >
                {type.name}
              </Tag>
            ))}
          </Flex>
        </div>

        <div>
          <Text strong style={{ color: '#fff' }}>
            🛡️ Resistente a:
          </Text>
          <Flex gap={4} wrap="wrap" style={{ marginTop: 8 }}>
            {typeDetails.damage_relations.half_damage_from.map((type) => (
              <Tag
                key={type.name}
                color={typeColors[type.name as keyof typeof typeColors]}
              >
                {type.name}
              </Tag>
            ))}
          </Flex>
        </div>
      </Flex>
    </Card>
  );
}
