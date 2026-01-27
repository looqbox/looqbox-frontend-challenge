import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import type { PokemonIndexItem } from '../../services/pokeapi';
import { PokemonImage } from '../PokemonImage/PokemonImage';
import { formatPokemonName } from '../../shared/utils/formatPokemonName';

type Props = {
  items: PokemonIndexItem[];
  detailsPath: (name: string) => string;
};

export function PokemonGrid({ items, detailsPath }: Props) {
  return (
    <Row gutter={[16, 16]}>
      {items.map((p) => (
        <Col key={p.id} xs={12} sm={8} md={6}>
          <Link to={detailsPath(p.name)} aria-label={`Open details for ${formatPokemonName(p.name)}`}>
            <Card
              hoverable
              cover={<PokemonImage id={p.id} name={formatPokemonName(p.name)} />}
            >
              <Card.Meta title={formatPokemonName(p.name)} description={`#${p.id}`} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
