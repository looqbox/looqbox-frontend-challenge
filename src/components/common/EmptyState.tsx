import React from 'react';
import { Card, Button, Typography, Space } from 'antd';
import { HomeOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface EmptyStateProps {
  searchTerm: string;
  onRetry: () => void;
  isDarkMode: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ searchTerm, onRetry, isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px 0' }}
    >
      <Card
        bordered={false}
        style={{
          width: '100%',
          maxWidth: 500,
          textAlign: 'center',
          borderRadius: 8,
          background: isDarkMode ? '#1F1F1F' : '#FFF',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 24 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: isDarkMode ? '#262626' : '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SearchOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              background: '#ff4d4f',
              borderRadius: '50%',
              width: 24,
              height: 24,
              border: `3px solid ${isDarkMode ? '#1F1F1F' : '#FFF'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#FFF', fontSize: 12, fontWeight: 'bold' }}>✕</Text>
          </div>
        </div>

        <Title level={3} style={{ marginBottom: 8, fontWeight: 600 }}>
          Pokemon Not Found
        </Title>

        <Text
          style={{
            display: 'block',
            color: isDarkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
            marginBottom: 32,
          }}
        >
          We couldn't find a Pokemon named "
          <span style={{ color: '#ff4d4f', fontWeight: 600 }}>{searchTerm}</span>". Please check the
          spelling and try again.
        </Text>

        <Space size={16}>
          <Button
            type='primary'
            size='large'
            icon={<HomeOutlined />}
            onClick={() => navigate('/home')}
            style={{ borderRadius: 6, height: 44, padding: '0 24px' }}
          >
            Go Home
          </Button>
          <Button
            size='large'
            icon={<ReloadOutlined />}
            onClick={onRetry}
            style={{ borderRadius: 6, height: 44, padding: '0 24px' }}
          >
            Try Again
          </Button>
        </Space>
      </Card>
    </div>
  );
};
