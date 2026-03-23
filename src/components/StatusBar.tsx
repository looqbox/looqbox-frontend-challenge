import React from 'react'
import { Typography } from 'antd';
import { formatStatName } from '../utils.ts';

const { Text } = Typography;

interface StatusBarProps {
  name: string;
  value: number;
  color: string;
}
const StatusBar: React.FC<StatusBarProps> = ({ name, value, color }) => {
  const percent = Math.min((value / 255) * 100, 100);

  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Text style={{
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "'Space Mono', sans serif",
          color: '#888',
          letterSpacing: 0.7,
          textTransform: 'uppercase'
        }}>
          {formatStatName(name)}
        </Text>
        <Text style={{
          fontSize: 13,
          fontWeight: 800,
          color: '#444',
          fontFamily: "'Space Mono', sans serif",
        }}>
          {value}
        </Text>
      </div>
      <div style={{
        height: 10,
        background: '#f0f0f0',
        borderRadius: 20,
        overflow: 'hidden'
      }}>
        <div
          style={{
            height: '100%',
            width: `${percent}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            borderRadius: 20,
            transition: 'width 1s ease'
          }}
        />
      </div>
    </div>
  );
};

export default StatusBar;