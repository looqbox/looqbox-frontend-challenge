import { Descriptions } from 'antd';
import { TypesComponent } from '../TypesComponent/TypesComponent';
import { TypeProps } from '../../../../shared/service.interface';

interface DetailsProps {
  pokemonName: string;
  genus: string;
  weight: number;
  habitat: string;
  types: TypeProps[];
}

export const Details = ({ pokemonName, genus, weight, habitat, types }: DetailsProps) => {
  return (
    <Descriptions title={'DETAILS'}>
      <Descriptions.Item label="NAME">{pokemonName.toUpperCase()}</Descriptions.Item>
      <Descriptions.Item label="GENUS">{genus.toUpperCase()}</Descriptions.Item>
      <Descriptions.Item label="WEIGHT">{weight}</Descriptions.Item>
      <Descriptions.Item label="HABITAT">{habitat.toUpperCase()}</Descriptions.Item>
      <Descriptions.Item label="TYPE">
        <TypesComponent types={types} />
      </Descriptions.Item>
    </Descriptions>
  );
};
