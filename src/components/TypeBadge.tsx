import React from 'react';
import { Tag } from 'antd'
import { getTypeColor } from '../utils.ts';

interface TypeBadgeProps {
  type: string;
  size?: 'small' | 'default';
}


const TypeBadge: React.FC<TypeBadgeProps> = ({ type, size = 'default' }) => {
  const color = getTypeColor(type);

  return (
    <Tag
      style={{
        backgroundColor: color,
        color: '#fff',
        border: '1px solid rgba(255,255,255, 0.45)',
        fontWeight: 600,
        fontSize: size === 'small' ? 10 : 12,
        padding: size === 'small' ? '0px 6px' : '2px 10px',
        borderRadius: 20,
        textTransform: 'uppercase',
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        letterSpacing: 0.5,
      }}
    >
      {type}
    </Tag>
  )
}

export default TypeBadge;