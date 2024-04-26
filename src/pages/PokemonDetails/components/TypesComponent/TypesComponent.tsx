import { Tag } from 'antd';
import { TypeColors } from '../../../../shared/consts';
import { TypeProps } from '../../../../shared/service.interface';

interface TypesComponentProps {
  types: TypeProps[];
}

export const TypesComponent = ({ types }: TypesComponentProps) => {
  return types.map((elem, index) => {
    return (
      <Tag key={index} color={TypeColors[elem.type.name.toUpperCase() as keyof typeof TypeColors]}>
        {elem.type.name.toUpperCase()}
      </Tag>
    );
  });
};
