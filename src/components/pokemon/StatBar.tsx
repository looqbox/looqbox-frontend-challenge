import React from 'react';
import { Progress, Typography } from 'antd';

const { Text } = Typography;

const statColors: Record<string, string> = {
  hp: '#52c41a',
  attack: '#ff4d4f',
  defense: '#1677ff',
  'special-attack': '#722ed1',
  'special-defense': '#13c2c2',
  speed: '#faad14',
};

export const StatBar: React.FC<{ label: string; value: number; isDarkMode: boolean }> = ({
  label,
  value,
  isDarkMode,
}) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8, gap: 12 }}>
    <Text
      style={{
        width: 80,
        fontSize: 12,
        textAlign: 'right',
        color: isDarkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
      }}
    >
      {label.replace('special-', 'Sp. ').toUpperCase()}
    </Text>
    <Text strong style={{ width: 30, color: isDarkMode ? '#fff' : '#000' }}>
      {value}
    </Text>
    <Progress
      percent={(value / 150) * 100}
      showInfo={false}
      strokeColor={statColors[label.toLowerCase()] || '#d9d9d9'}
      trailColor={isDarkMode ? '#262626' : '#f5f5f5'}
      style={{ flex: 1 }}
    />
  </div>
);
