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
    <Row gutter={[16, 16]} className='pokemon-grid-container'>
      {items.map((p, index) => (
        <Col key={p.id} xs={24} sm={8} md={6} className='pokemon-grid-col'>
          <Link to={detailsPath(p.name)} aria-label={`Open details for ${formatPokemonName(p.name)}`}>
            <Card
              hoverable
              cover={<PokemonImage id={p.id} name={formatPokemonName(p.name)} variant='artwork' priority={index === 0} />}
            >
              <Card.Meta title={formatPokemonName(p.name)} description={`#${p.id}`} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
