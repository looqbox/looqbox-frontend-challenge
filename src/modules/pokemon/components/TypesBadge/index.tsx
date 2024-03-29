import{ Tag } from 'antd/lib';
import { colors } from "@modules/pokemon/styles/colors";

export type BadgeProps = {
    types: string[];
}

export default function TypesBadge({types}: BadgeProps) {
  return <div style={{display: 'flex', justifyContent: 'center', textTransform: 'capitalize'}}>
    {types.map((type) => (
      <Tag key={type} color={colors[type]}>{type}</Tag>
    ))}
  </div>;
}