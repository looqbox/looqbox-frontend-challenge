import { Col, Divider, Input, Row, Tag, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Text } = Typography;

const typeEmoji = {
  normal: '⭐',
  fighting: '👊',
  flying: '🦅',
  poison: '☠️',
  ground: '🌍',
  rock: '🪨',
  bug: '🐛',
  ghost: '👻',
  steel: '⚙️',
  fire: '🔥',
  water: '💧',
  grass: '🌿',
  electric: '⚡',
  psychic: '🔮',
  ice: '❄️',
  dragon: '🐉',
  dark: '🌑',
  fairy: '✨',
  stellar: '',
  unknown: '',
};

const typeColors = {
  fire: '#FF6B35',
  water: '#4FC3F7',
  grass: '#66BB6A',
  electric: '#FFD600',
  psychic: '#F48FB1',
  ice: '#80DEEA',
  dragon: '#7E57C2',
  dark: '#546E7A',
  fairy: '#F06292',
  normal: '#BCAAA4',
  fighting: '#EF5350',
  flying: '#90CAF9',
  poison: '#AB47BC',
  ground: '#FFA726',
  rock: '#8D6E63',
  bug: '#9CCC65',
  ghost: '#7C4DFF',
  steel: '#78909C',
};

interface PokemonNavBarProps {
  search?: string;
  selectedType?: string | null;
  onSearch: (text: string) => void;
  onTypeClick: (type: string) => void;
}

export function PokemonNavBar({
  search = '',
  selectedType = null,
  onSearch,
  onTypeClick,
}: PokemonNavBarProps) {
  return (
    <nav>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #EF5350 50%, #fff 50%)',
                    border: '3px solid #333',
                    position: 'relative',
                    animation: 'glow 2s ease-in-out infinite',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#fff',
                      border: '2px solid #333',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: 22,
                    fontWeight: 'bold',
                    letterSpacing: 2,
                    color: '#fff',
                    textShadow: '0 0 30px rgba(255,214,0,0.5)',
                  }}
                >
                  POKÉDEX
                </span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: '#444',
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: 2,
                  marginTop: 2,
                }}
              >
                KANTO REGION • GEN I
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" span={16}>
          <Input
            size="large"
            placeholder="Buscar por nome ou id..."
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            allowClear
          />
        </Col>
      </Row>

      <div style={{ margin: '16px 0' }}>
        {Object.entries(typeColors).map(([type, color]) => {
          const isSelected = selectedType === type;

          return (
            <Tag
              key={type}
              color={color}
              onClick={() => onTypeClick(type)}
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                cursor: 'pointer',
                margin: '4px 6px 0px 6px',
                opacity: isSelected ? 1 : 0.7,
                transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.2s ease',
                border: isSelected ? '2px solid #fff' : 'none',
              }}
            >
              <Text style={{ color: isSelected ? '#fff' : 'inherit' }}>
                {typeEmoji[type as keyof typeof typeEmoji]} {type}
              </Text>
            </Tag>
          );
        })}
      </div>
      <Divider style={{ borderColor: '#7cb305' }} />
    </nav>
  );
}
